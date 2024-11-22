import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <>
      <footer className='bg-black pt-[87.02px] px-[73.12px] pb-[107.49px]'>
        <div className="container">
          <div className="row flex justify-between">
            <div className="text">
                <h2 className='text-[29.25px] font-black font-poppins text-white tracking-[3%]'>FASHION</h2>
                <p className='w-[303.47px] text-[17.55px] font-normal font-roboto text-[#8E8E8E] leading-[29.3px] tracking-[2%] py-[23.4px]'>Complete your style with awesome clothes from us.</p>
                <div className="social flex gap-[10.24px]">
                <FaFacebookF className='w-[38.03px] h-[38.03px] bg-[#EBD96B] rounded-xl'/>
                <IoLogoInstagram className='w-[38.03px] h-[38.03px] bg-[#EBD96B] rounded-xl'/>
                <FaTwitter className='w-[38.03px] h-[38.03px] bg-[#EBD96B] rounded-xl'/>
                <FaLinkedinIn className='w-[38.03px] h-[38.03px] bg-[#EBD96B] rounded-xl'/>
                </div>
            </div>
            <div className="links flex gap-[137.48px]">
                <div>
                  <p className='text-[17.55px] font-normal font-roboto text-[#D9D9D9] leading-[29.3px] tracking-[2%] pb-[23.4px]'>Company</p>
                  <div className='flex flex-col gap-[23.4px]'>
                  <Link className='text-[17.55px] font-normal font-roboto text-[#8E8E8E] leading-[29.3px] tracking-[2%]'>About</Link>
                  <Link className='text-[17.55px] font-normal font-roboto text-[#8E8E8E] leading-[29.3px] tracking-[2%]'>Contact us</Link>
                  <Link className='text-[17.55px] font-normal font-roboto text-[#8E8E8E] leading-[29.3px] tracking-[2%]'>Support</Link>
                  <Link className='text-[17.55px] font-normal font-roboto text-[#8E8E8E] leading-[29.3px] tracking-[2%]'>Careers</Link>
                  </div>
                </div>
                <div>
                  <p className='text-[17.55px] font-normal font-roboto text-[#D9D9D9] leading-[29.3px] tracking-[2%] pb-[23.4px]'>Quick Link</p>
                  <div className='flex flex-col gap-[23.4px]'>
                  <Link className='text-[17.55px] font-normal font-roboto text-[#8E8E8E] leading-[29.3px] tracking-[2%]'>Share Location</Link>
                  <Link className='text-[17.55px] font-normal font-roboto text-[#8E8E8E] leading-[29.3px] tracking-[2%]'>Orders Tracking</Link>
                  <Link className='text-[17.55px] font-normal font-roboto text-[#8E8E8E] leading-[29.3px] tracking-[2%]'>Size Guide</Link>
                  <Link className='text-[17.55px] font-normal font-roboto text-[#8E8E8E] leading-[29.3px] tracking-[2%]'>FAQs</Link>
                  </div>
                </div>
                <div>
                  <p className='text-[17.55px] font-normal font-roboto text-[#D9D9D9] leading-[29.3px] tracking-[2%] pb-[23.4px]'>Legal</p>
                  <div className='flex flex-col gap-[23.4px]'>
                  <Link className='text-[17.55px] font-normal font-roboto text-[#8E8E8E] leading-[29.3px] tracking-[2%]'>Terms & conditions</Link>
                  <Link className='text-[17.55px] font-normal font-roboto text-[#8E8E8E] leading-[29.3px] tracking-[2%]'>Privacy Policy</Link>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
