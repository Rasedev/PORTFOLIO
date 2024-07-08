import React, { useState, useEffect } from "react";
import "./Footer.css";
import { FaGit, FaInstagram, FaTwitter, FaTelegramPlane } from "react-icons/fa";
import { TfiFacebook } from "react-icons/tfi";
import { FaLinkedinIn } from "react-icons/fa6";
import Button from "../Button/Button";
//import Projects from "../Projects/Projects";


const Footer = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const getRotation = (units, totalUnits) => ({
    transform: `rotate(${(units / totalUnits) * 360}deg)`,
  });

  return (
    <footer className="arrow">
        <div className="wrap">
          <div className="title-box">
            <p className="font-Hat">Your cup of tea?</p>
            <h5 className="font-Hat">Let’s start</h5>
          </div>

          <div className="contact-chat">
            <div className="ff-contact left">
              <a className="" href="mailto:russell233957@gmail.com">
                <span className="font_Hat font-bold">raselmuy@gmail.com</span>
              </a>
            </div>

            <div className="ff-contact right">
              <a className="font-Hat font-bold" href="tel:+8801717233957">
                <span className="font-Hat">+8801 717 233 957</span>
              </a>
              <span className="font-Hat">Dinajpur / Dhaka / Bangladesh</span>
              <div className="icon-watch">
                <div className="wt-face">
                  <div
                    className="line hero-hour"
                    style={getRotation(time.getHours() % 12, 12)}
                  ></div>
                  <div
                    className="line hero-minute"
                    style={getRotation(time.getMinutes(), 60)}
                  ></div>
                  <div
                    className="line hero-second"
                    style={getRotation(time.getSeconds(), 60)}
                  ></div>
                </div>
              </div>
              <Button
              title="Get a Quote"
              onClick={() => alert("Button clicked!")}
              width="150px"
              height="60px"
              className="custom-button-class"
              style={{ backgroundColor: "transparent", borderRadius: '5px'}}
            />
            </div>

            
          </div>

          <div className="ff-socials">
            <a
              href="https://github.com/Rasedev"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>github</span>
              <FaGit className="svg" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Facebook</span>
              <TfiFacebook className="svg" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Instagram</span>
              <FaInstagram className="svg" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Twitter</span>
              <FaTwitter className="svg" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>LinkedinIn</span>
              <FaLinkedinIn className="svg" />
            </a>
            <a
              href="https://telegram.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Telegram</span>
              <FaTelegramPlane className="svg" />
            </a>

          </div>
        </div>
           {/* <Projects/> */}
    </footer>
  );
};

export default Footer;



// import React, { useState, useEffect } from "react";
// import "./Footer.css";
// import { FaGit, FaInstagram, FaTwitter, FaTelegramPlane } from "react-icons/fa";
// import { TfiFacebook } from "react-icons/tfi";
// import { FaLinkedinIn } from "react-icons/fa6";
// import Button from "../Button/Button";
// import Watch from "../Watch/Watch";

// const Footer = () => {
//   const [time, setTime] = useState(new Date());

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setTime(new Date());
//     }, 1000);
//     return () => clearInterval(interval);
//   }, []);

//   const getRotation = (units, totalUnits) => ({
//     transform: `rotate(${(units / totalUnits) * 360}deg)`,
//   });

//   const getBangladeshTime = () => {
//     const bangladeshTime = new Date(time.toLocaleString("en-US", { timeZone: "Asia/Dhaka" }));
//     return bangladeshTime;
//   };

//   const bangladeshTime = getBangladeshTime();

//   return (
//     <footer className="arrow">
//       <div className="wrap">
//         <div className="title-box">
//           <p className="font-Hat">Your cup of tea?</p>
//           <h5 className="font-Hat">Let’s start</h5>
//         </div>

//         <div className="contact-chat">
//           <div className="ff-contact left">
//             <a className="" href="mailto:russell233957@gmail.com">
//               <span className="font_Hat font-bold">raselmuy@gmail.com</span>
//             </a>
//           </div>

//           <div className="ff-contact right">
//             <a className="font-Hat font-bold" href="tel:+8801717233957">
//               <span className="font-Hat">+8801 717 233 957</span>
//             </a>
//             <span className="font-Hat">Dinajpur / Dhaka / Bangladesh</span>
//             <div className="icon-watch">
//               <div className="wt-face">
//                 <div
//                   className="line hero-hour"
//                   style={getRotation(bangladeshTime.getHours() % 12, 12)}
//                 ></div>
//                 <div
//                   className="line hero-minute"
//                   style={getRotation(bangladeshTime.getMinutes(), 60)}
//                 ></div>
//                 <div
//                   className="line hero-second"
//                   style={getRotation(bangladeshTime.getSeconds(), 60)}
//                 ></div>
//               </div>
//             </div>
//             <Button
//               title="Get a Quote"
//               onClick={() => alert("Button clicked!")}
//               width="150px"
//               height="60px"
//               className="custom-button-class"
//               style={{ backgroundColor: "transparent", borderRadius: "5px" }}
//             />
//           </div>
//         </div>

//         <div className="ff-socials">
//           <a
//             href="https://github.com/Rasedev"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <span>github</span>
//             <FaGit className="svg" />
//           </a>
//           <a
//             href="https://facebook.com"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <span>Facebook</span>
//             <TfiFacebook className="svg" />
//           </a>
//           <a
//             href="https://instagram.com"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <span>Instagram</span>
//             <FaInstagram className="svg" />
//           </a>
//           <a
//             href="https://twitter.com"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <span>Twitter</span>
//             <FaTwitter className="svg" />
//           </a>
//           <a
//             href="https://linkedin.com"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <span>LinkedinIn</span>
//             <FaLinkedinIn className="svg" />
//           </a>
//           <a
//             href="https://telegram.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <span>Telegram</span>
//             <FaTelegramPlane className="svg" />
//           </a>

//           <Watch/>
//         </div>
        
//       </div>
      
//     </footer>
//   );
// };

// export default Footer;




