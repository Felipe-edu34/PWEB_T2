import Form from "next/form"

// RECEITA 17 - Passo 2 e Exercício 1:
// - Passo 2: Componente MovieForm usando <Form> de "next/form".
// - Exercício 1: "Faça um formulário com mais um campo de pesquisa." (Acrescentamos o campo de Ano: yearSearchKey).
export function MovieSearchForm({ actionRoute = "/receita-17" }) {
    return (
        <Form action={actionRoute}>
            <label htmlFor="idTitleSearchKey">Título</label>
            <input id="idTitleSearchKey" name="titleSearchKey"/>

            {/* Exercício 1 da Receita 17: Mais um campo de pesquisa (Ano) */}
            <label htmlFor="idYearSearchKey">Ano</label>
            <input id="idYearSearchKey" name="yearSearchKey"/>

            <button type="submit">Pesquisar</button>
        </Form>
    )
}
