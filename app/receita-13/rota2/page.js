// RECEITA 13 - Exercício 1 e 2:
// Segundo diretório (rota2) com arquivo page.js usando as funções não-default do page.js
import { SaudacaoSecundaria, AvisoSantana } from "../page"

export default function Rota2() {
    return (
        <div>
            <h1>Página da Rota 2</h1>
            <SaudacaoSecundaria />
            <AvisoSantana />
        </div>
    )
}
