import React from 'react'
import {Link} from 'react-router-dom'
import MobileNavigation from './MobileNavigation'
import {useState} from 'react'
import { useLocation } from 'react-router-dom'
import '../App.css'
import Logout from './Logout'
function NavBar() {
    const [open, setOpen] = useState(false);
    const currLocation = useLocation()
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
            <Link to='/'>
                <button className='logoBtn'>
                    <img className='solentLogo' src={process.env.PUBLIC_URL + '/Images/solentLogo.svg'} 
                        alt='Solent University Logo'/>
                </button>
            </Link>
        </div>

        <div className='pageIndicatorDiv'>
            <h3>
                {currLocation.pathname === '/' ? 'Home' : ''}
                {currLocation.pathname === '/Register' ? 'Register' : ''}
                {currLocation.pathname === '/Login' ? 'Login' : ''}
            </h3>
        </div>
        <div className='registerLoginBtns'>
                <Logout/>
                <Link to = '/Register'>
                    <button className='registerBtn'>
                        <img className='registerImg' 
                        src={process.env.PUBLIC_URL + '/Images/registerIcon.svg'} 
                        alt='Register button icon'></img>
                        Register
                    </button>
                </Link>
                <Link to = '/Login'>
                    <button className='loginBtn'>Login</button>
                </Link>
        </div>
    </div>
  )
}

export default NavBar