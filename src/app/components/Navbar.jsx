'use client'

import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from './Menuoverlay.jsx';

const navLinks = [
  {
    title: 'Start/>',
    to: 'home',
  },
  {
    title: 'Work/>',
    to: 'projects',
  },
  {
    title: 'About/>',
    to: 'about',
  },
  {
    title: 'Contact/>',
    to: 'contact',
  },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const logo = '<Hp />';
  const [isBlurred, setIsBlurred] = useState(false);


  const handleLinkClick = () => {
    setNavbarOpen(false);


  };

  return (


    <nav className="fixed mx-auto border border-[#33353F] top-0 left-0 right-0 z-10 bg-[#1a1527] bg-opacity-100">
      <div className="flex container lg:py-3 flex-wrap items-center justify-between mx-auto px-4 py-2 ">
        <Link to="/" className="text-2xl md:text-5xl text-white font-semibold cursor-pointer">
          {logo}
        </Link>
        <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0 cursor-pointer">
            {navLinks.map((link, index) => (
              <li key={index}>
                <Link
                  to={link.to}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white"
                  onClick={handleLinkClick}
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navbarOpen && <MenuOverlay links={navLinks} onClose={() => setNavbarOpen(false)} />}
    </nav>

  );
};

export default Navbar;
