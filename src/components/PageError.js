import React from 'react';
import './styles/PageError.css';

function PageError (props) {
    return (
            <div className="PageError">❌{props.error.message}😱
            <br />
                <h1>Lo siento no hay conexion a api 🙂</h1>
            </div>

        );
}

export default PageError;