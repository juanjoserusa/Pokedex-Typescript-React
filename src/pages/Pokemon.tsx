
import { useParams, useNavigate } from "react-router-dom"
import React, { useState, useEffect } from 'react'
import styles from './pokemon.module.css'
import Pokeback from '../assets/pokemonback.png'
import BulbasaurImg from '../assets/bulbasaur.gif'
import Footer from "../components/Footer"
import { PokemonDetails } from "../types/types"
import { fetchPokemon } from "../api/fetchPokemon"
import LoadingScreen from "../components/LoadingScreen"
import { waitFor } from "../utils/utils"

const Pokemon = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [pokemon, setPokemon] = useState<PokemonDetails>()
    const { name } = useParams();
    const navigate = useNavigate()

    useEffect(() => {
        async function getPokemon() {
            setIsLoading(true)
            await waitFor(500);
            const fetchedPokemon = await fetchPokemon(name as string);
            setPokemon(fetchedPokemon)
            setIsLoading(false)
        }
        getPokemon()
    }, [name])

    if (isLoading || !pokemon) return <LoadingScreen />
    
    return (
        <>
            <button className={styles.pokeballButton} onClick={() => navigate(-1)} >
                <img className={styles.pokeballImage} src={Pokeback} alt="goback"/> Go Back
            </button> 
<div className={styles.pokemon}>
    <main className={styles.pokemonInfo}>
            <div className={styles.pokemonTitle}>{pokemon?.name.toUpperCase()}</div>
            <div>Nr. {pokemon?.id}</div>
            <div>
                <img className={styles.pokemonInfoImage} src={pokemon?.imgSrc} alt={pokemon?.name} />
            </div>
            <div>HP: {pokemon?.hp} </div>
            <div>Attack: {pokemon?.attack}</div>
            <div>Defense: {pokemon?.defense}</div>
            
    </main>
</div>
            <Footer /> 


        </>
    )
}

export default Pokemon