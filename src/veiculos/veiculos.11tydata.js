import { CARROCERIAS, anoTexto, arquivosDoVeiculo, formatoNumero, formatoReal, rotuloDaImagem, temCapa } from "../../lib/veiculos.js";

const nome = (d) => `${d.marca} ${d.modelo}`;
const anuncio = (d) => `${nome(d)} ${d.versao} ${anoTexto(d)}`;

export default {
  layout: "layouts/veiculo.njk",
  classeCorpo: "tem-barra",
  eleventyComputed: {
    // Sem 01-capa.png o veículo não ganha página (specs/site.md §5.1).
    permalink: (d) => (temCapa(d.page.fileSlug) ? `/estoque/${d.page.fileSlug}/` : false),
    nome: (d) => nome(d),
    anoTexto: (d) => anoTexto(d),
    carroceriaNome: (d) => CARROCERIAS[d.carroceria] || "",
    titulo: (d) => `${anuncio(d)} à venda`,
    descricao: (d) =>
      `${anuncio(d)}, ${formatoNumero.format(d.km)} km, ${formatoReal.format(d.preco)}. Seminovos e usados em Jacaraípe, Serra (ES).`,
    imagens: (d) =>
      arquivosDoVeiculo(d.page.fileSlug).map((arquivo) => {
        const rotulo = rotuloDaImagem(arquivo, d.carroceria);
        return {
          chave: `${d.page.fileSlug}/${arquivo}`,
          rotulo,
          alt: `${nome(d)} ${anoTexto(d)}: ${rotulo.toLowerCase()} (imagem ilustrativa)`,
        };
      }),
    mensagens: (d) => ({
      interesse: `Olá! Tenho interesse no ${anuncio(d)}, anunciado por ${formatoReal.format(d.preco)} no site da MVA Multicar. Ainda está disponível?`,
      financiar: `Olá! Quero simular o financiamento do ${anuncio(d)} (${formatoReal.format(d.preco)}).`,
      troca: `Olá! Quero dar meu carro na troca pelo ${anuncio(d)}. Meu carro é: `,
    }),
    // Campo vazio aparece "a confirmar"; campo deduzido (lista "assumidos") ganha asterisco.
    ficha: (d) => {
      const assumidos = new Set(d.assumidos || []);
      const itens = [
        ["Ano", anoTexto(d)],
        ["Quilometragem", `${formatoNumero.format(d.km)} km`],
        ["Câmbio", d.cambio, "cambio"],
        ["Combustível", d.combustivel, "combustivel"],
        ["Motor", d.motor, "motor"],
        ["Carroceria", CARROCERIAS[d.carroceria], "carroceria"],
      ];
      if (d.tracao) itens.push(["Tração", d.tracao, "tracao"]);
      if (d.carroceria === "picape") itens.push(["Cabine", d.cabine, "cabine"]);
      itens.push(["Cor", d.cor, "cor"]);
      return itens.map(([rotulo, valor, campo]) => ({
        rotulo,
        valor: valor ? String(valor) : "",
        assumido: Boolean(valor && campo && assumidos.has(campo)),
      }));
    },
  },
};
