// RECEITA 14 - Componentes em componentes.js
// MariaPrea recebe a mensagem como parâmetro (com valor padrão "Morreu Maria Preá...")
export function MariaPrea({ mensagem = "Morreu Maria Preá..." }) {
   return (
      <h2>{mensagem}</h2>
   )
}

// Novo componente recebendo parâmetro
export function NovoComponente({ texto }) {
   return (
      <p>{texto}</p>
   )
}
