// RECEITA 19 - Passo 1 e 2 e Exercício 2 (Desafio):
// - Passo 2: Função GET(request) em /app/api/searchMovies/route.js que retorna Response.json({...jsonRes}).
// - Exercício 2 (Desafio): "Faça com que sua API acesse uma base de dados sua em vez de uma outra API."
//   Se for passado o parâmetro usarBasePropria=true (ou se desejar consultar a base local), retorna
//   os filmes da nossa base de dados local; caso contrário, consulta a API do OMDb como no Passo 2.

const minhaBaseDeFilmes = [
    { Title: "O Auto da Compadecida", Year: "2000", imdbID: "tt0271383" },
    { Title: "Cidade de Deus", Year: "2002", imdbID: "tt0317248" },
    { Title: "Central do Brasil", Year: "1998", imdbID: "tt0140888" },
    { Title: "Bagdad Café", Year: "1987", imdbID: "tt0095801" }
]

export async function GET(request){
    const searchParams = request.nextUrl.searchParams
    const titleSearchKey = searchParams.get("titleSearchKey") || ""
    const usarBasePropria = searchParams.get("usarBasePropria")

    // Exercício 2 (Desafio): Acessando uma base de dados própria em vez de outra API
    if (usarBasePropria === "true") {
        const filtrados = minhaBaseDeFilmes.filter((m) =>
            m.Title.toLowerCase().includes(titleSearchKey.toLowerCase())
        )
        return Response.json({ Search: filtrados })
    }

    // Passo 2 original da Receita 19:
    const httpRes = await fetch(`http://www.omdbapi.com/?apikey=f1cbc41e&s=${titleSearchKey}`)
    const jsonRes = await httpRes.json()
    return Response.json({...jsonRes})
}
