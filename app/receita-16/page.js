import Link from 'next/link'

// RECEITA 16:
// - Busca filmes na API do OMDb no servidor usando searchParams (titleSearchKey, yearSearchKey e typeSearchKey)
// - Exibe título, ano e a imagem com o poster do filme
// - Cada resultado é um Link para a rota dinâmica /movie/[id]
export default async function Home({searchParams}){
    const {titleSearchKey = 'bagdad', yearSearchKey = '', typeSearchKey = ''} = await searchParams
    const res = await fetch(`http://www.omdbapi.com/?apikey=f1cbc41e&s=${titleSearchKey}&y=${yearSearchKey}&type=${typeSearchKey}`)
    const data = await res.json()
    const movies = data.Search || []

    return (
        <div>
            <h1>Filmes Encontrados</h1>
            <div className="lista-filmes">
            {movies.map( (m) => (
                <div key={m.imdbID} className="item-filme">
                    {m.Poster && m.Poster !== 'N/A' && <img src={m.Poster} alt={m.Title} width={140} height={200} />}
                    <Link href={`/movie/${m.imdbID}`}>
                        {m.Title} --- {m.Year}
                    </Link>
                </div>
            ))}
            </div>
        </div>
    )
}
