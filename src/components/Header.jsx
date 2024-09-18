import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import DiamondIcon from '@mui/icons-material/Diamond';

function Header() {

    
  return (
    <header className='flex justify-between py-5 px-14 '>
        
            <div className=' text-2xl text-emerald-500 font-bold '>
                <h1><DiamondIcon/> <span className=' '>DimondCreate</span></h1>

            </div>
            <div className='border border-3 border-gray-600 p-2 rounded-3xl shadow-md'>
                <ul className='flex text-white gap-8 px-4'>
                    <NavLink to='/'   className={({ isActive }) => 
              isActive ? 'text-[#a21ba4]' : 'text-white'}><li className=' hover:text-[#a21ba4]'>Home</li></NavLink>
                    <NavLink  to='/services'  className={({ isActive }) => 
              isActive ? 'text-[#a21ba4]' : 'text-white'}><li className=' hover:text-[#a21ba4]'>Services</li></NavLink>
                    <NavLink to='about-us'  className={({ isActive }) => 
              isActive ? 'text-[#a21ba4]' : 'text-white'}><li className=' hover:text-[#a21ba4]'>About Us</li></NavLink>
                    <NavLink to='contact-us'  className={({ isActive }) => 
              isActive ? 'text-[#a21ba4]' : 'text-white'}><li  className=' hover:text-[#a21ba4]'>Contact Us</li></NavLink>
                </ul>
            </div>

           <div className='flex gap-3'>
           <div>
                <div className='border rounded-full px-2 border-white text-white'>R</div>
            </div>
            <div>
                <button className='border-none p-2 rounded-md  text-white bg-[#ad19af]'>Sign In</button>
            </div>
           </div>
           

    
        
    </header>
  )
}

export default Header