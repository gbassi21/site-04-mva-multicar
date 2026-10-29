// Ícones de interface (specs/design.md §7): traço 1,75 em grade de 24 px, currentColor.
const tracos = {
  busca: '<circle cx="11" cy="11" r="6.5"/><path d="m20 20-4.4-4.4"/>',
  "seta-direita": '<path d="M5 12h14M13 6l6 6-6 6"/>',
  "chevron-esquerda": '<path d="m15 5-7 7 7 7"/>',
  "chevron-direita": '<path d="m9 5 7 7-7 7"/>',
  menu: '<path d="M4 7h16M4 12h16M4 17h16"/>',
  fechar: '<path d="M6 6l12 12M18 6 6 18"/>',
  whatsapp: '<path d="M20.5 11.6a8.4 8.4 0 0 1-12.3 7.5L3.5 20.5l1.4-4.6a8.4 8.4 0 1 1 15.6-4.3Z"/><path d="M8.6 11.8h.01M12 11.8h.01M15.4 11.8h.01" stroke-width="2.6"/>',
  ferramenta: '<path d="M14.6 6.1a4.2 4.2 0 0 0-5.3 5.4l-5.1 5.1a1.8 1.8 0 0 0 2.6 2.6l5.1-5.1a4.2 4.2 0 0 0 5.4-5.3l-2.6 2.6-2.4-.6-.6-2.4 2.9-2.3Z"/>',
  estrela: '<path d="m12 3.6 2.6 5.3 5.8.8-4.2 4.1 1 5.8-5.2-2.7-5.2 2.7 1-5.8-4.2-4.1 5.8-.8L12 3.6Z"/>',
  pino: '<path d="M12 21s-6.5-5.6-6.5-11a6.5 6.5 0 0 1 13 0c0 5.4-6.5 11-6.5 11Z"/><circle cx="12" cy="10" r="2.3"/>',
  relogio: '<circle cx="12" cy="12" r="8.5"/><path d="M12 7.5V12l3 2"/>',
};

export default function (nome, classe = "icone") {
  return `<svg class="${classe}" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">${tracos[nome] || ""}</svg>`;
}
