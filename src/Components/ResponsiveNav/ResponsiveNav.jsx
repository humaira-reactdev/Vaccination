import React, { useState } from 'react'
import logo from '../../assets/logo.png'
import './ResponsiveNav.css'
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { MdCancel } from "react-icons/md";
import { Link } from 'react-router-dom';

const ResponsiveNav = () => {
  // ========state part==========//
  const [show,setShow]=useState(false)

  return (
    <nav className='resMenu'>
        <div className="container">
          <div className="resmenu_row">              
              <div className="resMenuLogo"><img src={logo} alt="" /></div>
              <div className='resmenu_sidebar'>
                <HiOutlineMenuAlt3 onClick={()=>setShow(!show)} className='menuIcon'/>               
              </div>
              {
                show&&
                <div className='slideMenu'>
                  <MdCancel onClick={()=>setShow(!show)} className='cancel'/>
                  <ul>
                    <li><Link to={''}>Home</Link></li>
                    <li><Link to={''}>Services</Link></li>
                    <li><Link to={''}>Schedule</Link></li>
                    <li><Link to={''}>Contact Us</Link></li>
                  </ul>
                </div>
              }             
          </div>                 
        </div>
    </nav>
  )
}

export default ResponsiveNav