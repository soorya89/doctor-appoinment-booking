import React from 'react'
import Header from '../components/User/Header/Header'
import Footer from '../components/User/Footer/Footer'
import Routers from '../routes/UserRouters'

const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Routers />
      </main>
      <Footer />
    </>
  )
}

export default Layout
