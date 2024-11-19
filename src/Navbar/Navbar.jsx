import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <nav>
        <div className="container">
          <div className="row flex justify-between items-center">
            <div className="logo">
              <img className='w-[236px] h-[60px]' src="images/BrandLogo.png" alt="Logo" />
            </div>
            <div className="nav-links">
              <ul className='flex gap-[47.53px] items-center'>
                <li className='text-base font-medium font-poppins text-242323 tracking-[1%] hover:bg-000 hover:text-fefefe duration-[0.4s] pt-[9.51px] pb-[12.43px] px-[16.09px] rounded-[5.2px]'><Link>CATALOGUE</Link></li>
                <li className='text-base font-medium font-poppins text-242323 tracking-[1%] hover:bg-000 hover:text-fefefe duration-[0.4s] pt-[9.51px] pb-[12.43px] px-[16.09px] rounded-[5.2px]'><Link>FASHION</Link></li>
                <li className='text-base font-medium font-poppins text-242323 tracking-[1%] hover:bg-000 hover:text-fefefe duration-[0.4s] pt-[9.51px] pb-[12.43px] px-[16.09px] rounded-[5.2px]'><Link>FAVOURITE</Link></li>
                <li className='text-base font-medium font-poppins text-242323 tracking-[1%] hover:bg-000 hover:text-fefefe duration-[0.4s] pt-[9.51px] pb-[12.43px] px-[16.09px] rounded-[5.2px]'><Link>LIFESTYLE</Link></li>
                <li className='w-[98px] h-[45.34px] bg-000 text-[17.55px] font-medium font-poppins text-fefefe tracking-[-3%] rounded-[5.2px] flex items-center justify-center hover:bg-[#A594F9] hover:text-000 duration-[0.4s]'><Link>SIGN UP</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
