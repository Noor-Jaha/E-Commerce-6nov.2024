import React from 'react'

const Collection = () => {
  return (
    <div className='bg-[url("/images/collection-bg.png")] bg-cover bg-center bg-no-repeat xl:px-28 px-4 my-28'>
      <div className='h-[580px] flex justify-between md:flex-row items-center'>
        <div className='md:w-1/2'></div>
        <div className='md:w-1/2'>
        <img src="/public/images/zara-logo.png" alt="" />
        <p className='text-lg text-white capitalize my-8 md:w-2/3 leading-[30px] '>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem ullam debitis eaque exercitationem magni accusamus neque quia accusantium! Mollitia laborum odio accusamus nostrum, dolor doloribus amet alias iure optio provident?
        </p>
        <button className='px-6 py-2 bg-white text-black rounded-sm font-semibold'>See Collection</button>
        </div>
      </div>
    </div>
  )
}

export default Collection  