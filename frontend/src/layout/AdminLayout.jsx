import React from 'react'
import Header from '../components/Admin/Header/Header'
import Routers from '../routes/AdminRouters'

function AdminLayout() {
  return (
    <>
       <Header />
      <main>
        <Routers />
      </main>
    </>
  )
}

export default AdminLayout
