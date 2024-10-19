import React from 'react'
import {Link} from 'react-router-dom'
import Logo from './Logo';
import { FaSearch } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import { GrCart } from "react-icons/gr";

const Header = () => {
  return (
    <div className=' h-16 shadow-md '>
        <div className='container mx-auto flex items-center justify-between px-8'>
            <div>
                <Link to={"/"}>
                 <Logo w={130} h={70}/>
                </Link>
            </div>

            <div className=' hidden md:flex items-center w-full justify-between max-w-sm outline outline-1 outline-slate-400 rounded-full focus-within:shadow-md pl-4 '>
                
                <input className='w-full outline-none bg-transparent' type='text' placeholder='Search product here ...'/>
                <div className='text-lg min-w-[50px] h-8 bg-pink-400 flex items-center justify-center rounded-r-full text-white'>
                    <FaSearch/>
                </div>
            </div>

            <div className='flex items-center gap-6'>

                <div className='text-3xl cursor-pointer relative flex justify-center'>
                    <FiUser/>
                </div>

                <div className='relative text-3xl cursor-pointer'>
                    <span>
                     <GrCart/>
                    </span>
                    <div className='bg-pink-400 text-white w-5 h-5 rounded-full p-1 flex items-center justify-center absolute -top-1 -right-1'>
                        <p className='text-sm'>0</p> 
                    </div>
                </div>

                <div>
                    <Link to={"/login"}  className='px-3 py-1 rounded-full text-white bg-pink-400 hover:bg-pink-600'>
                        Login
                    </Link> 
                </div>
            </div>

        </div>
      
    </div>
  )
}

export default Header
