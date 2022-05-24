import React from 'react'
import '../App.css'
function Footer() {
  return (
    <div className='footer'>
      <ul className='aboutUs'>
        <h3>About</h3>
        <li>
          <a href='https://www.solent.ac.uk/about/our-governance-and-organisation'>Our governance</a>
        </li>
        <li>
          <a href='https://www.solent.ac.uk/about/working-at-solent'>Careers at Solent</a>
        </li>
        <li>
          <a href='https://www.solent.ac.uk/about/our-facts-and-figures/our-student-body'>Facts and figures</a>
        </li>
      </ul>

      <ul className='contactUs'>
        <h3>Contact</h3>
        <li>
          <a href='https://www.solent.ac.uk/about/find-us'>Find us</a>
        </li>
        <li>
          <a href='https://www.solent.ac.uk/about/contact-us'>Contact us</a>
        </li>
        <li>
          <a href='https://www.solent.ac.uk/work-with-us/solent-global'>Solent Global</a>
        </li>
      </ul>
    </div>
  )
}

export default Footer