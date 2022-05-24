import React, {useRef, useState} from 'react'
import { useAuth } from '../Contexts/AuthContext';
import { Link, useNavigate } from 'react-router-dom';

import '../App.css'

function LoginComponent() {

  const emailRef = useRef();
  const passwordRef = useRef();
  const { login} = useAuth();
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate;
  
  async function handleSubmit(e){
    e.preventDefault()

    try {
      setError('')
      setLoading(true)
      await login(emailRef.current.value, passwordRef.current.value)
      navigate('/')
      
    } catch {
      setError('Failed to log in')
    }

    setLoading(false)
  }

  return (
    <div className='registerComponent'>
      <div className='registerFormContainer'>
        <h2>Welcome Back</h2>
        <p>Hurry up!</p>
        <p>Other students are awaiting your answers!</p>
        {error && <p className='RegisterError'>{error}</p>}
        {/* form here */}
        <form className='registerForm' onSubmit={handleSubmit}>
          <label>Email</label>
            <input type='email' ref={emailRef} required/>
          <label>Password</label>
            <input type='password' ref={passwordRef} required/>
          <button disabled={loading} className='formButton' type='submit'>Login</button>
        </form> 
        Don't have an account? <Link to = '/Register'>Register</Link>
      </div>
      <div className='registerComponentImage'>
        <img src={process.env.PUBLIC_URL + '/Images/SolentUniversityLogin.jpg'}
          alt='Solent University Southampton Pod'/>
      </div>
    </div>
  )
}

export default LoginComponent