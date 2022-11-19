import React from 'react';
import {NavLink } from 'react-router-dom';
import '../Style/Navbar.css';

function Navbar({handleNavClick}) {

    function onNavClick(e) {
        
        handleNavClick(e.target.href.split('/').at(-1));
    }

    return (
        <div className="Navbar">
        <h1 style={{color:'white'}}>Language Wiki</h1>
        <div>
            <NavLink className="NavLink" onClick={onNavClick} to="/OOP">Object-Oriented Languages</NavLink>
            <NavLink className="NavLink" onClick={onNavClick} to="/Functional">Functional Languages</NavLink>
        </div>
        </div>
    );
}

export default Navbar;