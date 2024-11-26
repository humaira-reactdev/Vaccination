import React from 'react'
import './VaccineRegistration.css'

const VaccineRegistration = () => {
  return (
    <>
     <div className='registration'>
      <div className='container flex'>
        <div className='form'>
          <h3>Get your vaccine registration today</h3>
          <label htmlFor="" className='labelName'>Patient's Full Name</label><br />
          <input type="text" className='nameInput' placeholder='Full name' />
          <label htmlFor="" className='labelPhone'>Mobile Number</label>
          <p className='notifications'>Notifications for appointment and reminders will be sent to this 
          provided number</p>          
          <div className='phoneInput'>
            <input type="text" className='phoneNumber' placeholder='Phone number'/>
            <button className='verify'>Verify</button>
          </div> 
          <button className='phoneSubmit'>Submit</button>
          <div className='formFooter'>
            <p className='alreadyRegistered'>Already registered?</p>
            <p className='status'>Check your status</p>
          </div>           
        </div>        
        <div className='image'>
        </div>
      </div>
     </div>    
    </>
  )
}

export default VaccineRegistration