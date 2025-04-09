import React from 'react'
import { FaShoppingBag } from 'react-icons/fa';
import { MdOutlineShoppingBag } from "react-icons/md";

const Banner = () => {
  return (
    <div className='bg-primaryBG py-12 xl:px-28 '>
        <div className='py-28 flex flex-col md:flex-row-reverse justify-between items-center gap-14'>
          {/* img */}
          <div className='md:w-1/2'>
                <img src="https://img.freepik.com/free-photo/top-view-black-friday-sales-assortment-with-copy-space_23-2148665597.jpg" alt="" />
            </div>

            <div className='md:w-1/2'>
                 <h1 className='text-5xl font-light mb-5'>Collections</h1>
                 <p className='text-xl mb-7'>you can explore any shop many different collection from various brands here.</p>
                 <button className='bg-black hover:bg-orange-600 px-6 py2 text-white font-semibold rounded-sm flex items-center gap-2 '><FaShoppingBag className='inline-flex'/>Shop now</button>
            </div>
           
        </div>
    </div>
  )

}

export default Banner