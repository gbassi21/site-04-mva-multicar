import crypto from "node:crypto";
import fs from "node:fs";
import path from "node:path";
import { HtmlBasePlugin } from "@11ty/eleventy";
import Image, { generateHTML } from "@11ty/eleventy-img";
import { carroceria, icone, tracos } from "./lib/icones.js";
import { RAIZ_VEICULOS, arquivosDoVeiculo, formatoNumero, formatoReal, opcoesFiltros, ordemPadrao, slug, temCapa } from "./lib/veiculos.js";
import ilustracoes from "./src/_data/ilustracoes.js";
import logotipo from "./src/_data/logotipo.js";

const RAIZ_IA = "imagens-ia";
const loja = JSON.parse(fs.readFileSync("src/_data/loja.json", "utf8"));

// Metadados das imagens processadas: "<pasta>/<arquivo>.png" (veículos) ou "ia/<arquivo>.png".
const fotos = new Map();

const OPCOES_BASE = {
  formats: ["avif", "webp"],
  urlPath: "/img/",
  sharpAvifOptions: { quality: 52, effort: 4 },
  sharpWebpOptions: { quality: 78 },
  filenameFormat(id, src, width, format) {
    const pasta = path.basename(path.dirname(src)).slice(0, 28);
    return `${pasta}-${path.basename(src, path.extname(src))}-${id}-${width}.${format}`;
  },
};
const OPCOES_VEICULO = { ...OPCOES_BASE, widths: [320, 640, 960, 1536] };
const OPCOES_IA = { ...OPCOES_BASE, widths: [480, 960, 1536] };

async function processarImagens(saida) {
  const tarefas = [];
  if (fs.existsSync(RAIZ_VEICULOS)) {
    for (const pasta of fs.readdirSync(RAIZ_VEICULOS)) {
      if (!temCapa(pasta)) continue;
      for (const arquivo of arquivosDoVeiculo(pasta)) {
        tarefas.push([`${pasta}/${arquivo}`, `${RAIZ_VEICULOS}/${pasta}/${arquivo}`, OPCOES_VEICULO]);
      }
    }
  }
  if (fs.existsSync(RAIZ_IA)) {
    for (const arquivo of fs.readdirSync(RAIZ_IA).filter((nome) => /\.png$/i.test(nome))) {
      tarefas.push([`ia/${arquivo}`, `${RAIZ_IA}/${arquivo}`, OPCOES_IA]);
    }
  }
  await Promise.all(tarefas.map(async ([chave, arquivo, opcoes]) => fotos.set(chave, await Image(arquivo, { ...opcoes, outputDir: path.join(saida, "img") }))));
}

// Favicon, ícones de atalho e prévia de link, desenhados a partir do logo.
async function gerarMarca(saida) {
  fs.mkdirSync(saida, { recursive: true });
  fs.writeFileSync(path.join(saida, "favicon.svg"), logotipo.icone(64));
  await Image(Buffer.from(logotipo.icone(512)), {
    formats: ["png"],
    widths: [180, 512],
    outputDir: saida,
    filenameFormat: (id, src, width, format) => `icone-${width}.${format}`,
  });
  await Image(Buffer.from(logotipo.compartilhamento()), {
    formats: ["jpeg"],
    widths: [1200],
    outputDir: saida,
    sharpJpegOptions: { quality: 82, mozjpeg: true },
    filenameFormat: () => "og-mva.jpg",
  });
}

function atributos(alt, sizes, prioridade) {
  return {
    alt,
    sizes,
    loading: prioridade ? "eager" : "lazy",
    decoding: prioridade ? "sync" : "async",
    ...(prioridade ? { fetchpriority: "high" } : {}),
  };
}

// Enquanto a imagem não existe: bloco de design no tom da marca, com o ícone e os traços do logo.
// O nome do arquivo esperado fica só no comentário do HTML.
function blocoDeMarca(arquivo, proporcao, nomeIcone = "car-front", tom = "preto") {
  return `<!-- imagem a definir: imagens-ia/${arquivo} (${proporcao}) --><span class="bloco bloco--${tom}" aria-hidden="true">${tracos("bloco__tracos")}${icone(nomeIcone, "bloco__icone")}</span>`;
}

// <picture> de uma imagem de veículo já processada (imagens-geradas/<pasta>/NN-nome.png).
function fotoVeiculo(chave, alt, sizes = "100vw", prioridade = false) {
  const meta = fotos.get(chave);
  if (!meta) return blocoDeMarca(chave, "3:2");
  return generateHTML(meta, atributos(alt, sizes, prioridade));
}

// Imagem ilustrativa (src/_data/ilustracoes.js) ou, se ainda não existir, o bloco "imagem a definir".
function ilustracao(nome, sizes = "100vw", prioridade = false) {
  const item = ilustracoes[nome];
  if (!item) return "";
  const meta = fotos.get(`ia/${item.arquivo}`);
  if (!meta) return blocoDeMarca(item.arquivo, item.proporcao, item.icone, item.tom);
  const html = generateHTML(meta, atributos(item.alt, sizes, prioridade)).replace("<img ", `<img style="object-position:${item.foco}" `);
  return `${html}<span class="etiqueta">Imagem ilustrativa</span>`;
}

function temIlustracao(nome) {
  const item = ilustracoes[nome];
  return Boolean(item && fotos.has(`ia/${item.arquivo}`));
}

// Pré-carrega a imagem ilustrativa da primeira tela, se ela já existir.
function precarregarIlustracao(nome, sizes = "100vw") {
  const item = ilustracoes[nome];
  const meta = item && fotos.get(`ia/${item.arquivo}`);
  if (!meta?.avif) return "";
  const srcset = meta.avif.map((i) => i.srcset).join(", ");
  return `<link rel="preload" as="image" type="image/avif" imagesrcset="${srcset}" imagesizes="${sizes}" fetchpriority="high">`;
}

function linkWhatsApp(texto, numero = loja.whatsapp.numero) {
  return `https://wa.me/${numero}?text=${encodeURIComponent(texto)}`;
}

export default function (eleventyConfig) {
  eleventyConfig.on("eleventy.before", async ({ directories }) => {
    await Promise.all([processarImagens(directories.output), gerarMarca(directories.output)]);
  });

  eleventyConfig.addPassthroughCopy("src/assets/css");
  eleventyConfig.addPassthroughCopy("src/assets/js");
  eleventyConfig.addPassthroughCopy("src/assets/fontes");
  eleventyConfig.addPassthroughCopy({ "src/_headers": "_headers" });
  eleventyConfig.addWatchTarget("src/assets/");
  eleventyConfig.addWatchTarget(`${RAIZ_IA}/`);
  eleventyConfig.addWatchTarget("lib/");

  eleventyConfig.addNunjucksGlobal("fotoVeiculo", fotoVeiculo);
  eleventyConfig.addNunjucksGlobal("ilustracao", ilustracao);
  eleventyConfig.addNunjucksGlobal("precarregarIlustracao", precarregarIlustracao);
  eleventyConfig.addNunjucksGlobal("wa", linkWhatsApp);
  eleventyConfig.addNunjucksGlobal("temIlustracao", temIlustracao);
  eleventyConfig.addNunjucksGlobal("temFoto", (chave) => fotos.has(chave));
  eleventyConfig.addNunjucksGlobal("icone", icone);
  eleventyConfig.addNunjucksGlobal("carroceria", carroceria);
  eleventyConfig.addNunjucksGlobal("tracos", tracos);

  eleventyConfig.addFilter("reais", (valor) => (valor || valor === 0 ? formatoReal.format(valor) : ""));
  eleventyConfig.addFilter("numero", (valor) => (valor || valor === 0 ? formatoNumero.format(valor) : ""));
  // Versão pelo conteúdo do arquivo: o navegador não mistura HTML novo com CSS ou JS antigo.
  eleventyConfig.addFilter("versao", (caminho) => `${caminho}?v=${crypto.createHash("md5").update(fs.readFileSync(`src${caminho}`)).digest("hex").slice(0, 8)}`);

  eleventyConfig.addFilter("slug", slug);
  eleventyConfig.addFilter("opcoesFiltros", opcoesFiltros);
  eleventyConfig.addFilter("buscarVeiculo", (lista, pasta) => lista.find((v) => v.page.fileSlug === pasta));
  // Texto sem acentos e em minúsculas, para a busca da vitrine.
  eleventyConfig.addFilter("textoBusca", (texto) => slug(texto).replace(/-/g, " "));
  // Até 3 outros carros: mesma carroceria primeiro, depois os de preço mais próximo.
  eleventyConfig.addFilter("parecidos", (lista, atual, limite = 3) => {
    const outros = lista.filter((v) => v.page.fileSlug !== atual);
    const base = lista.find((v) => v.page.fileSlug === atual)?.data;
    if (!base) return outros.slice(0, limite);
    const distancia = (v) => (v.data.carroceria === base.carroceria ? 0 : 1e9) + Math.abs(v.data.preco - base.preco);
    return [...outros].sort((a, b) => distancia(a) - distancia(b)).slice(0, limite);
  });
  eleventyConfig.addFilter("contarCarroceria", (lista, tipo) => lista.filter((v) => v.data.carroceria === tipo).length);

  eleventyConfig.addCollection("veiculos", (api) => {
    const todos = api.getFilteredByGlob("src/veiculos/*.md");
    for (const item of todos.filter((v) => !temCapa(v.page.fileSlug))) {
      console.warn(`[aviso] ${item.page.fileSlug}: sem ${RAIZ_VEICULOS}/${item.page.fileSlug}/01-capa.png; fica fora do site.`);
    }
    return todos.filter((v) => temCapa(v.page.fileSlug)).sort(ordemPadrao);
  });

  // No GitHub Pages o site fica em /<repositório>/: o build de publicação passa --pathprefix e o plugin ajusta os links.
  eleventyConfig.addPlugin(HtmlBasePlugin);

  return {
    dir: { input: "src", output: "_site", includes: "_includes", data: "_data" },
    templateFormats: ["njk", "md"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  };
}
