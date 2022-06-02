import React, {useRef, useState} from 'react';
import { useAuth } from '../Contexts/AuthContext';
import { Link } from 'react-router-dom';

import '../App.css';

export default function ForgotPassword() {

  const emailRef = useRef();
  const { resetPassword} = useAuth();
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  
  async function handleSubmit(e){
    e.preventDefault()

    try {
      setMessage('')
      setError('');
      setLoading(true);
      await resetPassword(emailRef.current.value);
      setMessage('Check your inbox for further instructions')
    } catch (errorLogin){
      setError('Failed to reset password');
    }

    setLoading(false);
  }

  return (
    <div className='registerComponent'>
      <div className='registerFormContainer'>
        <h2>Password Reset</h2>
        {error && <p className='RegisterError'>{error}</p>}
        {message && <p className='forgotPasswordMessage'>{message}</p>}
        {/* form here */}
        <form className='registerForm' onSubmit={handleSubmit}>
            <input type='email' ref={emailRef} placeholder='Email' required/>
              <button disabled={loading} className='registerFormBtn' type='submit'>Reset Password</button>
        </form> 
        <div>

        <Link to = '/login'><p className='gotAnAccountLink'>Login</p></Link>
        </div>
      </div>
      <div className='registerComponentImage'>
        <img src={process.env.PUBLIC_URL + '/Images/SolentUniversityLogin.jpg'}
          alt='Solent University Southampton Pod'/>
      </div>
    </div>
  )
}
