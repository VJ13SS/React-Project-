import React from 'react'
import ReactLogo from './Images/ReactLogo.png'
export default function Nav(){
  return (
    <nav>
      <img src = {ReactLogo} className = "nav-logo"/>
      <h3 className = "nav-text1">ReactFacts</h3>
      <h4 className = "nav-text2">ReactCourse - Project 1</h4>
    </nav>
  )
}
