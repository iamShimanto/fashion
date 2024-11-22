import React from 'react'
import { Link } from 'react-router-dom'

const YoungsFav = () => {
  return (
    <>
      <section className='mt-[139px]'>
        <div className="container">
          <div className="row">
            <img src="images/young-fav-logo.png" alt="young-fav" />
            <div className='flex justify-between mt-[76px]'>
                <div>
                  <img className='w-[739px]' src="images/young-fav-one.png" alt="young-fav" />
                  <p className='text-[23.4px] font-medium font-poppins text-black leading-[36.6px] tracking-[-4%] mt-[20.47px]'>Trending on instagram</p>
                    <Link className='text-[17.55px] font-medium font-poppins text-[#7F7F7F] leading-[36.6px] tracking-[-4%] '>Explore Now!</Link>
                </div>
                <div>
                  <img className='w-[739px]' src="images/young-fav-two.png" alt="young-fav" />
                  <p className='text-[23.4px] font-medium font-poppins text-black leading-[36.6px] tracking-[-4%] mt-[20.47px]'>All Under $40</p>
                  <Link className='text-[17.55px] font-medium font-poppins text-[#7F7F7F] leading-[36.6px] tracking-[-4%] '>Explore Now!</Link>
                </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default YoungsFav
