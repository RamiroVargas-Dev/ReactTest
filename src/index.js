/*const element = document.createElement('h1')

element.innerText = 'Hello React'

const container = document.getElementById('root')

container.appendChild(element)*/

import React from 'react'
import ReactDOM from 'react-dom'

const user = {
  firstName : 'Ramiro',
  lastName : 'Vargas',
  avatar: 'https://cdn2.iconfinder.com/data/icons/custom-ios-14/180/Among_Us.png'
}

function getName(user){
  return `${user.firstName} ${user.lastName}`
}

function getGreeting(user){
  if(user){
    return <h1>Hello {getName(user)}</h1>
  }
  else{
    return <h1>Hello Stranger</h1>
  }
}

const name = 'Ramiro'
//const element = <div>{getGreeting(user)}</div>
const element = (
  <div>
      {getGreeting(user)}
      <img src={user.avatar}/>
  </div>
)
const container = document.getElementById('root')

//ReactDOM.render(__QUE__,__DONDE__)

ReactDOM.render(element,container)