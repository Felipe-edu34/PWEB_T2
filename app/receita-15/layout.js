// RECEITA 15 - Layout próprio para o subdiretório app/receita-15
export default function Receita15Layout({ children }) {
  console.log("montando layout do subdiretório receita-15")
  return (
    <div>
      <div style={{ padding: "8px 12px", backgroundColor: "#eef2ff", color: "#4f46e5", borderRadius: "6px", marginBottom: "16px", fontWeight: "600" }}>
        Cabeçalho do Layout da Receita 15
      </div>
      {children}
    </div>
  )
}
