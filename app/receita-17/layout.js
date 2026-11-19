import { MovieSearchForm } from "./MovieSearchForm"

// RECEITA 17 - Exercício 2 (mini-desafio):
// "Use seus conhecimentos das receitas anteriores e faça com que o formulário apareça na mesma página
// em que são exibidos os resultados. Ademais, a parte da página que exibe o formulário não deve ser
// recarregada após submetermos o formulário - apenas a parte que exibe o conteúdo da pesquisa deve
// ser recarregada... Não copie/cole nenhum componente das receitas anteriores. Importe, se for preciso."
//
// Solução: O formulário fica no layout.js da rota, e o page.js apenas importa o componente da Receita 16!
export default function Receita17Layout({ children }) {
    return (
        <div>
            <MovieSearchForm actionRoute="/receita-17" />
            {children}
        </div>
    )
}
