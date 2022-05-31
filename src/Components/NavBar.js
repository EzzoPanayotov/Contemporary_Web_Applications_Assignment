import React from 'react'
import {Link} from 'react-router-dom'
import MobileNavigation from './MobileNavigation'
import {useState} from 'react'
import { useLocation } from 'react-router-dom'
import '../App.css'
import Logout from './Logout'
import { useAuth } from '../Contexts/AuthContext'
import Avatar from '@mui/material/Avatar'
function NavBar() {

    const [openNav, setOpenNav] = useState(false);
    const [openProfile, setOpenProfile] = useState(false);
    const currLocation = useLocation();
    const { currentUser } = useAuth();

    const hamburgerIcon = <img className='hamburgerMenuIcon' src={process.env.PUBLIC_URL + '/Images/hamburgerIcon.svg'}
        alt='Hamburger Menu Open Icon'
        onClick={() => setOpenNav(!openNav)}/>
    const closeIcon = <img className='hamburgerMenuIcon' src={process.env.PUBLIC_URL + '/Images/closeIcon.svg'}
        alt='Hamburger Menu Close Icon'
        onClick={() => setOpenNav(!openNav)}/>

    const profileDropDown = <img className='profileDropDownIcon' src={process.env.PUBLIC_URL + '/Images/arrowVector.svg'}
        alt='Hamburger Menu Open Icon'
        onClick={() => setOpenProfile(!openProfile)}/>
    const closeProfileDropDown = <img className='closeProfileDropDownIcon' src={process.env.PUBLIC_URL + '/Images/arrowVector.svg'}
        alt='Hamburger Menu Close Icon'
        onClick={() => setOpenProfile(!openProfile)}/>
    
  return (
    <div className='navBarMain'>
        <div className='logoDiv'>
            <div className='hamburgerMenu'>
                {openNav ? closeIcon : hamburgerIcon}
                {openNav && <MobileNavigation/>}
            </div>
            {currLocation.pathname === '/' 
                || currLocation.pathname === '/register' 
                || currLocation.pathname === '/login'
                || currLocation.pathname === '/profile' 
                || currLocation.pathname === '/ask-a-question'
                || currLocation.pathname === '/your-questions'?
            <Link to='/'>
                <button className='logoBtn'>
                    <img className='solentLogo' src={process.env.PUBLIC_URL + '/Images/solentLogo.svg'} 
                        alt='Solent University Logo'/>
                </button>
            </Link>: ''
            }
            {currLocation.pathname === '/no-user' || currLocation.pathname === '/forgot-password'? 
            <Link to='/no-user'>
                <button className='logoBtn'>
                    <img className='solentLogo' src={process.env.PUBLIC_URL + '/Images/solentLogo.svg'} 
                        alt='Solent University Logo'/>
                </button>
            </Link>: ''
            }
        </div>

        <div className='pageIndicatorDiv'>
            <h3>
                {currLocation.pathname === '/' ? 'Home' : ''}
                {currLocation.pathname === '/no-user' ? 'Home' : ''}
                {currLocation.pathname === '/register' ? 'Register' : ''}
                {currLocation.pathname === '/login' ? 'Login' : ''}
                {currLocation.pathname === '/profile' ? 'Profile' : ''}
                {currLocation.pathname === '/ask-a-question' ? 'New Question' : ''}
                {currLocation.pathname === '/your-questions' ? 'Your Questions' : ''}
            </h3>
        </div>
        { currLocation.pathname === '/no-user' 
            || currLocation.pathname === '/register'
            || currLocation.pathname === '/login' ?
        <div className='registerLoginBtns'>
                <Link to = '/register'>
                    <button className='registerBtn'>
                        <img className='registerImg' 
                        src={process.env.PUBLIC_URL + '/Images/registerIcon.svg'} 
                        alt='Register button icon'></img>
                        Register
                    </button>
                </Link>
                <Link to = '/login'>
                    <button className='loginBtn'>Login</button>
                </Link>
        </div>
        : ''
    }   
        { currentUser ?
        <div className='registerLoginBtns'>
            <Link to = '/ask-a-question'>
                <button className='askQuestionBtn'>
                    <svg width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.50004 12.4167C9.49158 12.4167 11.9167 9.99155 11.9167 7.00001C11.9167 4.00847 9.49158 1.58334 6.50004 1.58334C3.5085 1.58334 1.08337 4.00847 1.08337 7.00001C1.08337 9.99155 3.5085 12.4167 6.50004 12.4167Z" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M6.5 4.83334V9.16668" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M4.33337 7H8.66671" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Ask a question
                </button>
            </Link>
            <div className='profileImageDropDown'>
            {
            openProfile ? 
            <Avatar className='profileImage'
                src={currentUser.photoURL}
                sx = {{width: 50, height: 50}}
                onClick={() => setOpenProfile(!openProfile)}/> 
            : 
            <Avatar className='profileImage'
                src={currentUser.photoURL}
                sx = {{width: 50, height: 50}}
                onClick={() => setOpenProfile(!openProfile)}/>
            }    
            </div>
            <div className='profileDropDown'>
                {openProfile ? closeProfileDropDown : profileDropDown}
                {!currentUser && openProfile}
            </div>
            {openProfile &&
                <div className='profileDropDownAbsolute'>
                    <Link to ='/profile'>
                        <button className='profileBtn'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" className="bi bi-person-circle" viewBox="0 0 16 16">
                                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                                <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                            </svg>
                            Profile
                        </button>
                    </Link>
                    <Link to = '/ask-a-question'>
                        <button className='askQuestionBtnMobile'>
                            <svg width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.50004 12.4167C9.49158 12.4167 11.9167 9.99155 11.9167 7.00001C11.9167 4.00847 9.49158 1.58334 6.50004 1.58334C3.5085 1.58334 1.08337 4.00847 1.08337 7.00001C1.08337 9.99155 3.5085 12.4167 6.50004 12.4167Z" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M6.5 4.83334V9.16668" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M4.33337 7H8.66671" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            Ask a question
                        </button>
                    </Link>
                    <Link to = '/your-questions'>
                        <button className="yourQuestionsBtnAbsolute">
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9 16.5C13.1421 16.5 16.5 13.1421 16.5 9C16.5 4.85786 13.1421 1.5 9 1.5C4.85786 1.5 1.5 4.85786 1.5 9C1.5 13.1421 4.85786 16.5 9 16.5Z" stroke="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M6.8175 6.75C6.99383 6.24875 7.34187 5.82608 7.79997 5.55685C8.25807 5.28762 8.79668 5.1892 9.32039 5.27903C9.8441 5.36886 10.3191 5.64114 10.6613 6.04765C11.0035 6.45415 11.1908 6.96864 11.19 7.5C11.19 9 8.94 9.75 8.94 9.75" stroke="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M9 12.75H9.0075" stroke="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            Your questions
                        </button>
                    </Link>
                    <Logout/>
                </div>
            }
        </div>
        : ''
        }
    </div>
  )

}

export default NavBar