import React from 'react'
import { useLocation } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
function Cart({cart}) {
  const location=useLocation();
  const navigate=useNavigate();
  const amount=location.state?.amount || 0;
  return (
     <div className='margin-auto mx-5 my-5'>
        <div className="row">
        {cart.map((item) => (
          <div key={item.id} className="col-md-4 mb-4"> 
            <div className="card p-3 h-100">
              <h5>{item.name}</h5>
              <p>ID: {item.id}</p>
              <p>Price: ₹{item.price}</p>
            </div>
          </div>
        ))}
      </div>
      <button className='btn bg-danger text-light mx-auto'onClick={() => navigate('/payment',{ state: { amount }} )}>Proceetd to payment ${amount}</button>
    </div>
  )
}

export default Cart