import React from 'react'

import About from './components/about'
import Info from './components/info'
import Interests from './components/interests'
import SocialMedia from './components/socialmedia .jsx'

import './App.css'

export default function App() {
  return (
    <div className = "container">
      <Info />
      <About />
      <Interests />
      <SocialMedia />
    </div>
  )
}
