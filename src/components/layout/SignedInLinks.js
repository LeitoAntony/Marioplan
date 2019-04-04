import React from 'react';
import { NavLink } from 'react-router-dom';

const SinedInLinks = () => {
    return (
        <ul className="navbar-nav">
            <li className="nav-item my-2">
                <NavLink className="nav-link" to="/createproject">Nuevo proyecto</NavLink>
            </li>
            <li className="nav-item my-2">
                <NavLink className="nav-link" to="/ded">Salir</NavLink>
            </li>
            <li className="nav-item">
                <button className="btn btn-success rounded-circle bg-success">
                    <NavLink className="nav-link" to="/">NN</NavLink>
                </button>
            </li>
        </ul>
    )
}

export default SinedInLinks;