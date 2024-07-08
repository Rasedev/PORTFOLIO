import React, { useState } from "react";
import { Menus } from "./Menus";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import "./Header.css";
//import { FaTelegram } from "react-icons/fa";
import Button from "../Button/Button";


const Header = () => {
  const resumePath =
    "https://drive.google.com/file/d/13-t54h0NbBriqY899IaJ0txMGsVbgUw0/view";
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleResumeClick = () => {
    window.open(resumePath, "_blank");
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className="navbar">
      <div className="max-w-[1144px] w-[90%] mx-auto flex justify-between items-center relative">
        <div className="navbar-start">
          <a className="navbar-title font-Hat font-black md:text-[1.5rem] lg:text-[2.5vw] text-white cursor-pointer">
          Russell K.
            {/* <span className="">R</span>ussell K. */}
          </a>
        </div>

        <div className="navbar-center w-[50%] max-[575.98px]:hidden lg:flex items-center gap-[0.4rem] text-[#FFF] font-Hat">
          {/* <FaTelegram className="telegram-icon mt-3" /> */}
          <a href="" className="contact-number mt-[10px] font-medium">
            +880 17172 33957
          </a>
          {/* <a href="" className="contact-number mt-[10px] font-medium">
          raselmuy@gmail.com
          </a> */}
        </div>

        <div className="navbar-end flex relative">
          <BurgerMenu
            toggle={mobileMenuOpen}
            clicked={toggleMobileMenu}
            initialColor="white"
            toggledColor="#4db5ff"
            zIndex={20}
          />

          <ul
            tabIndex="0"
            className={`dropdown-menu ${mobileMenuOpen ? "open" : ""}`}
          >
            {Menus?.map((menu, index) => (
              <li className="mb-[4.4vmin]" key={index}>
                <a
                  href={menu?.link}
                  className="menu-item text-[#efefef] font-oswald cursor-pointer pb-5 ml-5"
                >
                  {menu?.name}
                </a>
              </li>
            ))}

            <Button
              title="RESUME"
              onClick={handleResumeClick}
              width="210px"
              height="50px"
              className="Header-button-class"
              style={{ backgroundColor: "transparent", borderRadius: "2px" }}
              type="link"
              href={resumePath}
            />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
