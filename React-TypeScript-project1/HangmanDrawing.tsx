import React from 'react'
import './components.css'

type hangmanDrawingProps = {
  numberOfIncorrectGuesses:number
}
export default function HangmanDrawing({numberOfIncorrectGuesses}:hangmanDrawingProps) {
  const HEAD = (
    <div className = 'Head'></div>
  )
  const BODY = (
    <div className = 'Body'></div>
  )
  const RIGHTARM=(
    <div className = 'right-arm'></div>
  )
  const LEFTARM = (
    <div className = 'left-arm'></div>
  )
  const RIGHTLEG=(
    <div className = 'right-leg'></div>
  )
  const LEFTLEG = (
    <div className = 'left-leg'></div>
  )

  const BODYPARTS = [HEAD,BODY,RIGHTARM,LEFTARM,RIGHTLEG,LEFTLEG ]
  //BODYPARTS.slice(0,numberOfIncorrectGuesses) --> here the body parts are given in correct order for each incorrect guess it will display eac part frim index 0*/
   return(
     <div className = 'drawing'>
       {BODYPARTS.slice(0,numberOfIncorrectGuesses)}
       <div className = 'hook'></div>
       
       <div className = 'Stick-head'></div>
       <div className = 'Stick'></div>
       <div className = 'Base'></div>
       
     </div>
     
   )
}
