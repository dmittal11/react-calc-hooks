import React, { useState } from 'react';
import './input.css';




// Import module allowing the component to be connected with the store

// A functional component
const Input = (props) => {
    return(
        <div className="input">
            {props.input}
        </div>
    )
}

export default Input;