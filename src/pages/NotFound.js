import React from 'react';
import images404 from '../images/404.svg';

function NotFound() {
    return <center>
        <img src={images404} width="500" alt="404 Not found" />
    </center>
}

export default NotFound;