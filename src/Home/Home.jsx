import React from 'react'
import Navbar from '../Navbar/Navbar'
import Banner from '../Components/Banner'
import Brands from '../Components/Brands'
import NewArrivals from '../Components/NewArrivals'

const Home = () => {
  return (
    <>
      <Navbar/>
      <Banner/>
      <Brands/>
      <NewArrivals/>
    </>
  )
}

export default Home
