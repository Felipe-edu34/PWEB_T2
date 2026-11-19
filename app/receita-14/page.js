// RECEITA 14:
// - Importa MariaPrea e NovoComponente de ./componentes
// - Passa mensagem por parâmetro para MariaPrea
// - Usa componentes escritos dentro de arquivos page.js (MensagemExtra e SaudacaoSecundaria)
import { MariaPrea, NovoComponente } from "./componentes";
import { MensagemExtra } from "../page";
import { SaudacaoSecundaria } from "../receita-13/page";

export default function NovaRotaHome() {
    return (
       <div>
          <h1>Nova Rota, Nova Página</h1>

          <MariaPrea />
          <MariaPrea mensagem="Viva Maria Preá!" />
          <NovoComponente texto="Componente personalizado recebendo texto por parâmetro." />

          <MensagemExtra />
          <SaudacaoSecundaria />
       </div>
    )
}
