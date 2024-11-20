import React from 'react'
import Banner from '../Components/Banner/Banner'
import ResponsiveBanner from '../Components/ResponsiveBanner/ResponsiveBanner'
import DatabaseForm from '../Components/DatabaseForm/DatabaseForm'

const Home = () => {
  return (
    <>
      <Banner/>
      <ResponsiveBanner/>
      <DatabaseForm/>
    </>
  )
}

export default Home