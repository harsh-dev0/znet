// NavLink.js
import React from 'react';
import { Link } from 'react-scroll';

const NavLink = ({ to, title }) => {
  return (
    <Link
      to={to}
      spy={true}
      smooth={true}
      offset={-70} // Adjust the offset based on your layout
      duration={500}
      className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white"
    >
      {title}
    </Link>
  );
};

export default NavLink;
