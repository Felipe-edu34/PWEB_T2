"use client"

import Form from "next/form"
import Link from "next/link"
import { useState } from "react"

// RECEITA 19:
// Client component que interage com a nossa própria API (/api/searchMovies)
// com opção de consultar a API OMDb ou nossa base de dados própria.
export default function Home(){
    const [resultMovies, setResultMovies] = useState([])

    async function handleAction(formData){
        const titleSearchKey = formData.get("titleSearchKey")
        const usarBasePropria = formData.get("usarBasePropria") || ""
        const httpRes = await fetch(`/api/searchMovies?titleSearchKey=${titleSearchKey}&usarBasePropria=${usarBasePropria}`)
        const jsonRes = await httpRes.json()
        setResultMovies(jsonRes.Search || [])
    }

    return (
        <div>
            <h1>Pesquisa Consumindo Nossa API</h1>
            <MovieForm handleAction={handleAction}/>
            <MovieTable movies={ resultMovies }/>
        </div>
    )
}

export function MovieForm({handleAction}){
    return (
        <Form action={handleAction}>
            <label htmlFor="idTitleSearchKey">Título</label>
            <input id="idTitleSearchKey" name="titleSearchKey" placeholder="Digite um título..."/>
            <label htmlFor="idBasePropria">Fonte:</label>
            <select id="idBasePropria" name="usarBasePropria">
                <option value="false">API OMDb</option>
                <option value="true">Base de Dados Local</option>
            </select>
            <button type="submit">Pesquisar</button>
        </Form>
    )
}

export function MovieTable({movies}){
    return (
        <div className="lista-filmes">
            {movies.map( (m) => (
                <div key={m.imdbID} className="item-filme">
                    <Link href={`/movie/${m.imdbID}`}>
                        {m.Title} --- {m.Year}
                    </Link>
                </div>
            ))}
        </div>
    )
}
