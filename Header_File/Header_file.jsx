import React from 'react'
import { NavLink, Outlet } from 'react-router'

function Header_file() {
  return (
    <div>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/fit_center">Fit Centers</NavLink>
      <NavLink to="/fit_parther">Fit Parthers</NavLink>
      <NavLink to="/blogs">Blogs</NavLink>
      <NavLink to="/appx">App</NavLink>
      <NavLink to="/help">Help</NavLink>
      <Outlet/>
    </div>
  )
}

export default Header_file
