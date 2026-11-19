import Receita16Movies from '../receita-16/page';

/**
 * Rota /movies original citada nas Receitas 16 e 17.
 * Reutiliza diretamente o componente da Receita 16 sem duplicar código!
 */
export default async function MoviesOriginalRoute(props) {
  return <Receita16Movies {...props} />;
}
