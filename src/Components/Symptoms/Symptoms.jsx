import React from 'react'
import './Symptoms.css'

const Symptoms = () => {
  return (
    <>
        <div className='symptoms'>
            <div className='container'>
              <p className='prevention'>Covid-19 Prevention</p>
              <h3 className='covid'><span>COVID-19</span> Symptoms</h3>
              <p className='description'>Adipiscing nec etiam tortor elit quisque. Arcu aliquet convallis aenean eu velit.
               Mi vestibulum, ullamcorper venenatis imperdiet augue arcu donec neque.</p>
            </div>
            <img src="./images/symptoms.png" alt="" className='symptomsimg' />
        </div>        
    </>
  )
}

export default Symptoms