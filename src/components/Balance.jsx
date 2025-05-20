import React from 'react'

function Balance() {
  return (
    <div className='container lead'>
        <h1 className='text-center'>About</h1>
        <div className='card shadow p-5 w-50 mx-auto'>
            <div>Full Name:{currentUser.fullname}</div>
            <div>Account Number:{currentUser.accountNum}</div>
            <div>Email:{currentUser.email}</div>
            <div>Phone number:{currentUser.phone}</div>
            <div>Home branch:{currentUser.branch}</div>

            <h1>Balance Ampunt as on 20/05/2025: 15,000/-</h1>
        </div>

    </div>
  )
}

export default Balance