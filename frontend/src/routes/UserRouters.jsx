import React from 'react'
import Home from '../pages/User/Home'
import Login from '../pages/User/Login'
import Signup from '../pages/User/Signup'
import MyAccount from '../Dashboard/user-account/MyAccount'
import Dashboard from '../Dashboard/doctor-account/Dashboard'

import {Routes,Route} from 'react-router-dom'
import ProtectedRoute from './ProtectedRoute'

function UserRouters() {
  return (
    <>
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Signup />} />
        <Route path='/users/profile/me' element={<ProtectedRoute allowedRoles={['patient']}>< MyAccount /></ProtectedRoute>} />
        <Route path='/doctors/profile/me' element={<ProtectedRoute allowedRoles={['doctor']}><Dashboard /></ProtectedRoute>} />
    </Routes>
    </>
  )
}

export default UserRouters

