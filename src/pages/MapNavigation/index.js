import React from 'react';
import { Link } from 'react-router-dom';


const MapNavigation = () => {

    return (
        <div>
            <header> Temp </header>
            <h1> MapNavigation - Rango Seguro </h1>
            <footer> Temp2 </footer>

            <Link to='/outlet' >
                <strong>ver lojas</strong>
            </Link>
        </div>
    );
};

export default MapNavigation;