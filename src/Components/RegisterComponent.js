import React from 'react'
import NavBar from './NavBar'
import '../App.css'

function RegisterComponent() {
  return (
    <div>
        <form>
            <label>First name:</label><br/>
            <input type="text" id="fname" name="fname"/><br/>
            <label>Last name:</label><br/>
            <input type="text" id="lname" name="lname"/>
        </form>
    </div>
  )
}

export default RegisterComponent