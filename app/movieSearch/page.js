import Form from "next/form"

// RECEITA 17 - Passo 2 e Exercício 1 na rota original /movieSearch
export default async function MovieForm(){
    return (
        <Form action="/movies">
            <label htmlFor="idTitleSearchKey">Título</label>
            <input id="idTitleSearchKey" name="titleSearchKey"/>
            {/* Exercício 1: Mais um campo de pesquisa */}
            <label htmlFor="idYearSearchKey">Ano</label>
            <input id="idYearSearchKey" name="yearSearchKey"/>
            <button type="submit">Pesquisar</button>
        </Form>
    )
}
