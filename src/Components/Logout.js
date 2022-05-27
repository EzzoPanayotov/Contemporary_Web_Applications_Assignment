import React, {useState} from 'react'
import { useAuth } from '../Contexts/AuthContext'
import {useNavigate} from 'react-router-dom'
import '../App.css'

function Logout() {

    const { logout } = useAuth();
    const [error, setError] = useState('')
    const navigate = useNavigate()

    async function handleLogout(){
        setError('')

        try {
            await logout()
            navigate('/')
        } catch{
            setError('Failed to log out' + {error})
        }
    }

  return (
    <div className='logoutBtnContainer'>
        <button className='logoutBtn' onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Logout