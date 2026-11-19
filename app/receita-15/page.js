// RECEITA 15 - Comparação entre o componente <Link> do Next.js e a marca <a> tradicional
import Link from 'next/link'

export default function Home() {
    return (
        <div>
            <div>
                <h1>
                    Viva Santana!
                </h1>
                <p>
                    <Link href="/novarota">Rota1 (com Link do Next.js)</Link>
                </p>
                <p>
                    <a href="/novarota">Rota 1, jeito antigo (com tag a)</a>
                </p>
            </div>
        </div>
    )
}
