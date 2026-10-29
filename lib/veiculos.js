import fs from "node:fs";

export const RAIZ_VEICULOS = "imagens-geradas";

// Só entram no site os arquivos "NN-nome.png" (dois dígitos), na ordem dos números.
export const PADRAO_IMAGEM = /^(\d{2})-([a-z0-9-]+)\.png$/;

const ROTULOS = {
  capa: "Capa",
  frente: "Frente",
  lateral: "Lateral",
  "traseira-34": "Traseira 3/4",
  traseira: "Traseira",
  "porta-malas": "Porta-malas",
  farol: "Farol",
  lanterna: "Lanterna",
  roda: "Roda",
  retrovisor: "Retrovisor",
  painel: "Painel",
  volante: "Volante",
  destaque: "Detalhe em destaque",
};

export const CARROCERIAS = { hatch: "Hatch", seda: "Sedã", suv: "SUV", picape: "Picape" };

export const formatoReal = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL", maximumFractionDigits: 0 });
export const formatoNumero = new Intl.NumberFormat("pt-BR");

export function temCapa(pasta) {
  return fs.existsSync(`${RAIZ_VEICULOS}/${pasta}/01-capa.png`);
}

export function arquivosDoVeiculo(pasta) {
  const dir = `${RAIZ_VEICULOS}/${pasta}`;
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir).filter((nome) => PADRAO_IMAGEM.test(nome)).sort();
}

export function rotuloDaImagem(arquivo, carroceria) {
  const nome = arquivo.match(PADRAO_IMAGEM)[2];
  if (nome === "porta-malas" && carroceria === "picape") return "Caçamba";
  return ROTULOS[nome] || nome.replace(/-/g, " ").replace(/^./, (l) => l.toUpperCase());
}

export function anoTexto(dados) {
  const { ano, ano_fabricacao: fabricacao } = dados;
  return fabricacao && fabricacao !== ano ? `${fabricacao}/${ano}` : String(ano);
}

// Ordem padrão da vitrine (specs/site.md §5.2): "ordem" da loja; depois ano mais novo; no empate, maior preço.
export function ordemPadrao(a, b) {
  const oa = a.data.ordem ?? Infinity;
  const ob = b.data.ordem ?? Infinity;
  if (oa !== ob) return oa - ob;
  if (a.data.ano !== b.data.ano) return b.data.ano - a.data.ano;
  return (b.data.preco ?? 0) - (a.data.preco ?? 0);
}
