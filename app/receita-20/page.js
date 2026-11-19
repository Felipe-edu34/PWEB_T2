"use client"

import {searchMovies} from "../actions/movieActions"
import Form from "next/form"
import Link from "next/link"
import {useState} from "react"

// RECEITA 20:
// Client component chamando diretamente a Server Action searchMovies(formData)
// com campos de Título e Ano.
export default function Home(){
    const [data, setData] = useState({})

    async function handleAction(formData){
        const res = await searchMovies(formData)
        setData(res)
    }

    return (
        <div>
            <h1>Pesquisa com Server Actions</h1>
            <MovieForm actionHandler={handleAction}/>
            {data.Search && <MovieTable movies={data.Search}/>}
        </div>
    )
}

export function MovieForm({actionHandler}){
    return (
        <Form action={actionHandler}>
            <label htmlFor="idTitleSearchKey">Título</label>
            <input id="idTitleSearchKey" name="titleSearchKey" placeholder="Ex: lady, matrix..."/>
            <label htmlFor="idYearSearchKey">Ano</label>
            <input id="idYearSearchKey" name="yearSearchKey" placeholder="Ex: 2017"/>
            <button type="submit">Pesquisar</button>
        </Form>
    )
}

export function MovieTable({movies}){
    return (
        <div className="lista-filmes">
            {movies.map( (m) => (
                <div key={m.imdbID} className="item-filme">
                    {m.Poster && m.Poster !== 'N/A' && <img src={m.Poster} alt={m.Title} width={140} height={200} />}
                    <Link href={`/movie/${m.imdbID}`}>
                        {m.Title} --- {m.Year}
                    </Link>
                </div>
            ))}
        </div>
    )
}
