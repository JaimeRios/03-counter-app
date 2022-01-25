import React from 'react';
import ReactDOM from 'react-dom';
import PrimerApp from './PrimeraApp';
import './index.css'
import CounterApp from './CounterApp';



const divRoot = document.querySelector('#root');

//ReactDOM.render(<PrimerApp saludo="Hola, Soy Goku" />,divRoot);
ReactDOM.render(<CounterApp value={10} />, divRoot);

console.log(divRoot);