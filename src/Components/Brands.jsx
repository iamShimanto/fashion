import React from 'react'
import { Link } from 'react-router-dom'

const Brands = () => {
  return (
    <>
      <section className='pt-[46.07px]'>
        <div className="container">
          <div className="row flex justify-between px-[52px] py-[42px] items-center bg-[#EBD96B] rounded-xl">
            <Link><img className='h-[51.68px] border-[1px] border-black rounded-[10px] ' src="images/brand1.png" alt="brand" /></Link>
            <Link><img className='h-[51.68px] border-[1px] border-black rounded-[10px] ' src="images/brand2.png" alt="brand" /></Link>
            <Link><img className='h-[51.68px] border-[1px] border-black rounded-[10px] ' src="images/brand3.png" alt="brand" /></Link>
            <Link><img className='h-[51.68px] border-[1px] border-black rounded-[10px] ' src="images/brand4.png" alt="brand" /></Link>
            <Link><img className='h-[51.68px] border-[1px] border-black rounded-[10px] ' src="images/brand5.png" alt="brand" /></Link>
            <Link><img className='h-[51.68px] border-[1px] border-black rounded-[10px] ' src="images/brand6.png" alt="brand" /></Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default Brands
