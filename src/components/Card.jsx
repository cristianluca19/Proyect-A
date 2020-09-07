import React from 'react';
import './Components.css';
import {Link} from 'react-router-dom';
import MapCard from './MapCard';

export default function Card ({id, name, status, species, type, gender, origin}) {
    return (
          
    <div className="Card">
        <div className="dataCard">
            <h5 className="card-title">{name}</h5>
            <div >
              <div className="row-sm-4 row-md-4 row-lg-4">
                <p>Status: {status}</p>
              </div>
              <div className="row-sm-4 row-md-4 row-lg-4">
                <p>Species: {species}</p>
              </div>
              <div className="row-sm-4 row-md-4 row-lg-4">
                <p>Type: {type}</p>
              </div>
              <div className="row-sm-4 row-md-4 row-lg-4">
                <p>Gender: {gender}</p>
              </div>
              <div className="row-sm-4 row-md-4 row-lg-4">
                <p>Origin: {origin}</p>
              </div>
            </div>
        </div>
    </div>
    );
};
