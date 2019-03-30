import React from 'react';
import { NavLink } from 'react-router-dom';

const SinedOutLinks = () => {
    return (
        <ul className="navbar-nav ml-auto">
            <li className="nav-item">
                <NavLink className="nav-link" to="/">Registrarse</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to="/">Ingresar</NavLink>
            </li>
        </ul>
    )
}

export default SinedOutLinks;