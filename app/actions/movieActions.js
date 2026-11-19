'use server'

// RECEITA 20 - Passo 2 e Exercício 1:
// - Passo 2: Server action searchMovies(formData) com 'use server'.
// - Exercício 1: "Que tal acrescentar um campo a mais nesse formulário e adaptar sua server action para refinar a pesquisa?"
//   Extraímos também yearSearchKey do formData para refinar a busca por ano!
export async function searchMovies(formData){
    const titleSearchKey = formData.get("titleSearchKey")
    const yearSearchKey = formData.get("yearSearchKey") || ""

    if (!titleSearchKey || titleSearchKey=='') return {Search: []}

    try{
        const httpRes = await fetch(`http://www.omdbapi.com/?apikey=f1cbc41e&s=${titleSearchKey}&y=${yearSearchKey}`)
        const jsonRes = await httpRes.json()
        return jsonRes
    }catch(err){
        return {error: `Erro na requisição ${err}`}
    }

}
