import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useLocation } from 'react-router-dom'

function Payment() {
  const { register, handleSubmit } = useForm();
  const location = useLocation();
  const amount = location.state?.amount || 0;
  const [paymentStatus, setPaymentStatus] = useState(false);
  const [paymentData, setPaymentData] = useState(null);

  function handleFormSubmit(data) {
    setPaymentStatus(true);
    setPaymentData(data);
  }

  return (
    <div className='container mt-4'>
      {!paymentStatus ? (
        <>
          <h2 className='text-center mb-4'>Payment Gateway</h2>
          <form className='form mx-auto w-50 shadow' onSubmit={handleSubmit(handleFormSubmit)}>
            <div className='mb-3'>
              <label className='form-label'>Card Holder Name</label>
              <input type='text' className='form-control' {...register('cardHolder', { required: true })} />
            </div>

            <div className='mb-3'>
              <label className='form-label'>Card Number</label>
              <input type='text' className='form-control' {...register('cardNumber', { required: true })} />
            </div>

            <div className='mb-3'>
              <label className='form-label'>CVV</label>
              <input type='password' className='form-control' {...register('cvv', { required: true })} />
            </div>

            <div className='mb-3'>
              <label className='form-label'>Expiry Date</label>
              <input type='month' className='form-control' {...register('expiry', { required: true })} />
            </div>

            <div className='mb-3'>
              <label className='form-label'>Amount</label>
              <input type='text' className='form-control' value={`₹${amount}`} readOnly />
            </div>

            <button className='btn btn-success w-100' type='submit'>Pay Now</button>
          </form>
        </>
      ) : (
        <>
          <h2 className='text-center mb-4'>Invoice</h2>
          <div className='card p-4 w-50 mx-auto shadow'>
            <p><strong>Card Holder:</strong> {paymentData.cardHolder}</p>
            <p><strong>Card Number:</strong> **** **** **** {paymentData.cardNumber?.slice(-4)}</p>
            <p><strong>Amount Paid:</strong> ₹{amount}</p>
            <p><strong>Status:</strong> Payment Successful</p>
          </div>
        </>
      )}
    </div>
  );
}

export default Payment;
