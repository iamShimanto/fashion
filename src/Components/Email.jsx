import React from 'react'

const Email = () => {
  return (
    <>
      <section className='bg-[#E5C643] pt-[103.11px] pb-[114.07px] '>
        <div className="container">
          <div className="row flex flex-col items-center">
              <h2 className='w-[732.39px] text-[40.22px] font-black font-poppins text-white leading-[51.2px] tracking-[3%] text-center'>JOIN SHOPPING COMMUNITY TO GET MONTHLY PROMO</h2>
              <p className='text-[23.4px] font-normal font-poppins text-[#FFFCF8] leading-[25.6px] tracking-[3%] pt-[27.06px] pb-[35.83px]'>Type your email down below and be young wild generation</p>
              <div className='w-[419.74px] h-[63.62px] bg-white rounded-[7.31px] flex justify-between py-[7.31px] pr-[7.31px] '>
                <input className='pl-[19.74px] w-full outline-none text-[17.55px] font-normal font-poppins text-[#767676] leading-[25.6px] tracking-[3%]' type="email" placeholder='Add your email here' />
                <button className='pt-[12.43px] pr-[25.59px] pb-[10.56px] pl-[27.79px] bg-black text-white rounded-[5.85px] text-[24.13px] font-medium font-poppins leading-[25.6px] tracking-[3%]'>SEND</button>
              </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Email
