import React from 'react'
import words from './words'
import HangmanDrawing from './Components/HangmanDrawing'
import HangmanWord from './Components/HangmanWord'
import HangmanKeyboard from './Components/HangmanKeyboard'
import './App.css'

export default function App() {

  function addGuessedLetters(letter:string): void{
    setGuessedLetters(guessedLetters=>[...guessedLetters,letter])
    console.log(guessedLetters);
     
  }
  //Some declared variables might not be used now but they can be used to for further modifications in the future 
  //Getting a random word from the words array
  const [wordToGuess,setWordToGuess]=React.useState(words[Math.floor(Math.random() * words.length)].toUpperCase());
  const targetWordArray:string[] = wordToGuess.split('')
  //Array to store the guessedLetters
  const [guessedLetters,setGuessedLetters] = React.useState<string[]>([])
  const incorrectGuesses: string[] = guessedLetters.filter(letter => !wordToGuess.includes(letter))/*checks whether the guessed letter is in the wordToGuess and takes all the letters that are not in*/
  const activeLetters:string[] = guessedLetters.filter(letter => wordToGuess.includes(letter))
const inactiveLetters = incorrectGuesses
  console.log(activeLetters,guessedLetters);

  const isWinner: boolean = wordToGuess.split('').every(letter => activeLetters.includes(letter))
  const isLoser: boolean = inactiveLetters.length == 6;
  
 // const win: boolean= 
  return (
    <main>
      <span style = {{fontSize:'1.5rem',fontWeight:'bold',color:isWinner?'lime':'red'}}>{isWinner?'You Win.... Refresh to Restart':''}{isLoser?`You Lose.... Refresh to Restart`:''}</span>
      <HangmanDrawing numberOfIncorrectGuesses = {incorrectGuesses.length}/>
      <HangmanWord 
        targetWord = {wordToGuess} 
        guessedLetters = {guessedLetters}
        numberOfIncorrectGuesses = {incorrectGuesses.length}/>
      <HangmanKeyboard 
        targetWord = {wordToGuess}
        activeLetters = {activeLetters}
        inactiveLetters = {incorrectGuesses}
        addGuessedLetters = {addGuessedLetters}
        isWinner = {isWinner}
        isLoser = {isLoser}/>
    </main>
  )
}
