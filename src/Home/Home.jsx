import React from 'react'
import Navbar from '../Navbar/Navbar'
import Banner from '../Components/Banner'
import Brands from '../Components/Brands'
import NewArrivals from '../Components/NewArrivals'
import Payday from '../Components/Payday'

const Home = () => {
  return (
    <>
      <Navbar/>
      <Banner/>
      <Brands/>
      <NewArrivals/>
      <Payday/>
    </>
  )
}

export default Home
