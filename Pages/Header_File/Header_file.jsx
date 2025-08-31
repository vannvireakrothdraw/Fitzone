import React from 'react'
import { NavLink, Outlet } from 'react-router'

function Header_file() {
  return (
    <div>  
      <div className=''>
        <NavLink to="/"
        >Home</NavLink>
        <NavLink to="/fit_center" className=""
        >Fit Centers</NavLink>
        <NavLink to="/fit_parther" className=""
        >Fit Parthers</NavLink>
        <NavLink to="/blogs" className=""
        >Blogs</NavLink>
        <NavLink to="/appx" className=""
        >App</NavLink>
        <NavLink to="/help" className=""
        >Help</NavLink>
      </div>
      <Outlet/>
    </div>
  )
}

export default Header_file
