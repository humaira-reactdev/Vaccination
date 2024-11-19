import React from 'react'
import './Banner.css'
import banimg from '../../assets/bannerimg.png'
import { LuClock } from "react-icons/lu";
import { GrLocation } from "react-icons/gr";
import { CiCalendar } from "react-icons/ci";
import { IoShieldOutline } from "react-icons/io5";

const Banner = () => {
  return (
    <section className="banner">
      <div className="container">
        <div className="bannerContent">
          {/* Text Section */}
          <div className="bannerText">
            <h5 className="vaccinated">Get Vaccinated. Boost your Immune System</h5>
            <h1 className="mainHeading">COVID-19 Vaccination Got Easier With, <span className="website">Vaccination.ng</span></h1>
            <p className="subheading">Vaccination.ng will help you find the nearest centre for vaccination, in all 36 states in Nigeria.</p>

            {/* Buttons */}
            <div className="buttonGroup">
              <button className="get">Get Vaccine</button>
              <button className="help">Help Centre</button>
            </div>

            {/* Schedule Section */}
            <div className="scheduleSection">
              <LuClock className='clock' />
              <span className='text'>Schedule your Vaccination</span>
            </div>
          </div>

          {/* Image Section */}
          <div className="bannerImg">
            <img src={banimg} alt="Vaccine" className="w-full h-auto"/>
          </div>
        </div>

        {/* Bottom Section with Location, Date, and Vaccine Info */}
        <div className="infoSection">
          {/* ====location==== */}
          <div className="location">
            <GrLocation className='locationicon' />
            <div className='locationtext'>
              <p className='headingLocation'>Location</p>
              <p>Ikeja Lagos, Nigeria</p>
            </div>            
          </div>
          {/* =========date============== */}
          <div className="date">
            <CiCalendar className='dateicon' />
            <div className='datetext'>
              <p className='headingDate'>Date</p>
              <p>29 February, 2022</p>
            </div>            
          </div>
          {/* ==========vaccine type======= */}
          <div className="vaccinetype">
            <IoShieldOutline  className='vaccineicon' />
            <div className='vaccinetext'>
              <p className='headingvaccine'>Vaccine type</p>
              <p>Moderna</p>
            </div>            
          </div>
          <button className="submit">Submit</button>          
        </div>        
      </div>
      <div className='vaccineNames flex items-center'>
            <div className='vaccineLogo container' >
                <img src="./images/moderna.png" alt="" />
                <img src="./images/pfizer.png" alt="" />
                <img src="./images/astrazeneca.png" alt=""/>
                <img src="./images/sinovac.png" alt="" />
            </div>
        </div>
    </section>
  )
}

export default Banner
