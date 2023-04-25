import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './header/Header'

const Layout = () => {
  return (
    <>
      <Header/>
      <main 
        className="container mx-auto"
      >
        <Outlet />
      </main>
    </>
    
  )
}

export default Layout
