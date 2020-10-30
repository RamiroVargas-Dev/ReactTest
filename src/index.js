/*const element = document.createElement('h1')

element.innerText = 'Hello React'

const container = document.getElementById('root')

container.appendChild(element)*/

import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.css'
import Exercises from './pages/Exercises'

const container = document.getElementById('root')

//ReactDOM.render(__QUE__,__DONDE__)

ReactDOM.render(<Exercises/>,container)