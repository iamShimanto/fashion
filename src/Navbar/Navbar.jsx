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
              <ul>
                <li><Link>CATALOGUE</Link></li>
                <li><Link>FASHION</Link></li>
                <li><Link>FAVOURITE</Link></li>
                <li><Link>LIFESTYLE</Link></li>
                <li><Link>SIGN UP</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
