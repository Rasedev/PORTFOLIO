import React from 'react'
import  "../../Pages/style.css"
import ButtonHoverAnimation from '../Button/ButtonHoverAnimation'



const Footer = () => {
  return (
    <>
    <div className='footer'>
      <div>
        <p>Designed & coded by Thierno Souleymane BARRY.</p>
        <span>Dribble coming soon!</span>
      </div>

      {/* <ul className="socials">
        <li><a href="https://github.com/alfabeta11" target="_blank"><i class="bi bi-github"></i></a></li>
        <li><a href="https://www.linkedin.com/in/thierno-souleymane-barry-755999217" target="_blank"><i class="bi bi-linkedin"></i></a></li>
        <li><a href="mailto:alfafrontenddev@gmail.com"><i class="bi bi-envelope"></i></a></li>
        <li><a href="tel:"><i class="bi bi-telephone-fill"></i></a></li>
      </ul> */}
      <ButtonHoverAnimation/>

    </div>
    
    
    </>
  )
}

export default Footer
