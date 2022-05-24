import React, {useState} from 'react'
import { useAuth } from '../Contexts/AuthContext'
import {useNavigate} from 'react-router-dom'

function Logout() {

    const { currentUser, logout } = useAuth();
    const [error, setError] = useState('')
    const navigate = useNavigate()

    async function handleLogout(){
        setError('')

        try {
            await logout()
            navigate('/')
        } catch{
            setError('Failed to log out')
        }
    }

  return (
    <div>
        {error && <p>error</p>}
        <h3 style={{color: 'red'}}>Email:</h3> {currentUser.email} 
        <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Logout