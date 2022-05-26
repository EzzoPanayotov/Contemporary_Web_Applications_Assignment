import React, {useRef, useState} from 'react';
import { useAuth } from '../Contexts/AuthContext';
import { Link, useNavigate } from 'react-router-dom';

import '../App.css';

export default function LoginComponent() {

  const emailRef = useRef();
  const passwordRef = useRef();
  const { login} = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  
  async function handleSubmit(e){
    e.preventDefault()

    try {
      setError('');
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      navigate('/');
      
    } catch (errorLogin){
      setError('Failed to log in');
    }

    setLoading(false);
  }

  return (
    <div className='registerComponent'>
      <div className='registerFormContainer loginFormContainer'>
        <h2>Welcome Back</h2>
        <p>Hurry up!</p>
        <p>Other students are awaiting your answers!</p>
        {error && <p className='RegisterError'>{error}</p>}
        {/* form here */}
        <form className='registerForm' onSubmit={handleSubmit}>
            <input type='email' ref={emailRef} placeholder='Email' required/>
            <input type='password' ref={passwordRef} placeholder='Password' required/>
              <button disabled={loading} className='loginFormBtn' type='submit'>Login</button>
        </form> 
        <div className='forgotPassword'>
          <Link to = '/forgot-password'><p className='forgotPassLink'>Forgot password?</p></Link>
        </div>
        <div className='dontHaveAcc'>

        Don't have an account? <Link to = '/register'><p className='dontHaveAccLink'>Register</p></Link>
        </div>
      </div>
      <div className='registerComponentImage'>
        <img src={process.env.PUBLIC_URL + '/Images/SolentUniversityLogin.jpg'}
          alt='Solent University Southampton Pod'/>
      </div>
    </div>
  )
}
