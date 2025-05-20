import React from 'react'
import { useForm } from 'react-hook-form'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Signup({ users, setUsers }) {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  async function handleFormSubmit(user) {
    const updatedUsers = [...users, user];
    await setUsers(updatedUsers);
    alert('Please proceed to login');
    console.log(users, updatedUsers);
    navigate("/signin");
  }

  useEffect(() => {
    console.log("Users state updated:", users);
  }, [users]);

  return (
    <div className='mt-5 pt-4 d-flex justify-content-center align-items-center'>
      <form className='form mx-auto shadow p-4 w-50' onSubmit={handleSubmit(handleFormSubmit)}>

        <div>
          <label htmlFor="fullname" className='form-label'>Full Name:</label>
          <input
            type="text"
            id="fullname"
            className='form-control mb-2'
            {...register('fullname', { required: true })}
          />
        </div>
        <div>
          <label htmlFor="age" className='form-label'>Account Number:</label>
          <input
            type="number"
            id="acountNum"
            className='form-control mb-2'
            {...register('accountNum', { required: true, min: 1 })}
          />
        </div>

        <div>
          <label htmlFor="email" className='form-label'>Email:</label>
          <input
            type="email"
            id="email"
            className='form-control mb-2'
            {...register('email', { required: true })}
          />
        </div>

        <div>
          <label htmlFor="phone" className='form-label'>Phone Number:</label>
          <input
            type="tel"
            id="phone"
            className='form-control mb-2'
            {...register('phone', { required: true })}
          />
        </div>


        <div>
          <label htmlFor="password" className='form-label'>Password:</label>
          <input
            type="password"
            id="password"
            className='form-control mb-2'
            {...register('password', { required: true })}
          />
        </div>


        <div>
          <label htmlFor="password" className='form-label'>Confirm Password:</label>
          <input
            type="password"
            className='form-control mb-2'
          />
        </div>

        <div>
          <label htmlFor="course" className='form-label'>pin:</label>
          <input
            type="password"
            id="pin"
            className='form-control mb-2'
            {...register('pin', { required: true })}
          />
        </div>
        <div>
          <label htmlFor="branch" className='form-label'>Home Branch:</label>
          <textarea
            id="branch"
            className='form-control mb-3'
            {...register('branch', { required: true })}
          />
        </div>

        <button className="btn btn-primary" type="submit">Register</button>
      </form>
    </div>
  )
}

export default Signup;
