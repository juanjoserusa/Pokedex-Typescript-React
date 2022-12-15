import React from 'react'
import pokedex from "../assets/pokeballloading.gif"
import styles from './loadingScreen.module.css'

const LoadingScreen = () => {
    return (
        <div className={styles.loadingScreen} >
            <img className={styles.loadingScreenIcon} src={pokedex} alt="pokedex" />
        </div>
    )
}

export default LoadingScreen