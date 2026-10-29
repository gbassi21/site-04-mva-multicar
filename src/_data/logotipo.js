// Logotipo MVA redesenhado (specs/design.md §2): letras retas inclinadas 12° e três traços de velocidade.
const M = "M0 100V0H26L60 50L94 0H120V100H98V38L68 82H52L22 38V100Z";
const VA = "M128 0H152L183 74L214 0H238L196 100H170Z M208 100L250 0H276L318 100H294L285 78H241L232 100Z M248 58H278L263 22Z";
const TRACOS = "M-46 14H-8V28H-46Z M-36 43H-8V57H-36Z M-26 72H-8V86H-26Z";
const INCLINACAO = "translate(52 0) skewX(-12)";

const CORES = {
  claro: { m: "#B2251D", va: "#1D1E22", tracos: "#B2251D" },
  escuro: { m: "#E0484B", va: "#D7D6D9", tracos: "#E0484B" },
};

function desenho(variante) {
  const cor = CORES[variante] || CORES.claro;
  return `<g transform="${INCLINACAO}"><path fill="${cor.tracos}" d="${TRACOS}"/><path fill="${cor.m}" d="${M}"/><path fill="${cor.va}" fill-rule="evenodd" d="${VA}"/></g>`;
}

// "MVA" com os traços; o nome da divisão (MULTICAR, CENTRO AUTOMOTIVO) vai em texto ao lado.
function logo(variante = "claro", altura = 28) {
  return `<svg class="logo__marca" viewBox="0 0 350 100" width="${Math.round(altura * 3.5)}" height="${altura}" aria-hidden="true" focusable="false">${desenho(variante)}</svg>`;
}

// Ícone do site: o M com os traços sobre quadrado grafite.
function icone(lado = 64) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${lado}" height="${lado}" viewBox="0 0 64 64"><rect width="64" height="64" rx="14" fill="#1D1E22"/><g transform="translate(8 18) scale(.28)"><g transform="${INCLINACAO}"><path fill="#E0484B" d="${TRACOS}"/><path fill="#FFFFFF" d="${M}"/></g></g></svg>`;
}

// Prévia de link (1200 × 630), sem imagem de veículo.
function compartilhamento() {
  const texto = 'font-family="Helvetica, Arial, sans-serif"';
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630"><rect width="1200" height="630" fill="#1D1E22"/><g transform="translate(96 190) scale(1.6)">${desenho("escuro")}</g><text x="100" y="408" fill="#D7D6D9" ${texto} font-size="30" font-weight="700" letter-spacing="10">MULTICAR</text><text x="100" y="470" fill="#BFBEC0" ${texto} font-size="28">Seminovos e usados · Jacaraípe, Serra (ES)</text><text x="100" y="560" fill="#8E9097" ${texto} font-size="22">Projeto de demonstração</text><rect y="622" width="1200" height="8" fill="#B2251D"/></svg>`;
}

export default { logo, icone, compartilhamento };
