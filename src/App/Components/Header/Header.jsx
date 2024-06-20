
import React, { useState } from "react";
import { Menus } from "./Menus";
import BurgerMenu from "../BurgerMenu/BurgerMenu"; 
//import Rain from "../../Pages/Rain";
import './Header.css'
import { FaTelegram } from "react-icons/fa";


const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className="navbar">
      <div className="max-w-[1144px] w-[83%] mx-auto flex justify-between items-center relative">
        <div className="navbar-start">
          <a className="font-Hat font-black max-[575.98px]:text-[1.5rem] sm:text-[1.5rem] lg:text-3xl text-white cursor-pointer">
            Russell K.
          </a>
        </div>

        <div className="navbar-center w-[50%] max-[575.98px]:hidden lg:flex items-center gap-[0.4rem] text-[#FFF] font-Hat">
        <FaTelegram className="mt-3"/>
          <a href="" className=" mt-[10px] font-medium">+880 17172 33957</a>
          
        </div>

        <div className="navbar-end flex relative">
          <BurgerMenu 
          toggle={mobileMenuOpen} 
          clicked={toggleMobileMenu}  
          initialColor="white" 
          toggledColor="#28effa" />
          
          <ul
            tabIndex="0"
            className={`dropdown max-[575.98px]:w-auto max-[575.98px]:right-[-43px] menu menu-sm dropdown-content absolute right-[-112px] mt-[49px] z-10 p-8 shadow bg-[#0d0d0dbd] w-[20rem] h-[100vh] transition-transform duration-300 ${
              mobileMenuOpen ? "block" : "hidden"
            }`}
          >
            {Menus?.map((menu, index) => (
              <li key={index}>
                <a
                  href={menu?.link}
                  className="text-[#efefef] font-oswald cursor-pointer pb-5"
                >
                  {menu?.name}
                </a>
              </li>
            ))}
            <div className="button-container-4">
              <span className="contact_mas">RESUME</span>
              <button type="button" name="Hover"></button>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
