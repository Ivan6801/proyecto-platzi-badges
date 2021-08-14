import React from 'react';
import images404 from '../images/404.svg';
import { Link } from 'react-router-dom';

function NotFound() {
    return <center>
        <img src={images404} width="500" alt="404 Not found" />
        <Link to="/">
            Volver a la página de Inicio
        </Link>
    </center>
}

export default NotFound;