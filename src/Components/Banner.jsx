import React from 'react'
import { Link } from 'react-router-dom'

const Banner = () => {
  return (
    <>
      <section className=' bg-[#F4F6F5] rounded-[43.14px] pt-[49.72px] px-[60px] '>
        <div className="container">
          <div className="row flex gap-[31px]">
            <div className="text text-start pb-[65.81px]">
                <div className='w-[339.84px] h-[82px] bg-white rotate-[-2deg] '>
                  <p className='text-[70.2px] font-poppins font-black leading-[87.8px] pl-[27px] rotate-2'>LET’S</p>
                </div>
                <p className='text-[70.2px] font-poppins font-black leading-[87.8px]  pl-[27px]'>EXPLORE</p>
                <div className='w-[420.84px] h-[86px] bg-[#EBD96B] rotate-[-2deg] pl-[9px]'>
                  <p className='text-[70.2px] font-poppins font-black leading-[87.8px] pl-[18.63px] rotate-2'>UNIQUE</p>
                </div>
                <p className='text-[70.2px] font-poppins font-black leading-[87.8px]  pl-[27px]'>CLOTHES.</p>
                <p className='text-[23.14px] font-normal font-poppins text-[#191818] tracking-[-5%] mt-[29.25px] ml-[27px]'>Live for Influential and Innovative fashion!</p>
                <div className='w-[161.61px] h-[60px] py-[13.50px] px-[29.20px] bg-black rounded-[7.31px] ml-[27px] mt-[23.14px] '>
                  <Link className='text-[22px] font-poppins font-medium text-white tracking-[-5%]'>Shop Now</Link>
                </div>
            </div>
            <div className="img">
                <img className='' src="images/bannerimg.png" alt="banner" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Banner
