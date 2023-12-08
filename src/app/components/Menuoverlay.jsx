
import React from 'react';
import { Link, Element } from 'react-scroll';

const MenuOverlay = ({ links, onClose }) => {
  const handleLinkClick = () => {
    onClose(); 
  };

  return (
    <div className="menu-overlay" onClick={onClose}>
      <ul className="flex  flex-col  py-4 items-center ">
        {links.map((link, index) => (
          <li key={index} >
            <Link
              to={link.to}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={handleLinkClick}
              className="block cursor-pointer py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white"
            >
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MenuOverlay;
