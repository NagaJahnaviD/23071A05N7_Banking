import React from 'react'
import { Outlet } from 'react-router-dom'
import { useState } from 'react'
import Header from './Header'
import Footer from './Footer'
function Root({loginStatus,setLoginStatus}) {

  return (
    <div>
        <Header loginStatus={loginStatus} setLoginStatus={setLoginStatus}/>
        <div style={{height:'100vh'}}>
            <Outlet/>
        </div>
        <Footer/>
    </div>
  )
}

export default Root