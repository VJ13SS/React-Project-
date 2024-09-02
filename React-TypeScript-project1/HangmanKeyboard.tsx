import React from 'react'
import './components.css'
import LETTERS from './keys'

type hangmanKeyboardProps = {
  targetWord:string
  activeLetters: string[]
  inactiveLetters: string[]
  addGuessedLetters:(letter:string)=>void
  isWinner:boolean
  isLoser:boolean
}
export default function HangmanKeyboard({targetWord,activeLetters,inactiveLetters,addGuessedLetters,isWinner,isLoser}:hangmanKeyboardProps) {
  const targetKeys: string[]= targetWord.split('')
  
  function getLetter(key: string): void {
    addGuessedLetters(key)
    
  }

   const KEYS = LETTERS.map((letter,index)=>{
     const isActive:boolean= activeLetters.includes(letter)
     const isInActive = inactiveLetters.includes(letter)
     return(
         <button 
           className ={`key ${isActive ?'active':''} ${isInActive?'inactive':''}`}
           key = {letter}
           onClick = {()=>getLetter(letter)}>{letter}</button>
     )
   })
  return(
    <div className = "key-container" style = {isWinner||isLoser?{pointerEvents:'none'}:{}}>
    {KEYS}</div>
    
  )
}
