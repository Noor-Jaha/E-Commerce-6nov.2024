import React, { useState } from 'react'
import { CiSearch } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = () => {

  const [isMenuOpen, setIsMenuOpen ] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const navItems =
  [
    {title: "Jewelry & Accesories", path: "/" },
    {title: "Clothing & Shoes", path: "/" },
    {title: "Home & living", path: "/" },
    {title: "wedding & Party", path: "/" },
    {title: "Toy  & Entertainment", path: "/" },
    {title: "Art & Collectibles", path: "/" },
    {title: "Craft Supplies & Tools", path: "/" },
  ]
  return (
   <header className='max-w-screen-2xl xl:px-28 px-4 '>
    <nav className='flex justify-between items-center container md:py-4 pt-6 pb-3'>
    <CiSearch className='text-black w-5 h-5 cursor-pointer hidden md:block'/>

    {/* logo */}
    <a href="/"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Proofpoint_R_Logo.png/800px-Proofpoint_R_Logo.png" alt="" /></a>

    {/* account and shopping btn */}
    <div className='text-lg text-black sm:flex itmes-center gap-4 hidden'>
      <a href="/" className='flex items-center gap-2'><CiUser/> Account</a>
      <a href="/" className='flex items-center gap-2'><CiShoppingCart/> Shopping</a>
    </div>

    {/* {navbar for sm devices} */}
     <div className='sm:hidden'>
      <button onClick={toggleMenu}>
        {
          isMenuOpen ? <FaTimes className='w-5 h-5 text-black'/> : <FaBars className='w-5 h-5 text-black'/>
        }
      </button>
     </div>
    </nav>

    <hr/>

    {/* {category items} */}
     <div className='pt-4'>
      <ul className='lg:flex items-center justify-between text-Black hidden'>
        {
          navItems.map(({title, path}) => (
            <li key={title} className='hover:text-orange-600'>
              <Link to='/'>{title}</Link>
            </li>

          ))
        }
      </ul>
     </div>

     {/* only mobile menu items */}
     <div>
     <ul className={`bg-black text-white px-4 py-2 rounded ${isMenuOpen ? '' : 'hidden'}`}>
        {
          navItems.map(({title, path}) => (
            <li key={title} className='hover:text-orange-600 my-3 cursor-pointer'>
              <Link to='/'>{title}</Link>
            </li>

          ))
        }
      </ul>
     </div>
   </header>
  )
}

export default Navbar;
