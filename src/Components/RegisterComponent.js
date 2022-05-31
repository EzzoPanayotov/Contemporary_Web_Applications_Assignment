import React, {useState} from 'react'
import { Link} from 'react-router-dom';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../Firebase';

import '../App.css'

function RegisterComponent() {
  const [error, setError] = useState('')
  
  const [credentials, setCredentials] = useState({email: '', fName: '', password: '', confirmPassword: ''});
  
  const handleSignUpRequest = (event) =>{
    event.preventDefault();
    if(!credentials.confirmPassword.match(credentials.password)){
      return setError('Passwords do not match!')
    }
    
    if (credentials.password.length < 6) {
      return setError('Your password must be at least 6 characters!');
    }

    if(!credentials.email.includes('@')){
      return setError('Please enter a valid email!')
    }
    createUserWithEmailAndPassword(auth, credentials.email, credentials.password)
    .then((userCredentials) =>{
      const user = userCredentials.user;
      console.log(userCredentials)
      


      updateProfile(user,{
        displayName: credentials.fName
      }).then(() =>{
        console.log('User profile updated!')
      }).cath((err) =>{
        console.log('Could not update profile')
      })


    })
    .catch((err) =>{
      // console.log(err.message)
    })
    
    
  }
    

  const handleUserInputChange = (event) =>{
    event.preventDefault()
    const {name, value} = event.target;
    setCredentials((prev) =>{
      return {...prev, [name]: value}
    })
  }
  return (
    <div className='registerComponent'>
      <div className='registerFormContainer'>
        <h2>Join Solent's Curious Community</h2>
        <p>Get answers to your questions here!</p>
        {error && <p className='RegisterError'>{error}</p>}
        {/* form here */}
        <form className='registerForm' >
            <input type='text' name='fName' placeholder='First Name'
              value={credentials.fName}
              onChange={handleUserInputChange} required/>

            <input type='email' name='email' placeholder='Email' 
              value={credentials.email} 
              onChange={handleUserInputChange} required/>

            <input type='password' name='password' placeholder='Password' 
              value={credentials.password} 
              onChange={handleUserInputChange} required/>

            <input type='password' name='confirmPassword' placeholder='Confirm Password' 
              value={credentials.confirmPassword} 
              onChange={handleUserInputChange} required/>

          <button  className='registerFormBtn' type='submit' onClick={handleSignUpRequest}>Register</button>
        </form>
        <div className='gotAnAccount'>
        Already got an account? <Link to = '/login'><p className='gotAnAccountLink'>Login</p></Link>
        </div>
      </div>
      <div className='registerComponentImage'>
        <img src={process.env.PUBLIC_URL + '/Images/SolentUniversity.jpg'}
          alt='Solent University Southampton Pod'/>
      </div>
    </div>
  )
}

export default RegisterComponent