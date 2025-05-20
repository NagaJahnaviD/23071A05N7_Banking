import React, { useState } from 'react'
import Payment from './Payment';
import { useNavigate } from 'react-router-dom';
function Catelogue({cart,setCart}) {
  const [amount,setAmount]=useState(0);
  const products=[
    {id: 1, name: 'Bachupally ', phno: 1234567907, email:'bachupally@djs.com',manager:"Kiran Kumar"}, 
    {id: 2, name: 'Kukatpally ', phno: 1234567907, email:'bachupally@djs.com',manager:"Kiran Kumar"}, 
    {id: 3, name: 'Warangal ', phno: 1234567907, email:'bachupally@djs.com',manager:"Kiran Kumar"}, 
    {id: 4, name: 'Miyapur ', phno: 1234567907, email:'bachupally@djs.com',manager:"Kiran Kumar"}, 
    {id: 5, name: 'Bachupally ', phno: 1234567907, email:'bachupally@djs.com',manager:"Kiran Kumar"}, 
    {id: 6, name: 'Hanumakonda ', phno: 1234567907, email:'bachupally@djs.com',manager:"Kiran Kumar"}, 
    {id: 7, name: 'Madinaguda ', phno: 1234567907, email:'bachupally@djs.com',manager:"Kiran Kumar"}, 
    {id: 8, name: 'Karimnagar ', phno: 1234567907, email:'bachupally@djs.com',manager:"Kiran Kumar"}, 
    {id: 9, name: 'Vargal ', phno: 1234567907, email:'bachupally@djs.com',manager:"Kiran Kumar"}, 
  ]
  const navigate=useNavigate();


  return (
    <div className='margin-auto mx-5 my-5'>
      <h1 className='text-center'>Contact Us</h1>
        <div className="row">
        {products.map((item) => (
          <div key={item.id} className="col-md-4 mb-4"> 
            <div className="card p-4 h-100">
              <h5 className='text-success'>{item.name}</h5>
              <p>Phno: {item.phno}</p>
              <p>Email: {item.email}</p>
              <p>Manager: {item.manager}</p>
            </div>
          </div>
        ))}
      </div>
  
    </div>
  )
}

export default Catelogue