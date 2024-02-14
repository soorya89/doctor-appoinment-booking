import React from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Routers from '../routes/Routers'

const Layout = () => {
  return (
    <div>
      <Header/>
      <Routers/>
      <Footer/>
    </div>
  )
}

export default Layout
