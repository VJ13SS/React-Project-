import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

export default function SocialMedia(){
  return(
    <div className = "social-media">
      <FontAwesomeIcon icon={faFacebook} />
      <FontAwesomeIcon icon={faTwitter} />
      <FontAwesomeIcon icon={faInstagram} />
      <FontAwesomeIcon icon={faGithub} />
    </div>   
  )
}
