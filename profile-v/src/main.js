import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

console.log("Welcome to the future of the web.");

setupCounter(document.querySelector('#counter'))

