// Exercício 2 da Receita 17: Importando o componente da Receita 16 sem copiar/colar código!
import Receita16Movies from '../receita-16/page';

/**
 * RECEITA 17 - Página de Resultados
 *
 * Reutiliza diretamente o Server Component da Receita 16 via importação.
 * O formulário fica visível acima desta página graças ao `app/receita-17/layout.js`.
 */
export default async function Receita17Page(props) {
  return <Receita16Movies {...props} />;
}
