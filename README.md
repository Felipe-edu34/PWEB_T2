# Programação Web (T2) — Receitas de 13 a 21 (Next.js)

Repositório com a implementação das **Receitas 13 a 21** da disciplina de Programação Web utilizando **Next.js (App Router)** e **React**.

---

## Estrutura do Projeto

O projeto possui uma página principal (`app/page.js`) que conecta todas as receitas, além de pastas organizadas para cada atividade:

- **Receita 13 (`app/receita-13`)**: Criação da aplicação Next.js, páginas no diretório `app`, sub-rotas (`rota1`, `rota2`) e exportação de componentes secundários.
- **Receita 14 (`app/receita-14`)**: Criação de páginas e componentes (`MariaPrea` e `NovoComponente`) com passagem de propriedades (`props`).
- **Receita 15 (`app/receita-15` e `app/layout.js`)**: Uso de Layouts (`RootLayout` e layout de subdiretório) e navegação com `<Link>` do Next.js.
- **Receita 16 (`app/receita-16`)**: *Data Fetching* no servidor (*Server Components*) consumindo a API do OMDb com `searchParams` e exibição de pôsteres.
- **Receita 17 (`app/receita-17`)**: Formulário de pesquisa utilizando o componente `<Form>` do Next.js mantendo o formulário no layout da rota sem recarregar.
- **Receita 18 (`app/receita-18`)**: *Data Fetching* no navegador (*Client Components* com `"use client"`), gerenciamento de estado com `useState` e otimização de re-renderização (*Desafio das Galáxias*).
- **Receita 19 (`app/receita-19` e `app/api/searchMovies/route.js`)**: Implementação de rota de API própria (`GET`) no Next.js com suporte à API OMDb e base de dados local.
- **Receita 20 (`app/receita-20` e `app/actions/movieActions.js`)**: Uso de *Server Actions* (`'use server'`) chamadas diretamente a partir de um *Client Component*.
- **Receita 21 (`app/receita-21` e `app/movie/[id]`)**: Rotas dinâmicas (`[id]`), *UI Streaming* (`loading.js`), Geração Estática (*SSG* com `generateStaticParams`) e componente `<Image>` do Next.js.

---

## Pré-requisitos

Certifique-se de ter instalado em sua máquina:
- [Node.js](https://nodejs.org/) (versão 18 ou superior recomendada)
- [Git](https://git-scm.com/)

---

## Como baixar e rodar o projeto

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/Felipe-edu34/PWEB_T2.git
   ```

2. **Entre na pasta do projeto:**
   ```bash
   cd PWEB_T2
   ```

3. **Instale as dependências:**
   ```bash
   npm install
   ```

4. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```

5. **Acesse no navegador:**
   Abra [http://localhost:3000](http://localhost:3000) para visualizar o menu principal e navegar entre as Receitas 13 a 21.

---

## Testando o Build de Produção (Geração Estática / SSG da Receita 21)

Caso queira testar as páginas pré-renderizadas estaticamente (`generateStaticParams` da Receita 21) em modo de produção:

```bash
npm run build
npm run start
```
