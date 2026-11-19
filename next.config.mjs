/**
 * Configuração do Next.js para permitir o carregamento de imagens externas
 * vindas da API do OMDb (m.media-amazon.com) no componente <Image /> (Receita 21 - Exercício 2)
 */
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'm.media-amazon.com',
      },
    ],
  },
};

export default nextConfig;
