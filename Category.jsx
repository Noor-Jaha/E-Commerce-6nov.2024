import React from 'react'
import { Link } from 'react-router-dom'
  
  
  

const Category = () => {
  return (
   <>
     <div className='max-w-screen-2xl mx-auto container xl-:px-28 px-4 py-28'>
    {/* brand logo */}
      <div className='flex items-center justify-around flex-wrap gap-4 py-5'>
       <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLzrFVKMLzTYWWhjinkrWW4Rjx7plimGPQKw&s" alt="" />
       <img src="https://res.cloudinary.com/zenbusiness/q_auto/v1/logaster/logaster-2020-08-t-dior-logo-2.jpg" alt="" />
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK179podhYqfUA2AE8yvdH5G-HfghyGDQQ3Q&s" alt="" />
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeSd9D4G9Qwyro0sv2BDtPI3Ld9qPVvkPUdFUZCag9vYv1Ou0uY2c4itIQ1BLdPb8xFVk&usqp=CAU" alt="" />
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTflFskAyP1YyB6YPgq019LhVOh5Uaq0_smQQ&s" alt="" />
      </div>
  
      {/* category grid */}
       <div className='mt-8 flex flex-col md:flex-row items-center gap-4'>
       <p className='font-semibold uppercase md:-rotate-90 text-center bg-black text-white md:p-1.5 p-2 rounded-sm inline-flex'>Explore new and popular styles</p>
       <div>
         <Link to="/"><img src="https://media.phase-eight.com/image/upload/f_auto,q_auto,dpr_auto/w_600/p8-catalog/images/222499060/222499060-01-deniz-one-shoulder-jacquard-maxi-dress?_i=AG" className='w-full hover:scale-105 transition-all duration-200' alt="" /></Link>
       </div>
       <div className='md:w-1/2'>
         <div className='grid grid-cols-2 gap-2'>
         <Link to="/"><img src="https://images.bestsellerclothing.in/data/only/26-mar-2024/215191801_g0.jpg?width=1080&height=1355&mode=fill&fill=blur&format=auto" className='w-full hover:scale-105 transition-all duration-200' alt="" /> </Link>  
         <Link to="/"><img src="https://content-us-5.content-cms.com/af9094ac-4ec2-4ea9-8480-e7ef2c8369de/dxresources/cf40/cf402377-8e09-4464-99ed-aa26483ab469.jpg?resize=267px%3A344px&crop=258%3A344%3B4%2C0&output-format=webp?w=640&q=75" className='w-full hover:scale-105 transition-all duration-200' alt="" /></Link>
         <Link to="/"><img src=" https://img.abercrombie.com/is/image/anf/KIC_159-5500-00445-340_model1?policy=product-medium" className='w-full hover:scale-105 transition-all duration-200' alt="" /></Link>
         <Link to="/"><img src=" https://images.bestsellerclothing.in/data/only/26-mar-2024/215191801_g6.jpg?width=1080&height=1355&mode=fill&fill=blur&format=auto" className='w-full hover:scale-105 transition-all duration-200' alt="" /></Link>
         </div>
       </div>
       </div>
    </div>
   </>


 
 
  )
}

export default Category