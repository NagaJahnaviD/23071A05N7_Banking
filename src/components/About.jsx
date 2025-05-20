import React from 'react'

function About({currentUser}) {
  return (
    <div className='container lead'>
        <h1 className='text-center'>About</h1>
        <div className='card shadow p-5 w-50 mx-auto'>
            <div>Full Name:{currentUser.fullname}</div>
            <div>Account Number:{currentUser.accountNum}</div>
            <div>Email:{currentUser.email}</div>
            <div>Phone number:{currentUser.phone}</div>
            <div>Home branch:{currentUser.branch}</div>

            <button className='btn btn-danger text-light p-2 m-3'>GET BALANCE ENQUIRY</button>
            <button className='btn btn-danger text-light p-2 m-3'>CHECK TRANSACTIONS</button>
            <button className='btn btn-danger text-light p-2 m-3'>MAKE TRANSACTION</button>


        </div>

    </div>
  )
}

export default About