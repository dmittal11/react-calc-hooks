import React, { useState } from 'react';
import Button from './Button';
import ClearButton from './ClearButton';
import { evaluate } from 'mathjs';
 


const Keypad = (props) => {
    const {input, setInput } = props;
return(
    <div>
        <div className="row">
            <Button handleClick={(val) => setInput(input + val)}>7</Button>
            <Button handleClick={(val) => setInput(input + val)}>8</Button>
            <Button handleClick={(val) => setInput(input + val)}>9</Button>
            <Button handleClick={(val) => setInput(input + val)}>/</Button>
        </div>
        <div className="row">
            <Button handleClick={(val) => setInput(input + val)}>4</Button>
            <Button handleClick={(val) => setInput(input + val)}>5</Button>
            <Button handleClick={(val) => setInput(input + val)}>6</Button>
            <Button handleClick={(val) => setInput(input + val)}>*</Button>
        </div>
        <div className="row">
            <Button handleClick={(val) => setInput(input + val)}>1</Button>
            <Button handleClick={(val) => setInput(input + val)}>2</Button>
            <Button handleClick={(val) => setInput(input + val)}>3</Button>
            <Button handleClick={(val) => setInput(input + val)}>+</Button>
        </div>
        <div className="row">
            <Button handleClick={(val) => setInput(input + val)}>.</Button>
            <Button handleClick={(val) => setInput(input + val)}>0</Button>
            <Button handleClick={() => setInput(evaluate(input))}>=</Button>
            <Button handleClick={(val) => setInput(input + val)}>-</Button>
        </div>
        <div className="row">
           <ClearButton handleClear={() => setInput('')}>
               Clear
           </ClearButton>
        </div>
    </div>
)
}

// const mapDispatchToProps = dispatch => {
//     return{
//         getInput: (value) => dispatch({ type: 'GET_TIME', payload:  value}),
//         calculate: () => dispatch({ type: 'CALCULATE' }),
//         clear: () => dispatch({ type: 'CLEAR' })
//     }
// }

export default Keypad;


