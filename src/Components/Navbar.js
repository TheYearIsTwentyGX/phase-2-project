import React from 'react';
import {NavLink } from 'react-router-dom';

function Navbar({handleNavClick}) {

    function onNavClick(e) {
        
        handleNavClick(e.target.href.split('/').at(-1));
    }

    return (
        <div className="Navbar">
        <h1>Navbar</h1>
            <div>
                <NavLink onClick={onNavClick} to="/OOP">Object-Oriented Languages</NavLink>
            </div>
            <div>
                <NavLink onClick={onNavClick} to="/Functional">Functional Languages</NavLink>
            </div>
        </div>
    );
}

export default Navbar;