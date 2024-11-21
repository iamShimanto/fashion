import React from 'react'
import { Link } from 'react-router-dom'

const Download = () => {
  return (
    <>
      <section className='mt-[145px]'>
        <div className="container">
          <div className="row flex justify-between">
            <div className="text pl-[87.02px] pt-[132.36px]">
              <h2 className='w-[388px] text-[35px] font-black font-poppins text-black leading-[150%] tracking-[6%] text-start'>DOWNLOAD APP &
              GET THE VOUCHER!</h2>
              <p className='w-[306.39px] text-start text-[17.55px] font-medium font-poppins text-[#7C7C7C] leading-[25.6px] tracking-[-4%] mt-[29.98px] mb-[47.53px]'>Get 30% off for first transaction using
              Rondovision mobile app for now.</p>
              <div className='flex gap-[13.98px]'>
                <Link><img src="images/apple.png" alt="apple" /></Link>
                <Link><img src="images/android.png" alt="android" /></Link>
              </div>
            </div>
            <div className="img pr-[158.32px]">
              <img src="images/mobileapp.png" alt="mobileapp" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Download
