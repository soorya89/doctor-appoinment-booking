import React from 'react'
import Home from '../pages/User/Home'
import Login from '../pages/User/Login'
import Signup from '../pages/User/Signup'

import {Routes,Route} from 'react-router-dom'
function UserRouters() {
  return (
    <>
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Signup />} />
    </Routes>
    </>
  )
}

export default UserRouters

