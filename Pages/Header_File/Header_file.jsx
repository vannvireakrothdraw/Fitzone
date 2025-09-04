import React, { useState } from 'react'
import { NavLink, Outlet } from 'react-router'

function Header_file() {
  const [isShow,setIsShow] = useState(false)
  return (
    <div>
      <nav className='bg-white border-gray-200 dark:bg-gray-900'>
        <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
          <div className='lg:hidden'>
           <button  onClick={()=>setIsShow(!isShow)}>
           <i class="bi bi-list"></i>
           </button>
         </div>
          <NavLink to="/" className="flex items-center space-x-3 rtl:space-x-reverse mx-auto w-1/2">
          <img className='h-8' src='' alt='' />
          <span className='self-center text-2xl font-semibold whitespace-nowrap dark:text-white'>Flowbite</span>
          </NavLink>
        <div className={`${isShow ? 'show' : 'hidden'} w-full lg:flex lg:w-auto lg:order-1`} >
          <ul className='flex flex-col p-4 lg:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 lg:space-x-8 rtl:space-x-reverse lg:flex-row lg:mt-0 lg:border-0 lg:bg-white dark:bg-gray-800 lg:dark:bg-gray-900 dark:border-gray-700'>
            <li>
              <NavLink to="/fit_center" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 lg:hover:bg-transparent lg:hover:text-blue-700 lg:p-0 lg:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Fit Center</NavLink>
            </li>
            <li>
              <NavLink to="/fit_parther" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 lg:hover:bg-transparent lg:hover:text-blue-700 lg:p-0 lg:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Fit Parther</NavLink>
            </li>
            <li>
              <NavLink to="/blogs" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 lg:hover:bg-transparent lg:hover:text-blue-700 lg:p-0 lg:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Blogs</NavLink>
            </li>
            <li>
              <NavLink to="/appx" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 lg:hover:bg-transparent lg:hover:text-blue-700 lg:p-0 lg:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">App</NavLink>
            </li>
            <li>
              <NavLink to="/help" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 lg:hover:bg-transparent lg:hover:text-blue-700 lg:p-0 lg:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Help</NavLink>
            </li>
            <li>
            <NavLink to="/login" className=" block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 lg:hover:bg-transparent lg:hover:text-blue-700 lg:p-0 lg:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Login</NavLink>
            </li>
          </ul>
        </div>
          
        </div>
      </nav>
      <Outlet/>
    </div>
  )
}

export default Header_file
