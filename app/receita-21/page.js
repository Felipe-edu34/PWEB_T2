import Link from 'next/link'
import MovieDetail from './[id]/page'

// RECEITA 21:
// Exibe diretamente um filme da rota dinâmica e permite alternar entre os filmes pré-renderizados (SSG).
export default async function Receita21Page() {
    return (
        <div>
            <div style={{ marginBottom: "20px", display: "flex", flexWrap: "wrap", gap: "10px", alignItems: "center" }}>
                <strong>Filmes (SSG / Rota Dinâmica):</strong>
                <Link href="/receita-21/tt0095801">Bagdad Café</Link> |
                <Link href="/receita-21/tt0100405">Pretty Woman</Link> |
                <Link href="/receita-21/tt4925292">Lady Bird</Link> |
                <Link href="/receita-21/tt0048280">Lady and the Tramp</Link>
            </div>
            <MovieDetail params={Promise.resolve({ id: 'tt0095801' })} />
        </div>
    )
}
