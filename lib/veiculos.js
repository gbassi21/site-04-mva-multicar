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

export function slug(texto = "") {
  return String(texto ?? "")
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

// Degraus do filtro "preço até": do primeiro que cobre o carro mais barato ao primeiro que cobre o mais caro.
const DEGRAUS_PRECO = [50000, 75000, 100000, 150000, 200000, 250000, 300000];

// Opções dos filtros da vitrine, só com o que existe nos dados (specs/site.md §3.2).
export function opcoesFiltros(lista) {
  const contar = (campo, nomear = (v) => v) => {
    const mapa = new Map();
    for (const v of lista) {
      const valor = v.data[campo];
      if (!valor) continue;
      const chave = slug(valor);
      const atual = mapa.get(chave) || { valor: chave, nome: nomear(valor), qtd: 0 };
      atual.qtd++;
      mapa.set(chave, atual);
    }
    return [...mapa.values()];
  };
  const ordemCarroceria = Object.keys(CARROCERIAS);
  const precos = lista.map((v) => v.data.preco).filter(Boolean);
  const menor = Math.min(...precos);
  const maior = Math.max(...precos);
  const degraus = [];
  for (const degrau of DEGRAUS_PRECO) {
    if (degrau < menor) continue;
    degraus.push(degrau);
    if (degrau >= maior) break;
  }
  return {
    carrocerias: contar("carroceria", (v) => CARROCERIAS[v] || v).sort((a, b) => ordemCarroceria.indexOf(a.valor) - ordemCarroceria.indexOf(b.valor)),
    marcas: contar("marca").sort((a, b) => a.nome.localeCompare(b.nome, "pt-BR")),
    cambios: contar("cambio").sort((a, b) => a.nome.localeCompare(b.nome, "pt-BR")),
    anos: [...new Set(lista.map((v) => v.data.ano))].sort((a, b) => b - a),
    precos: degraus,
  };
}
