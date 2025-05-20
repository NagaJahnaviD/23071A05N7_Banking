import React from 'react'

function Transfers() {
  return (
    <div>
        <h1 className='text-center '> Make Transaction</h1>
        <div className=' mt-5 pt-4 d-flex justify-content-center align-items-center'>
      <form className='form mx-auto shadow p-4' onSubmit={handleSubmit(handleFormSubmit)}>
        <div>
            <label htmlFor="username" className='form-label'>To Account Number: </label>
            <input type="text" className='form-control' name='accountNum' id="accountNum" {...register('accountNum', { required: true })} />
        </div>
        <div>
            <label htmlFor="username" className='form-label'>Account Holder: </label>
            <input type="text" className='form-control' name='accountNum' id="accountNum" {...register('accountNum', { required: true })} />
        </div>
        <div>
            <label htmlFor="username" className='form-label'>Amount : </label>
            <input type="text" className='form-control' name='accountNum' id="accountNum" {...register('accountNum', { required: true })} />
        </div>
        <div>
            <label htmlFor="password" className='form-label'>Password</label>
            <input type="password" className='form-control' {...register('password', { required: true })} />
        </div>
        
        <button className="btn btn-danger p-2" type="submit">Transfer</button>
      </form>
    </div>
    </div>
  )
}

export default Transfers;