import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styles from './footer.module.css'
import PokemonPic from '../assets/pikachu.png';
import LocationPic from '../assets/pointer.png';
import ItemsPic from '../assets/pokeball.png';



const Footer = () => {

    const navigate = useNavigate()

    return (
        <footer className={styles.footer} >
            <Link className={styles.footerLink} to="/pokemons">
                <img className={styles.footerIcon} src={ItemsPic} alt="Pokeball" />
                First Generation
            </Link>
            <Link 
                onClick={() => navigate("/pokemons2gen")} 
                className={styles.footerLink} 
                to="/pokemons2gen"
            >
                <img className={styles.footerIcon} src={ItemsPic} alt="Pokeball" />
                Second Generation
            </Link>
            <Link 
                onClick={() => navigate("/pokemons3gen")}  
                className={styles.footerLink} 
                to="/pokemons3gen"
            >
                <img className={styles.footerIcon} src={ItemsPic} alt="Pokeball" />
                Third Generation
            </Link>
            <Link 
                onClick={() => navigate("/pokemons4gen")} 
                className={styles.footerLink} 
                to="/pokemons4gen"
            >
                <img className={styles.footerIcon} src={ItemsPic} alt="Pokeball" />
                Fourth Generation
            </Link>
            <Link 
                onClick={() => navigate("/pokemons5gen")} 
                className={styles.footerLink} 
                to="/pokemons5gen"
            >
                <img className={styles.footerIcon} src={ItemsPic} alt="Pokeball" />
                Fifth Generation
            </Link>
        </footer>
    )
}

export default Footer