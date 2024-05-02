import React from 'react';
import './button.css'

function Button (props) {
    return (
        <button className={props.className}>
            {props.buttonText}
        </button>
    );
}

export default Button;