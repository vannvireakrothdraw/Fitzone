import React, { useState, useEffect } from "react";
import { NavLink, Outlet } from "react-router";

function Header_file() {
  const [isShow, setIsShow] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <nav
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/90 dark:bg-gray-800 shadow-md backdrop-blur"
            : "bg-transparent dark:bg-gray-500"
        }`}
      >
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          {/* Mobile menu button */}
          <div className="lg:hidden shadow-sm p-1">
            <button onClick={() => setIsShow(!isShow)}>
              <i className="bi bi-list"></i>
            </button>
          </div>

          {/* Logo */}
          <NavLink
            to="/"
            className="flex items-center space-x-3 rtl:space-x-reverse mx-auto w-1/2"
          >
            <img className="h-8" src="" alt="" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Fit-Zone
            </span>
          </NavLink>

          {/* Nav Links */}
          <div
            className={`${
              isShow ? "block" : "hidden"
            } w-full lg:flex lg:w-auto lg:order-1`}
          >
            <ul className="flex flex-col p-4 lg:p-0 font-medium shadow-sm lg:shadow-none border-gray-100 rounded-lg bg-gray-50 lg:space-x-8 rtl:space-x-reverse lg:flex-row lg:mt-0 lg:border-0 lg:bg-transparent dark:bg-gray-600 lg:dark:bg-transparent dark:border-gray-700">
              <li>
                <NavLink
                  to="/fit_center"
                  className="block py-2 px-3 text-gray-900 hover:text-blue-700 lg:p-0 dark:text-white lg:dark:hover:text-blue-500 text-center"
                >
                  Fit Center
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/fit_parther"
                  className="block py-2 px-3 text-gray-900 hover:text-blue-700 lg:p-0 dark:text-white lg:dark:hover:text-blue-500 text-center"
                >
                  Fit Partner
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/blogs"
                  className="block py-2 px-3 text-gray-900 hover:text-blue-700 lg:p-0 dark:text-white lg:dark:hover:text-blue-500 text-center"
                >
                  Blogs
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/appx"
                  className="block py-2 px-3 text-gray-900 hover:text-blue-700 lg:p-0 dark:text-white lg:dark:hover:text-blue-500 text-center"
                >
                  App
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/help"
                  className="block py-2 px-3 text-gray-900 hover:text-blue-700 lg:p-0 dark:text-white lg:dark:hover:text-blue-500 text-center"
                >
                  Help
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/login"
                  className="block py-2 px-3 text-gray-900 hover:text-blue-700 lg:p-0 dark:text-white lg:dark:hover:text-blue-500 text-center"
                >
                  Login
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Outlet />
    </div>
  );
}

export default Header_file;
