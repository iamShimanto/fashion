import React from 'react'
import { Link } from 'react-router-dom'

const NewArrivals = () => {
  return (
    <>
      <section className='mt-[50.46px]'>
        <div className="container">
          <div className="row">
            <img src="images/newarrivals.png" alt="new arrivals" />
            <div className='flex justify-between mt-[93.09px]'>
              <div>
              <img src="images/newarrivals1.png" alt="newarrivals" />
              <p className='text-[23.4px] font-medium font-poppins text-[#191919] leading-[36.6px] tracking-[-4%] mt-[20.47px]'>Hoodies & Sweetshirt</p>
              <Link className='text-[17.55px] font-medium font-poppins text-[#7F7F7F] leading-[36.6px] tracking-[-4%] '>Explore Now!</Link>
              </div>
              <div>
              <img src="images/newarrivals2.png" alt="newarrivals" />
              <p className='text-[23.4px] font-medium font-poppins text-[#191919] leading-[36.6px] tracking-[-4%] mt-[20.47px]'>Coats & Parkas</p>
              <Link className='text-[17.55px] font-medium font-poppins text-[#7F7F7F] leading-[36.6px] tracking-[-4%] '>Explore Now!</Link>
              </div>
              <div>
              <img src="images/newarrivals3.png" alt="newarrivals" />
              <p className='text-[23.4px] font-medium font-poppins text-[#191919] leading-[36.6px] tracking-[-4%] mt-[20.47px]'>Tees & T-Shirt</p>
              <Link className='text-[17.55px] font-medium font-poppins text-[#7F7F7F] leading-[36.6px] tracking-[-4%] '>Explore Now!</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default NewArrivals
