// RECEITA 13 - Subdiretório rota1 importando as funções não-default do page.js
import { SaudacaoSecundaria, AvisoSantana } from "../page"
import { MensagemExtra } from "../../page"

export default function Rota1() {
    return (
        <div>
            <h1>Página da Rota 1</h1>
            <SaudacaoSecundaria />
            <AvisoSantana />
            <MensagemExtra />
        </div>
    )
}
