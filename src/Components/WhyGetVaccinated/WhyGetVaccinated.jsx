import React from 'react'
import './WhyGetVaccinated.css'
import { LuShield } from "react-icons/lu";
import { FaArrowRight } from "react-icons/fa6";
import { GoPeople } from "react-icons/go";
import { FiThermometer } from "react-icons/fi";

const WhyGetVaccinated = () => {
  return (
    <>
    <div className='why'>
        <div className="container">
            <div className="text">
                <h2 className='vaccinatedHeading'>Why get vaccinated today?</h2>
                <p className='textVaccinated'>Magna adipiscing at elit at ornare lectus nibh lorem. 
                Ac, sed ac lorem pellentesque vestibulum risus matti. 
                In molestie condimentum malesuada non.</p>
            </div>       
            <div className='cards'>
                <div className='immune'>
                  <div className='shieldbg'>
                    <LuShield className='shieldIcon'/>                    
                  </div>
                  <h3 className='immuneHeading'>Protects your immune 
                    system against viruses</h3>
                  <p className='immuneText'>Velit ut consectetur mauris, orci amet, faucibus. 
                    Sit turpis fringilla ipsum pretium,
                    dictum. Dolor eget vel nulla lorem ac.
                    </p>
                    <div className='readMore'>
                      <h3>Read More</h3>
                      <FaArrowRight />
                    </div>                       
                </div>
                <div className='minimize'>
                  <div className='peoplebg'>
                    <GoPeople className='peopleicon'/>
                  </div>
                  <h3 className='minimizeheading'>Minimize the spread
                  of the Virus</h3> 
                  <div className='readMore'>
                    <h3>Read More</h3>
                    <FaArrowRight />
                  </div>          
                </div>
                <div className='protect'>
                <div className='protectbg'>
                    <FiThermometer className='protecticon'/>
                  </div>
                  <h3 className='protectheading'>Protect yourself</h3> 
                  <div className='readMore'>
                    <h3>Read More</h3>
                    <FaArrowRight />
                </div>

                </div>
            </div>     
        </div>
    </div>
    </>
  )
}

export default WhyGetVaccinated