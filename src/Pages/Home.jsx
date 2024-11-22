import React from 'react'
import Banner from '../Components/Banner/Banner'
import ResponsiveBanner from '../Components/ResponsiveBanner/ResponsiveBanner'
import DatabaseForm from '../Components/DatabaseForm/DatabaseForm'
import WhyGetVaccinated from '../Components/WhyGetVaccinated/WhyGetVaccinated'

const Home = () => {
  return (
    <>
      <Banner/>
      <ResponsiveBanner/>
      <DatabaseForm/>
      <WhyGetVaccinated/>
    </>
  )
}

export default Home