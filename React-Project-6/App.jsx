import './App.css'
import Die from './Components/dice'
import React from 'react'
import {nanoid} from "nanoid"
import Confetti from 'react-confetti';

export default function App() {

  //to generate new die
  function generateDie(){
    let num = Math.floor(Math.random()*6)
      //made an object to store the value of the dice and if it is clicked or not
    return(
      {
      value:num+1,
      isHeld:false,
      id :nanoid()//generates a random id
      }
    )
  }
  
  //created array with the 10 random numbers
  function allNewDice() {
     const arr = [];
    for (let i = 0;i<10;i++){
      arr.push(generateDie());
    }
    return arr;
  }

  //create the dice state
  const [dice,setDice] = React.useState(allNewDice());
    
  const diceElements = dice.map((num)=>{
    //mapping the object array created to the die component 
    return <Die 
             key = {num.id} 
             value = {num.value} 
             held = {num.isHeld}
             holdDice ={()=>holdDie(num.id)}//hold die function is activated when the die is clicked 
             />
  })
  
  function newDiceElements(rolls) {

    if(tensies){
      setDice(allNewDice())
      setRolls(0)
    }
    else{
    setRolls(rolls + 1)
    
     setDice(
       //mapping through the current dice array and if the dice is clicked/if isHeld is true it wont be changed and if not then a new die is generated 
       currentDie => currentDie.map((die)=> die.isHeld?die:generateDie()))
    }
  }
  
  //This function holdDie will take place when the dice is clicked..Here it is accepting a parameter id...to pass a parameter to the onclick event we use an arrow function and call the function holdDie inside the arrow function 'coz the onclick event is a function where we cannot pass any parameters 
  function holdDie(id) {
    //we changes the die state.. updating isHeld property
    setDice(prevDie => prevDie.map((die) =>
      {
      /*
     if(die.id === id){
       return {...die,isHeld:!die.isHeld}
     }
      else{
        return die
      }*/
      //explanation of ternary operator is shown above
      return die.id === id ?{...die,isHeld:!die.isHeld}:die
    }
  ))
  }

  let [tensies,setTensies] = React.useState(false)
  let [rolls,setRolls] = React.useState(0)

  //This effect will take place only if the dice array changes...it checks the winning conditions 
  React.useEffect(()=>{
    const allHeld = dice.every((die) => die.isHeld)//checks if is held is true for all die
    const Target = dice[0].value
    const isTarget = dice.every((die) => die.value === Target)

    if(allHeld && isTarget){
      setTensies(true)
      alert("You Won")
    }
    else{
      setTensies(false)
    }
    console.log('hello')
  },[dice])
  console.log(rolls)
  return (
    //confetti will only be dropped if the tensies is true(user wins the game)
    <main>
      {tensies && <Confetti/>}
      <h2 className = "main-header">Tenzi</h2>
      <p className = "main-text">Roll until all dice are the same.Click each die to freeze it as its current value between the rolls.</p>
      <div className = "dice-container">
        {diceElements}
      </div>
      <h4>{rolls>0 ? `Rolls: ${rolls}`:""}</h4>
      <button className = "roll-dice" onClick = {()=>newDiceElements(rolls)}>{tensies ? "New Game":"Roll"}</button>
    </main>
  )
}
