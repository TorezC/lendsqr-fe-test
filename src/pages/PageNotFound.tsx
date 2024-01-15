import React from 'react'
import { Link } from 'react-router-dom'

const PageNotFound = () => {
  return (
    <div>
        <h1>404 Page not Found</h1>
        Return to login 
        <span>
            <Link to='/' >Login</Link>
        </span>
    </div>
  )
}

export default PageNotFound