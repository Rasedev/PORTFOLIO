import React, { useState } from "react";
import { Menus } from "./Menus";
import BurgerMenu from "../BurgerMenu/BurgerMenu"; 
//import Rain from "../../Pages/Rain";


const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <>
    {/* fixed top-0 z-50 */}
      <div className="navbar bg-[#000] py-4">
        <div className="max-w-[1144px] w-[83%] mx-auto flex justify-between items-center relative ">
          <div className="navbar-start">
            <a className="font-pops font-bold max-[575.98px]:text-[1.5rem] sm:text-[1.5rem] lg:text-3xl blend cursor-pointer">
              Russell K.
            </a>
          </div>

          <div className="navbar-center max-[575.98px]:hidden lg:flex">
            {/* <ul className="menu menu-horizontal px-1">
              {Menus?.map((menu, index) => (
                <li key={index}>
                  <a
                    href={menu?.link}
                    className="text-[#efefef] font-oswald cursor-pointer"
                  >
                    {menu?.name}
                  </a>
                </li>
              ))}
            </ul> */}
            {/* <Rain/> */}
          </div>

          <div className="navbar-end flex relative">
            <BurgerMenu toggle={mobileMenuOpen} clicked={toggleMobileMenu} />
            <ul
              tabIndex="0"
              className={`max-[575.98px]:w-auto max-[575.98px]:right-[-43px] menu menu-sm dropdown-content absolute right-[-116px] mt-[49px] z-10 p-8 shadow bg-[#0d0d0dbd] w-[20rem] h-[100vh] md:left-[64px] transition-transform duration-300 ${
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
    </>
  );
};

export default Header;

