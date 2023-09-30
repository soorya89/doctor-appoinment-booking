import React from 'react'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Signup from '../pages/Signup'

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

