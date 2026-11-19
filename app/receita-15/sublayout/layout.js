// RECEITA 15 - Exercício 3:
// "Faça layouts para os subdiretórios de app."
export default function SubLayout({ children }) {
  console.log("montando layout do subdiretório")
  return (
    <div>
      <div>Menu do Subdiretório (layout.js do subdiretório)</div>
      {children}
    </div>
  )
}
