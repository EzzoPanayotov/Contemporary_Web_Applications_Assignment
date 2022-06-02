import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'
function PageNotFound() {
  return (
    <div className='notFoundMain'>
        <div className='notFoundFlex'>
        <h4>The page you are trying to visit is not available!</h4>
        <Link to = '/'>
            <p className='forgotPassLink goHomeLink'>Home</p>
        </Link>
        </div>
    </div>
  )
}

export default PageNotFound