import React from 'react'

export default function Die(props){
  const styles = {
    backgroundColor: props.held ? "#34eb67":"white"
  }
  return (
    <div className = "die-face" style = {styles} onClick = {props.holdDice}>
      <h2>{props.value}</h2>
    </div>
  )
}
