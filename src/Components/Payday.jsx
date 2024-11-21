import React from 'react'
import { Link } from 'react-router-dom'

const Payday = () => {
  return (
    <>
      <section className='bg-[#E3C743] rounded-[10px]'>
        <div className="container">
          <div className="row flex justify-between">
              <div className="img">
                <img className='h-full' src="images/payday.png" alt="payday" />
              </div>
              <div className="text mt-[93.69px] mr-[145.82px]">
                <div className='w-[395.92px] h-[95.34px] bg-white rotate-[-2deg] pl-4'>
                  <p className='text-[65.61px] font-black font-poppins text-black leading-[100.3px] text-start '>PAYDAY</p>
                </div>
                <h2 className='text-[65.61px] font-black font-poppins text-black leading-[100.3px} text-start pl-4'>SALE NOW</h2>
                <p className='text-[26.35px] font-medium font-poppins text-[#231300] leading-[36.3px] tracking-[-2%] w-[470.26px] text-start mt-[24.29px] mb-[29.75px] pl-4'>Spend minimal $100 get 30% off
                voucher code for your next purchase</p>
                <p className='text-[26.35px] font-bold font-poppins text-black leading-[38.3px] tracking-[2%] mt-[29.75px]  text-start pl-4'>1 June - 10 June 2021</p>
                <p className='text-[26.35[px] font-normal font-poppins text-black leading-[38.3px] tracking-[-2%] text-start pl-4'>*Terms & Conditions apply</p>
                <div className='w-[194.24px] h-[69.72px] bg-black text-white ml-4 py-[24px] px-[37.48px] rounded-[5.95px] font-semibold font-poppins text-xl tracking-[2%]'>
                  <Link>SHOP NOW</Link>
                </div>
              </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Payday
