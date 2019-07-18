import React, { useState, Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Input from './components/Input';
import Keypad from './components/Keypad';

function App(){
  const[input, setInput] = useState('')
    return (
      <div className="app">
        <div className="calc-wrapper">
          <Input input={input}/>
          <Keypad setInput={setInput} input={input}/>
      </div>
      </div>
    );
}


export default App;
