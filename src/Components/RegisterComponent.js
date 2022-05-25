import React, {useRef, useState} from 'react'
import { useAuth } from '../Contexts/AuthContext';
import { Link, useNavigate } from 'react-router-dom';

import '../App.css'

function RegisterComponent() {

  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const {signup} = useAuth();
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate();

  async function handleSubmit(e){
    e.preventDefault()

    if(passwordRef.current.value !== passwordConfirmRef.current.value){
      return setError('Passwords do not match!')
    }
    
    if (passwordRef.current.value.length < 6) {
      return setError('Your password must be at least 6 characters');
    }

    try {
      setError('')
      setLoading(true)
      await signup(emailRef.current.value, passwordRef.current.value)
      navigate('/')

    } catch {
      setError('Failed to create an account')
    }

    setLoading(false)
  }

  return (
    <div className='registerComponent'>
      <div className='registerFormContainer'>
        <h2>Join Solent's Curious Community</h2>
        <p>Get answers to your questions here!</p>
        {error && <p className='RegisterError'>{error}</p>}
        {/* form here */}
        <form className='registerForm' onSubmit={handleSubmit}>
            <input type='email' ref={emailRef} placeholder='Email' required/>
            <input type='password' ref={passwordRef} placeholder='Password' required/>
            <input type='password' ref={passwordConfirmRef} placeholder='Confirm Password' required/>
          <button disabled={loading} className='registerFormBtn' type='submit'>Register</button>
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