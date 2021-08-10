import React from 'react';
import './styles/PageError.css';

function PageError (props) {
    return (
            <div className="PageError">❌{props.error.message}😱
            <br />
                <h1></h1>
            </div>

        );
}

export default PageError;