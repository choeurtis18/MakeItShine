import React, { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';

import NavLinks from '../components/NavLinks';
import Logo from '../components/Logo';


const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <>
    <nav className="w-full bg-ligther_neutral text-282828">
      <div className="mx-auto flex items-center justify-between h-20 px-12 max-sm:p-4 shadow-xl">
        <Link to="/`" className="flex-shrink-0 font-bold tracking-wider text-2xl">
          <Logo dark="dark"/>
        </Link>

        <div className="hidden md:block items-center">
          <NavLinks />
        </div>

        <button
          type="button"
          className="md:hidden inline-flex items-center justify-center p-2 transition duration-150 ease-in-out"
          onClick={() => setShowMobileMenu(!showMobileMenu)}>
          <svg
            className="h-6 w-6"
            stroke="currentColor"
            fill="none"
            viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>
      <div className="md:hidden">
        {showMobileMenu && <NavLinks />}
      </div>
    </nav>
    
    <Outlet />
    </>
  );
};

export default Navbar;