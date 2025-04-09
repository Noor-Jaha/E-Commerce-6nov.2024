import React, { useEffect, useState } from 'react'
import { FaArrowAltCircleRight, FaStar } from 'react-icons/fa';
import { useParams } from 'react-router-dom'

const SinglePage = () => {
    const {id} = useParams();
    const [products, setProducts] = useState([])
    // console.log(id)


    
      useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch('/products.json');
            const data = await response.json();
            const product = data.filter((p) => p.id == id);
            console.log(product)
            setProducts(product[0])
          } catch (error) {
            console.log('Error fetching data:', error)
          }
        }
        fetchData();
        window.scrollTo({top: 0, behavior: 'smooth'})
      }, [id])

       const {category,title,price,image,status} = products;

  return (
    <div className='mt-28 max-w-screen-2xl container mx-auto xl:px-28 px-4'>
        <div className='p-3 max-w-7xl m-auto'>
          <div className='mt-5'>
            <a href="/" className='text-grey-600'>Home</a>
            <a href="/shop" className='font-bold text-black'> / Shop</a>
          </div>

            <div className='mt-2 sm:mt-10'>
                <div className='grid grid-cols-3 sm:grid-cols-2 gap-6 h-max'>
                    <div>
                        <img src={image} alt="" className='w-full' />
                    </div>
                    {/* product details */}
                    <div>
                        <h1 className='title'>{title}</h1>
                        <p className='mt-3 text-gray-600 text-base leading-6 text-justify '> Lorem ipsum dolor sit amet consectetur adipisicing elit. Et laboriosam sequi unde enim reprehenderit quo illo voluptates. Fugit, exercitationem tempore consequatur laboriosam debitis quia, nam ducimus molestiae doloremque qui aut?</p>
                        <span className='my-2 text-xl text-yellow-400 flex items-center gap-1 sm:my-4'>
                          <FaStar/>
                          <FaStar/>
                          <FaStar/>
                          <FaStar/>
                          <FaStar/>
                        </span>
                        <p className='text-xl text-red-500 font-semibold sm:text-2xl'>${price}</p>
                        <div>
                      <div className='text-left flex flex-col gap-2 w-full'>
                        <label className='font-semibold'>Quantity</label>
                        <input type="number" name='price' id='price' defaultValue={1} required className='border border-grey-300 text-sm font-semibold mb-1 max-w-full w-full outline-none rounded-md m-0 py-3 px-4 md:py-3 md:px-4 focus-red-500' />
                      </div>
                      <div className='w-full text-left my-4'>
                        <button className='flex justify-center items-center gap-2 w-full py-3 px-4 bg-red-500 text-white font-bold border border-red-500 rounded-md ease-in-out duration-150 shadow-slate-600 hover:bg-white hover:text-red-500 lg:m-0 md:px-6'><span>Confirmed order</span> <FaArrowAltCircleRight/></button>
                      </div>
                    </div>
                    </div>
                 
                </div>
            </div>

            <div className='text-black/75 mt-12'>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem assumenda iure animi dolorum voluptatem doloremque, vero cumque ut eveniet, similique non, vitae hic laudantium eaque. Consectetur aliquid laborum molestias blanditiis!</p>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem assumenda iure animi dolorum voluptatem doloremque, vero cumque ut eveniet, similique non, vitae hic laudantium eaque. Consectetur aliquid laborum molestias blanditiis!</p>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem assumenda iure animi dolorum voluptatem doloremque, vero cumque ut eveniet, similique non, vitae hic laudantium eaque. Consectetur aliquid laborum molestias blanditiis!</p>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem assumenda iure animi dolorum voluptatem doloremque, vero cumque ut eveniet, similique non, vitae hic laudantium eaque. Consectetur aliquid laborum molestias blanditiis!</p>
            </div>
        </div> 
    </div>
  )
}

export default SinglePage 