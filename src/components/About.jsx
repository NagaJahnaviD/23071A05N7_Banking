import React from 'react'

function About({currentUser}) {
  return (
    <div className='container lead'>
        <h1 className='text-center'>About</h1>
        <div className='card shadow p-5'>
            <div>Full Name:{currentUser.fullname}</div>
            <div>User Name:{currentUser.username}</div>
            <div>Email:{currentUser.email}</div>
        </div>

    </div>
  )
}

export default About