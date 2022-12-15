import React,{ useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Pokemons from './Pokemons1'

const Home = () => {

    const navigate = useNavigate()
    const [query, setQuery] = useState("")
    return (
        <>     
        <Header  query={query} setQuery={setQuery} />
        <main>
            <div><button onClick={() => navigate("/pokemons")}> PRIMERA GENERACION </button></div>  
            <div><button onClick={() => navigate("/pokemons2gen")}> SEGUNDA GENERACION </button></div>    
        </main>
        <Footer />      
        </>
    )
}

export default Home

