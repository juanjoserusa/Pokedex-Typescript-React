import React from 'react';
import { Route, Routes } from 'react-router';
import { BrowserRouter as Router } from 'react-router-dom';

import './App.css';
import { Items, Pokemon, Pokemons, Pokemons2 } from './pages';

import Pokemons3 from './pages/Pokemons3';
import Pokemons4 from './pages/Pokemons4';
import Pokemons5 from './pages/Pokemons5';


function App() {
  return (
    <Router>
        <div className="app">
          <Routes>
            <Route path="/pokemons/:name" element={<Pokemon />} />
            <Route path="/pokemons2gen" element={<Pokemons2 />} />
            <Route path="/pokemons3gen" element={<Pokemons3 />} />
            <Route path="/pokemons4gen" element={<Pokemons4 />} />
            <Route path="/pokemons5gen" element={<Pokemons5 />} />
            <Route path="/pokemons" element={<Pokemons />} />
            <Route path="/items" element={<Items />} />
            <Route path="/" element={<Pokemons />} />
          </Routes>
        </div>
    </Router>
    
  );
}

export default App;
