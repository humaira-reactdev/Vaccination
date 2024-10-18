import React from 'react'
import './Banner.css'
import banimg from '../../assets/bannerimg.png'
import { LuClock } from "react-icons/lu";

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
          <div className="location">
            <i className="fas fa-map-marker-alt text-[#00B0FF]"></i>
            <div className='locationtext'>
              <p>Location</p>
              <p>Ikeja Lagos, Nigeria</p>
            </div>
            
          </div>
          <div className="date flex items-center space-x-2">
            <i className="fas fa-calendar text-[#00B0FF]"></i>
            <span>29 February, 2022</span>
          </div>
          <div className="vaccineType flex items-center space-x-2">
            <i className="fas fa-syringe text-[#00B0FF]"></i>
            <span>Mordena</span>
          </div>
          <button className="bg-[#00B0FF] text-white py-2 px-6 rounded-full">Submit</button>
        </div>
      </div>
    </section>
  )
}

export default Banner
