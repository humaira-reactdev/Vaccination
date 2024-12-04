import React from 'react'
import './Feedback.css'

const Feedback = () => {
  return (
    <>
        <div className='feedback'>
            <div className="container">
                <h3>FEEDBACK</h3> 
                <h2>What our Patients Think</h2>
                <p className='description'>Adipiscing nec etiam tortor elit quisque. Arcu aliquet convallis aenean eu velit.
                Mi vestibulum, ullamcorper venenatis imperdiet augue arcu donec neque.</p>  
                <div className="feedbackCards">
                    <div className='card1'>
                      <div className='picname'>
                        <img src="./images/feed1.png" alt="" className='w-[70px] h-[70px] radius-[20px]'/>
                        <div className="nameplace">
                          <p className='name'>Oyindamola Maja</p>
                          <p className='location'>Badagry, Lagos</p>
                        </div>                        
                      </div> 
                      <p className='testimony'>“Been stressing about a close centre
                      to get the <span>covid-19</span> vaccine, until
                      i tried Vaccination.ng”</p>                      
                    </div>
                    <div className='card2'> 
                    <div className='picname'>
                        <img src="./images/feed2.png" alt="" className='w-[70px] h-[70px] radius-[20px]'/>
                        <div className="nameplace">
                          <p className='name2'>Okeowo Lekan</p>
                          <p className='location2'>Ikeja, Lagos</p>
                        </div>                        
                      </div> 
                      <p className='testimony2'>“Got my vaccine very close to my house.
                        Was very easy scheduling
                        an appointment.”</p>                            
                    </div>
                    <div className='card3'>
                      <div className='picname'>
                        <img src="./images/feed3.png" alt="" className='w-[70px] h-[70px] radius-[20px]'/>
                        <div className="nameplace">
                          <p className='name'>Obanikoro, Lagos</p>
                          <p className='location'>Ikeja, Lagos</p>
                        </div>                        
                      </div> 
                      <p className='testimony'>“Been stressing about a close centre
                      to get the <span>covid-19</span> vaccine, until
                      i tried Vaccination.ng”</p>                             
                    </div>
                </div>            
            </div>
        </div>
    </>
  )
}

export default Feedback