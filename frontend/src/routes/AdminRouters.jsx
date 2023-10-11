import React from 'react'
import Home from '../pages/Admin/Home'
import Login from '../pages/Admin/Login'
import UserList from '../pages/Admin/Users'
import DoctorList from '../pages/Admin/Doctors'

import {Routes,Route} from 'react-router-dom'

function AdminRouters() {
  return (
    <>
    <Routes>
      <Route path='/' element={< Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/user-list' element={<UserList />} />
      <Route path='/doctor-list' element={<DoctorList />} />
      </Routes>
    </>
  )
}

export default AdminRouters
