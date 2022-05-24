import React from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from '../Contexts/AuthContext'
import NavBar from './NavBar'

const PrivateRoute = ({Component}) => {

    const { currentUser } = useAuth()
    console.log(currentUser)

  return currentUser ? (
      <div>
          <div>

          <Component/>
          </div>
          <NavBar/>
      </div>
  ) : (
      <Navigate to='/Login'/>
  )
}

export default PrivateRoute