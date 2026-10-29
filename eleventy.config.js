import crypto from "node:crypto";
import fs from "node:fs";
import path from "node:path";
import Image, { generateHTML } from "@11ty/eleventy-img";
import icone from "./lib/icones.js";
import { RAIZ_VEICULOS, arquivosDoVeiculo, formatoNumero, formatoReal, ordemPadrao, temCapa } from "./lib/veiculos.js";
import ilustracoes from "./src/_data/ilustracoes.js";
import logotipo from "./src/_data/logotipo.js";

const RAIZ_IA = "imagens-ia";
const loja = JSON.parse(fs.readFileSync("src/_data/loja.json", "utf8"));

// Metadados das imagens processadas: "<pasta>/<arquivo>.png" (veículos) ou "ia/<arquivo>.png".
const fotos = new Map();

const OPCOES_BASE = {
  formats: ["avif", "webp"],
  outputDir: "./_site/img/",
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

async function processarImagens() {
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
  await Promise.all(tarefas.map(async ([chave, arquivo, opcoes]) => fotos.set(chave, await Image(arquivo, opcoes))));
}

// Favicon, ícones de atalho e prévia de link, desenhados a partir do logo.
async function gerarMarca() {
  fs.mkdirSync("_site", { recursive: true });
  fs.writeFileSync("_site/favicon.svg", logotipo.icone(64));
  await Image(Buffer.from(logotipo.icone(512)), {
    formats: ["png"],
    widths: [180, 512],
    outputDir: "./_site/",
    filenameFormat: (id, src, width, format) => `icone-${width}.${format}`,
  });
  await Image(Buffer.from(logotipo.compartilhamento()), {
    formats: ["jpeg"],
    widths: [1200],
    outputDir: "./_site/",
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

function aDefinir(arquivo, proporcao) {
  return `<span class="a-definir"><span class="a-definir__rotulo">imagem a definir · ${arquivo} · ${proporcao}</span></span>`;
}

// <picture> de uma imagem de veículo já processada (imagens-geradas/<pasta>/NN-nome.png).
function fotoVeiculo(chave, alt, sizes = "100vw", prioridade = false) {
  const meta = fotos.get(chave);
  if (!meta) return aDefinir(chave, "3:2");
  return generateHTML(meta, atributos(alt, sizes, prioridade));
}

// Imagem ilustrativa (src/_data/ilustracoes.js) ou, se ainda não existir, o bloco "imagem a definir".
function ilustracao(nome, sizes = "100vw", prioridade = false) {
  const item = ilustracoes[nome];
  if (!item) return "";
  const meta = fotos.get(`ia/${item.arquivo}`);
  if (!meta) return aDefinir(item.arquivo, item.proporcao);
  const html = generateHTML(meta, atributos(item.alt, sizes, prioridade)).replace("<img ", `<img style="object-position:${item.foco}" `);
  return `${html}<span class="etiqueta">Imagem ilustrativa</span>`;
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
  eleventyConfig.on("eleventy.before", async () => {
    await Promise.all([processarImagens(), gerarMarca()]);
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
  eleventyConfig.addNunjucksGlobal("icone", icone);

  eleventyConfig.addFilter("reais", (valor) => (valor || valor === 0 ? formatoReal.format(valor) : ""));
  eleventyConfig.addFilter("numero", (valor) => (valor || valor === 0 ? formatoNumero.format(valor) : ""));
  // Versão pelo conteúdo do arquivo: o navegador não mistura HTML novo com CSS ou JS antigo.
  eleventyConfig.addFilter("versao", (caminho) => `${caminho}?v=${crypto.createHash("md5").update(fs.readFileSync(`src${caminho}`)).digest("hex").slice(0, 8)}`);

  eleventyConfig.addCollection("veiculos", (api) => {
    const todos = api.getFilteredByGlob("src/veiculos/*.md");
    for (const item of todos.filter((v) => !temCapa(v.page.fileSlug))) {
      console.warn(`[aviso] ${item.page.fileSlug}: sem ${RAIZ_VEICULOS}/${item.page.fileSlug}/01-capa.png; fica fora do site.`);
    }
    return todos.filter((v) => temCapa(v.page.fileSlug)).sort(ordemPadrao);
  });

  return {
    dir: { input: "src", output: "_site", includes: "_includes", data: "_data" },
    templateFormats: ["njk", "md"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  };
}
