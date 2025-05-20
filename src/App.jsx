import './App.css'
import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Signin from './components/Signin'
import Signup from './components/Signup'
import Invoice from './components/Invoice'
import Payment from './components/Payment'
import AboutBank from './components/AboutBank'
import Cart from './components/Cart'
import Catelogue from './components/Catelogue'
import About from './components/About'
import Contact from './components/Contact'
import Home from './components/Home'
import Root from './components/Root'
import ErroeEle from './components/ErroeEle'
import Transactions from './components/Transactions'
import Transfers from './components/Transfers'
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import Balance from './components/BAlance'
function App() {
  const [loginStatus,setLoginStatus]=useState(false);
  const [currentUser,setCurrentUser]=useState();
  const [users,setUsers]=useState([]);
  const [cart,setCart]=useState([]);
  const [catelogue,setCatelogue]=useState([]);
  
  const browserRouterObject=createBrowserRouter([
    {
      path:"",
      element:<Root loginStatus={loginStatus} setLoginStatus={setLoginStatus}/>,
      errorElement:<ErroeEle/>,
      children:[
        {
          path:"",
          element:<Home/>
        },
        {
          path:"contact",
          element:<Contact/>
        },
        {
          path:"signin",
          element:<Signin users={users} setLoginStatus={setLoginStatus} setCurrentUser={setCurrentUser}/>
        },
        {
          path:"signup",
          element:<Signup setUsers={setUsers} users={users}/>
        },
        {
          path:"cart",
          element:<Cart cart={cart} setCart={setCart}/>,
          // children:[
          //  
          // ],
        },
        { path:"payment",
            element:<Payment />,
            children:[
                {path:"invoice",
                element:<Invoice/>}
          ]},
        {
          path:"catelogue",
          element:<Catelogue cart={cart} setCart={setCart}/>
        },
        { path:"cart",
            element:<Cart cart={cart}/>,
        },
        {
          path:"about",
          element:<About currentUser={currentUser}/>,
          
        },
                {path:"transfers",
                element:<Transfers/>},
        {
               path:"transactions",
              element:<Transactions/>
                },
                {
                path:"balance",
                element:<Balance currentUser={currentUser}/>
                },
        {
          path:"aboutBank",
          element:<AboutBank />
        }
      ]
    }
  ])
  return (
    <>
      <RouterProvider router={browserRouterObject}/>
    </>
  )
}

export default App
