import React from 'react';
import { NavLink } from 'react-router-dom';

const SinedOutLinks = () => {
    return (
        <ul className="navbar-nav ml-auto">
            <li className="nav-item">
                <NavLink className="nav-link" to="/signup">Registrarse</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to="/signin">Ingresar</NavLink>
            </li>
        </ul>
    )
}

export default SinedOutLinks;