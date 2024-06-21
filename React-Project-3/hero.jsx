import  React from 'react'
import HeroImg from './Images/photo-grid.png'

export default function Hero(){
  return(
    <section className = "hero">
      <img src = {HeroImg} className = "hero-img"/>
      <h1 className = "hero-header">Online Experiences</h1>
      <p className = "hero-text">Explore to Enjoy the best experiences of your life.
      Seize the Luxury and be Overwhelmed with mind blowing and Captivating Sceneries..!</p>
    </section>
  )
}
