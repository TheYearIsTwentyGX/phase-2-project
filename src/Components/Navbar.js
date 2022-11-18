import React from 'react';
import {NavLink } from 'react-router-dom';

function Navbar() {
    return (
        <div className="Navbar">
        <h1>Navbar</h1>
            <div>
                <NavLink to="/OOP">Object-Oriented Languages</NavLink>
            </div>
            <div>
                <NavLink to="/functional">Functional Languages</NavLink>
            </div>
        </div>
    );
}

export default Navbar;