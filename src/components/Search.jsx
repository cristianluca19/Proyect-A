import React, { useState } from 'react';
import MapCard from './MapCard'
import './Components.css'

export default function Search(){
   const [busqueda, setbusqueda] = useState('');
    const FunctionBusqueda = e => {
        setbusqueda(e.target.value);
    }
    return(
        <div>
            <input onChange={FunctionBusqueda} id="searchBar" type="text" className="search" placeholder='Search ...' />
            <MapCard busqueda = {busqueda}/>
        </div>
    )
}
