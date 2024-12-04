import React from 'react'
import Banner from '../Components/Banner/Banner'
import ResponsiveBanner from '../Components/ResponsiveBanner/ResponsiveBanner'
import DatabaseForm from '../Components/DatabaseForm/DatabaseForm'
import WhyGetVaccinated from '../Components/WhyGetVaccinated/WhyGetVaccinated'
import VaccineRegistration from '../Components/VaccineRegistration/VaccineRegistration'
import Symptoms from '../Components/Symptoms/Symptoms'
import Feedback from '../Components/Feedback/Feedback'

const Home = () => {
  return (
    <>
      <Banner/>
      <ResponsiveBanner/>
      <DatabaseForm/>
      <WhyGetVaccinated/>
      <VaccineRegistration/>
      <Symptoms/>
      <Feedback/>
    </>
  )
}

export default Home