import React from 'react'
import '../App.css'
function NavBar() {
  return (
    <div className='navBarMain'>
        <div className='logoDiv'>
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