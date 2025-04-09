import React from 'react'
import { Link } from 'react-router-dom'

const Newsletters = () => {
  return (
    <div className='bg-[#1E2832] bg-opacity-5 xl:px-4 py-16'>
        <h2 className='title mb-8'>Follow products and discounts on Instagram</h2>

        {/* /insta grid */}
        <div className='flex flex-wrap gap-4 items-center justify-center mb-20'>
          <Link to='/'>
          <img src="/images/instagram/img2.png" alt="" />
          </Link>
          <Link>
          <img src="/images/instagram/img3.png" alt="" />
          </Link>
         <Link>
         <img src="/images/instagram/img4.png" alt="" />
         </Link>
         <Link>
         <img src="/images/instagram/img5.png" alt="" />
         </Link>
         <Link>
         <img src="/images/instagram/img6.png" alt="" />
         </Link>
          </div>`
    </div>
  
  )
}

export default Newsletters