import React from 'react'
import { NavLink, Outlet } from 'react-router'

function Header_file() {
  return (
    <div>
      <div className="flex items-center justify-between bg-neutral-900 text-white px-8 py-4 shadow-md">
        <NavLink to="/" className="">
          <div className="flex items-center space-x-3">
            <img src="" alt="" className="h-8 w-8" />
          <span className="text-2xl font-bold tracking-wide">FIT.ZONE</span>
          </div>
        </NavLink>

        <nav>
          <ul className="flex space-x-10">
            <li>
              <NavLink to="/fit_center" className="px-8">Fit Centers</NavLink>
            </li>
            <li>
              <NavLink to="/fit_parther" className="px-8">Fit Partners</NavLink>
            </li>
            <li>
              <NavLink to="/blogs" className="px-8">Blogs</NavLink>
            </li>
            <li>
              <NavLink to="/appx" className="px-8">App</NavLink>
            </li>
            <li>
              <NavLink to="/help" className="px-8">Help</NavLink>
            </li>
          </ul>
        </nav>

        <div>
          <NavLink to="/login" className="font-semibold ">Login</NavLink>
        </div>
      </div>
      <Outlet />
    </div>
  )
}

export default Header_file
