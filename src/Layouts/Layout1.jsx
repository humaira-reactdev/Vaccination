import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import ResponsiveNav from '../Components/ResponsiveNav/ResponsiveNav'

const Layout1 = () => {
  return (
    <>
        <Navbar/>
        <ResponsiveNav/>        
        <Outlet/>

    </>
  )
}

export default Layout1