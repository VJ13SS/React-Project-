import React from 'react'
import Star from './Images/Star.png'

export default function Cards(props){
  return(
    
      <div className = "card">
        {props.item.trending == 1 ? <div className = "trending">Trending</div> :null}
        <img src = {props.item.img} className = "card-image"/>
        <div className = "card-header">
          <span className = "card-header-text">{props.item.header}</span>
          <div className = "card-reviews">
            <img src = {Star} className = "card-star"/>
            <span className = "card-review">{props.item.reviews}</span>
          </div>
        </div>
        <p className = "card-text">{props.item.text}</p>
        <p className = "card-date">{props.item.date}</p>
        <p><span className = "card-price">₹{props.item.price}</span> night</p>
      </div>
  )
}
