import React from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
function Signin({users,setLoginStatus,setCurrentUser}) {
    const {register, handleSubmit}=useForm();
    const navigate=useNavigate();
  function handleFormSubmit(user)
  {
    let getUser=users.find(u=>u.accountNum===user.accountNum && u.password===user.password)
    if(getUser){
      setLoginStatus(true);
      setCurrentUser(getUser);
      // navigate("/catelogue");
    alert('Please proceed to profile')
    }else{
    alert('Invalid')
  console.log(users);}

  }
  return (
    <div className=' mt-5 pt-4 d-flex justify-content-center align-items-center'>
      <form className='form mx-auto shadow p-4' onSubmit={handleSubmit(handleFormSubmit)}>
        <div>
            <label htmlFor="username" className='form-label'>Account Number: </label>
            <input type="text" className='form-control' name='accountNum' id="accountNum" {...register('accountNum', { required: true })} />
        </div>
        
        <div>
            <label htmlFor="password" className='form-label'>Password</label>
            <input type="password" className='form-control' {...register('password', { required: true })} />
        </div>
        
        <button className="btn btn-primary" type="submit">Login</button>
      </form>
    </div>
  )
}

export default Signin