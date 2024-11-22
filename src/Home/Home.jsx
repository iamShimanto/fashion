import React from 'react'
import Navbar from '../Navbar/Navbar'
import Banner from '../Components/Banner'
import Brands from '../Components/Brands'
import NewArrivals from '../Components/NewArrivals'
import Payday from '../Components/Payday'
import YoungsFav from '../Components/YoungsFav'
import Download from '../Components/Download'
import Email from '../Components/Email'

const Home = () => {
  return (
    <>
      <Navbar/>
      <Banner/>
      <Brands/>
      <NewArrivals/>
      <Payday/>
      <YoungsFav/>
      <Download/>
      <Email/>
    </>
  )
}

export default Home
