import React from 'react';
import Image from 'next/image';

// RECEITA 21 - Passo 4: Função generateStaticParams exatamente como na receita
export async function generateStaticParams() {
    const allMovies = await fetch('https://www.omdbapi.com/?apikey=f1cbc41e&s=lady').then((res) => res.json())
    return allMovies.Search.map((movie) => ({
      id: movie.imdbID,
    }))
}

// RECEITA 21 - Passo 2 e Exercício 2:
// - Passo 2: Rota dinâmica /app/movie/[id]/page.js recebendo { params } e buscando o filme por id.
// - Exercício 2: "Mostre a imagem do poster do filme na página que criamos usando a marca Image do NextJS."
export default async function Home({ params }) {
    const {id} = await params
    const movie = await fetch(`https://www.omdbapi.com/?apikey=f1cbc41e&i=${id}`).then(res => res.json())
    return (
        <div>
            <h1>{movie.Title} ({movie.Year})</h1>
            <p>Director: {movie.Director}</p>
            <p>Plot: {movie.Plot}</p>
            {/* Exercício 2 da Receita 21: Mostrar a imagem do poster usando a marca Image do NextJS */}
            {movie.Poster && movie.Poster !== 'N/A' && (
                <Image src={movie.Poster} alt={movie.Title} width={300} height={450} />
            )}
        </div>
    );
};
