import Link from 'next/link'

// RECEITA 13:
// Funções exportadas sem default no page.js (SaudacaoSecundaria e AvisoSantana)
// e função Home exportada por default.

export function SaudacaoSecundaria() {
    return (
        <div>
            <h2>Festa de Santana de Caicó</h2>
        </div>
    )
}

export function AvisoSantana() {
    return (
        <p>A maior festa do Seridó potiguar!</p>
    )
}

export default function Home() {
    return (
        <div>
            <div>
                <h1>
                    Viva Santana!
                </h1>

                <SaudacaoSecundaria />
                <AvisoSantana />

                <p>
                    <Link href="/receita-13/rota1">Acessar Rota 1</Link>
                </p>
            </div>
        </div>
    )
}
