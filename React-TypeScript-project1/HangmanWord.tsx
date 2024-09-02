import React from 'react'
import './components.css'

type hangmanWordProp ={
  targetWord:string
  guessedLetters:string[]
  numberOfIncorrectGuesses:number
}
export default function HangmanWord({targetWord,guessedLetters,numberOfIncorrectGuesses}:hangmanWordProp) {
  const word: string= targetWord
  const wordArray: string[] = word.split('');
  const letters = wordArray.map((letter,index)=>{
    return (
      <span key = {index} className = 'space'>
        <span 
          key = {index} 
          className = 'letter'
          style = {guessedLetters.includes(letter)?{visibility:'visible'}:{visibility:numberOfIncorrectGuesses== 6?'visible':'hidden'}}
          >
          {letter}
        </span>
      </span>
    )
  })
   return (
     <div className = 'word'>{letters}</div>
     
   )
}
