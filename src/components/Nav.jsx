import React from 'react';
import {Link} from 'react-router-dom';
import Search from './Search';
import './Components.css'

export default function Nav() {
    return (
        <nav className="navbar navbar-dark bg-dark" >
            <a class="navbar-brand " >Developer-App</a>
            <Link to='/Home' >
                <button className='NavButtons' >Home</button>
            </Link>
            <Link to='/about' >
                <button className='NavButtons' >About</button>
            </Link>
        </nav>
    )
}
