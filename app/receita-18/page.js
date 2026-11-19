"use client"

import Link from "next/link"
import { useState, useRef, memo } from "react"

// RECEITA 18:
// - Client Component com "use client"
// - Mantém o texto digitado no formulário após pesquisar
// - Desabilita o botão Pesquisar durante a requisição
// - Permite submeter teclando <Enter>
// - Redesenha apenas o componente MovieTable a cada nova pesquisa
export default function Home(){
    console.log("Renderizando Home")
    const atualizarTabelaRef = useRef(null)

    async function handleAction(formData, setCarregando){
        setCarregando(true)
        const titleSearchKey = formData.get("titleSearchKey")
        const httpRes = await fetch(`http://www.omdbapi.com/?apikey=f1cbc41e&s=${titleSearchKey}`)
        const jsonRes = await httpRes.json()
        if (atualizarTabelaRef.current) {
            atualizarTabelaRef.current(jsonRes.Search || [])
        }
        setCarregando(false)
    }

    return (
        <div>
            <h1>Pesquisa de Filmes (Client Component)</h1>
            <MovieForm handleAction={handleAction}/>
            <MovieTable movies={ [] } registrarAtualizador={(fn) => { atualizarTabelaRef.current = fn }}/>
        </div>
    )
}

export const MovieForm = memo(function MovieForm({handleAction}){
    console.log("Renderizando MovieForm")
    const botaoRef = useRef(null)

    function setCarregando(carregando) {
        if (botaoRef.current) {
            botaoRef.current.disabled = carregando
        }
    }

    async function handleSubmit(e) {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        await handleAction(formData, setCarregando)
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="idTitleSearchKey">Título</label>
            <input id="idTitleSearchKey" name="titleSearchKey" placeholder="Digite um título..."/>
            <button ref={botaoRef} type="submit">Pesquisar</button>
        </form>
    )
})

export function MovieTable({movies, registrarAtualizador}){
    console.log("Renderizando MovieTable")
    const [resultMovies, setResultMovies] = useState(movies)

    if (registrarAtualizador) {
        registrarAtualizador(setResultMovies)
    }

    return (
        <div className="lista-filmes">
            {resultMovies.map( (m) => (
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
