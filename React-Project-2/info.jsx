import React from 'react'
import Logo from './Logo.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faLinkedin} from '@fortawesome/free-brands-svg-icons';
import {faEnvelope} from '@fortawesome/free-regular-svg-icons';

export default function Info(){
  return(
    <div className = 'info'>
      <img src = {Logo} className = 'info-img'/>
      <h3 className = "info-name">John Edward</h3>
      <h5 className = "info-job">Business Consultant</h5>
      <h6 className = "info-text">New Origin Technologies</h6>
      <div className = "info-buttons">
        <button className = "info-email"><FontAwesomeIcon icon={faEnvelope} />Email</button>
        <button className = "info-linkedin"><FontAwesomeIcon icon={faLinkedin} />LinkedIn</button>
      </div>
    </div>
  )
}
