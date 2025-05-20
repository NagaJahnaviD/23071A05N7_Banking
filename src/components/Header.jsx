import React from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

function Header(props) {


  return (
    <div className='bg-dark'>
        <ul className='justify-content-end fs-4 nav'>
            <li className='nav-item'>
                <Link className='nav-link' to="">Home</Link>
            </li>

            

            <li className='nav-item'>
                <Link className='nav-link' to="signup">Signup</Link>
            </li>
            {
              props.loginStatus===false?(
                <li className='nav-item'>
                <Link className='nav-link' to="signin">Signin</Link>
                 </li>
              ):(
                <>
                <li className='nav-item'>
                  <Link className='nav-link' to="signin"onClick={() => props.setLoginStatus(false)}>Logout</Link>
                  </li>
                  <li className='nav-item'>
                    <Link className='nav-link' to="about" >Profile</Link>
                  </li>
                </>
              )
            }
            <li className='nav-item'>
                <Link className='nav-link' to="catelogue">Contact</Link>
            </li>

            <li className='nav-item'>
                <Link className='nav-link' to="aboutBank">About</Link>
            </li>

        </ul>
    </div>
  )
}

export default Header