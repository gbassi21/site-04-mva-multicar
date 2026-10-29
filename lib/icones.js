import fs from "node:fs";

// Ícones (specs/design.md §7): biblioteca de traço em lib/icones/linha/, glifos de WhatsApp e Instagram
// em lib/icones/glifos/ e silhuetas de carroceria desenhadas no mesmo traço. Licenças em licencas/.
const PASTA = new URL("./icones/", import.meta.url);

function interno(arquivo) {
  const svg = fs.readFileSync(new URL(arquivo, PASTA), "utf8");
  return svg.replace(/<!--.*?-->/gs, "").replace(/^[\s\S]*?<svg[^>]*>/, "").replace(/<\/svg>\s*$/, "").replace(/<title>.*?<\/title>/, "").trim();
}

const cache = new Map();
function carregar(chave, arquivo) {
  if (!cache.has(chave)) cache.set(chave, fs.existsSync(new URL(arquivo, PASTA)) ? interno(arquivo) : "");
  return cache.get(chave);
}

const MARCAS = new Set(["whatsapp", "instagram"]);

// Silhuetas laterais em grade 64 × 32, roda r 4 sobre a linha y 24.
const CARROCERIAS = {
  hatch: '<path d="M13 24H8v-8l6-7h20l8 6 11 1.5 3 2.5v5h-7M41 24H21"/><circle cx="17" cy="24" r="4"/><circle cx="45" cy="24" r="4"/>',
  seda: '<path d="M12 24H6v-6l4-2 8-1 6-6h14l8 6 10 1.5 3 2.5v5h-7M44 24H20"/><circle cx="16" cy="24" r="4"/><circle cx="48" cy="24" r="4"/>',
  suv: '<path d="M12.5 24H6V13l3-5h31l7 6 10 1 2 3v6h-6.5M43.5 24h-22"/><circle cx="17" cy="24" r="4.5"/><circle cx="48" cy="24" r="4.5"/>',
  picape: '<path d="M12 24H5v-9h24l1-7h10l6 6 11 1 2 3v6h-7M44 24H20"/><circle cx="16" cy="24" r="4"/><circle cx="48" cy="24" r="4"/>',
};

export function icone(nome, classe = "icone") {
  if (MARCAS.has(nome)) {
    return `<svg class="${classe} ${classe}--marca" viewBox="0 0 24 24" width="24" height="24" fill="currentColor" aria-hidden="true" focusable="false">${carregar(nome, `glifos/${nome}.svg`)}</svg>`;
  }
  return `<svg class="${classe}" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">${carregar(nome, `linha/${nome}.svg`)}</svg>`;
}

export function carroceria(tipo, classe = "silhueta") {
  return `<svg class="${classe}" viewBox="0 0 64 32" width="64" height="32" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">${CARROCERIAS[tipo] || ""}</svg>`;
}

// Traços de velocidade do logo como elemento gráfico (três barras inclinadas de comprimento decrescente).
export function tracos(classe = "") {
  return `<svg class="tracos ${classe}" viewBox="0 0 120 64" preserveAspectRatio="xMaxYMid meet" aria-hidden="true" focusable="false"><g transform="skewX(-12) translate(14 0)" fill="currentColor"><rect x="0" y="4" width="106" height="12"/><rect x="26" y="26" width="80" height="12"/><rect x="52" y="48" width="54" height="12"/></g></svg>`;
}
