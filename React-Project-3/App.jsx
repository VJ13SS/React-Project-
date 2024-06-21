import React from 'react'

import './App.css'
import Nav from './components/nav.jsx'
import Hero from './components/hero.jsx'
import Card from './components/cards.jsx'
import data from './components/data.js';

export default function App() {
  const cardData = data.map((value) =>{
    return(<Card 
             key = {data.indexOf(value)}
             item = {value}
            />
          )
  })
  
  return (
    <div>
      <Nav />
      <Hero />
      <div className = "cards">
        {cardData}
      </div>
    </div>
  )
}
