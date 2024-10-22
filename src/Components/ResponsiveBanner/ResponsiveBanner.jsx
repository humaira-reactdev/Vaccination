import React from 'react'
import './ResponsiveBanner.css'
import banimg from '../../assets/bannerimg.png'
import { LuClock } from "react-icons/lu";
import { GrLocation } from "react-icons/gr";
import { CiCalendar } from "react-icons/ci";
import { IoShieldOutline } from "react-icons/io5";

const ResponsiveBanner = () => {
  return (
    <section className="bannerRes">
      <div className="container">
        <div className="bannerContentRes">
          {/* Text Section */}
          <div className="bannerTextRes">
            <h5 className="vaccinatedRes">Get Vaccinated. Boost your Immune System</h5>
            <h1 className="mainHeadingRes">COVID-19 Vaccination Got Easier With, <span className="websiteRes">Vaccination.ng</span></h1>
            <p className="subheadingRes">Vaccination.ng will help you find the nearest centre for vaccination, in all 36 states in Nigeria.</p>

            {/* Buttons */}
            <div className="buttonGroupRes">
              <button className="getRes">Get Vaccine</button>
              <button className="helpRes">Help Centre</button>
            </div>
            {/* Image Section */}
          <div className="bannerImgRes">
            <img src={banimg} alt="Vaccine" className="w-full h-auto"/>
          </div>

            {/* Schedule Section */}
            <div className="scheduleSectionRes">
              <LuClock className='clock' />
              <span className='text'>Schedule your Vaccination</span>
            </div>
          </div>          
        </div>

        {/* Bottom Section with Location, Date, and Vaccine Info */}
        <div className="infoSectionRes">
          {/* ====location==== */}
          <div className="locationRes">
            <GrLocation className='locationicon' />
            <div className='locationtextRes'>
              <p className='headingLocationRes'>Location</p>
              <p>Ikeja Lagos, Nigeria</p>
            </div>            
          </div>
          {/* =========date============== */}
          <div className="dateRes">
            <CiCalendar className='dateicon' />
            <div className='datetextRes'>
              <p className='headingDateRes'>Date</p>
              <p>29 February, 2022</p>
            </div>            
          </div>
          {/* ==========vaccine type======= */}
          <div className="vaccinetypeRes">
            <IoShieldOutline  className='vaccineicon' />
            <div className='vaccinetextRes'>
              <p className='headingvaccineRes'>Vaccine type</p>
              <p>Moderna</p>
            </div>            
          </div>

          <button className="submitRes">Submit</button>
        </div>
      </div>
    </section>
  )
}

export default ResponsiveBanner