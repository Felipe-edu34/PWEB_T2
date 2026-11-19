// RECEITA 14 - Exercício 1:
// Subdiretório dentro da rota usando os componentes criados
import { MariaPrea, NovoComponente } from "../componentes";

export default function SubRotaPage() {
   return (
      <div>
         <h1>Subdiretório da Nova Rota (Exercício 1)</h1>
         <MariaPrea mensagem="Maria Preá chamada de dentro do subdiretório!" />
         <NovoComponente texto="Componente usado no subdiretório" />
      </div>
   )
}
