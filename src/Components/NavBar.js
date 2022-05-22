import React from 'react'
import MobileNavigation from './MobileNavigation'
import {useState} from 'react'
import '../App.css'
function NavBar() {
    const [open, setOpen] = useState(false);
    const hamburgerIcon = <img className='hamburgerMenuIcon' src={process.env.PUBLIC_URL + '/Images/hamburgerIcon.svg'}
        alt='Hamburger Menu Open Icon'
        onClick={() => setOpen(!open)}/>
    const closeIcon = <img className='hamburgerMenuIcon' src={process.env.PUBLIC_URL + '/Images/closeIcon.svg'}
        alt='Hamburger Menu Close Icon'
        onClick={() => setOpen(!open)}/>
  return (
    <div className='navBarMain'>
        <div className='logoDiv'>
            <div className='hamburgerMenu'>
                {open ? closeIcon : hamburgerIcon}
                {open && <MobileNavigation/>}
            </div>
            <img className='solentLogo' src={process.env.PUBLIC_URL + '/Images/solentLogo.svg'} 
                alt='Solent University Logo'></img>
        </div>

        <div className='pageIndicatorDiv'>
            <h3>Questions</h3>
        </div>
        <div className='registerLoginBtns'>
            <button className='registerBtn'>
                <img className='registerImg' 
                src={process.env.PUBLIC_URL + '/Images/registerIcon.svg'} 
                alt='Register button icon'></img>
                Register
            </button>
            <button className='loginBtn'>Login</button>
        </div>
        
    </div>
  )
}

export default NavBar