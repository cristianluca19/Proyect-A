import React, { useState } from 'react';
import data from '../data';
import Card from './Card';
import './Components.css';

export default function MapCard( {busqueda}){
    let Map = (array) => {
        return (
        array.map(c =>
        <Card
            id={c.id}
            key={c.id}
            name={c.name}
            status={c.status}
            species={c.species}
            type={c.type}
            gender={c.gender}
            origin={c.origin.name}
        //  img={c.img}
        //  onClose={() => onClose(c.id)}
        />
        ))
    } 
    let Filter = (array) => {
        var newData = (array.filter(v => v.name.includes(busqueda)));
        return Map(newData);
    }
    if (busqueda == ''){
        return(
        <div className='MapCard' >
            {Map(data.results)}
        </div>
        )
    } else {
        return (
            <div className='MapCard' >
                {/* {Map(newData)} */}
                {Filter(data.results)}
            </div>
        )
        // var newData = [];
        // for (let i = 0; i < data.results.length; i++) {
        //     if (data.results[i].name.includes(busqueda)){
        //         newData.push(data.results[i]);
        //     }
        // }
    }
}