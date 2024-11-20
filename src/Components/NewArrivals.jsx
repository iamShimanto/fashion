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
              <p className='text-[23.4px] font-medium font-poppins text-[#191919] leading-[36.6px] tracking-[-4%]'>Hoodies & Sweetshirt</p>
              <Link>Explore Now!</Link>
              </div>
              <div>
              <img src="images/newarrivals2.png" alt="newarrivals" />
              </div>
              <div>
              <img src="images/newarrivals3.png" alt="newarrivals" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default NewArrivals
