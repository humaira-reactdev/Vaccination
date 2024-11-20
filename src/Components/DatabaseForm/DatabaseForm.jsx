import React from 'react'
import './DatabaseForm.css'

const DatabaseForm = () => {
  return (
    <>
    <div className='databaseform'>
      <div className='container'>
          <div className='heading'>
              <h2>Check your COVID-19 result on our Database</h2>
          </div>
          {/* Form Section */}
          <div className='form'>
            <div className="inputFields">
              <input
                type='text'
                placeholder='Name'
                className='input-field'
              />
              <input
                type='text'
                placeholder='NIK Number'
                className='input-field'
              />
              <button className='btn-check'>
                Check
              </button>
            </div> 
            {/* Footer Section */}
           <div className='footer'>
            <p>
              Need a certificate for your COVID-19 result? Please click{' '}
              <a href='#' className='footer-link'>
                 here
              </a>
            </p>
          </div>                 
          </div>                     
        </div>
      </div>
    </>
  );
};

export default DatabaseForm;