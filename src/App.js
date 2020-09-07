import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import About from './components/About'; 
import Home from './components/Home'; 
import data from './data.js'

function App() {
  // ---------------------
  // function Busqueda(name)
  // fetch(`https://rickandmortyapi.com/api/character/?name=${name}`)
  // .then(r => r.json())
  // .then((recurso) => {
  // if (recurso.results !== undefined){
  //   const singleCharacter = {
  //     name: 
  //   }
  // }
  // }
  // ---------------------
  return (
    <div className="App" >
      <Route
        path = '/'
        render = { () => <Nav />}
      />
      <Route 
        path= '/Home'
        render = { () => <Home />}
      />
      <Route
        exact path = '/about'
        render = { () => <About />}
      />
    </div>
  );
}

export default App;
