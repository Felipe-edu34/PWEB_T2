import Home, { generateStaticParams } from '../../movie/[id]/page';

/**
 * Permite acessar a rota dinâmica também pelo caminho /receita-21/[id] além de /movie/[id].
 */
export { generateStaticParams };
export default Home;
