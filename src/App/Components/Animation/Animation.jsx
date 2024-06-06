import React, { useEffect } from "react";
//import photo from '../../../assets/avatar.jpg'
import Aos from "aos";
import "aos/dist/aos.css";

const Animation = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <div
        className="bg-cats h-3/4 bg-no-repeat grid lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-1 gap-3"
        data-aos="fade-up"
        data-aos-anchor-placement="bottom-center"
      ></div>
    </>
  );
};

export default Animation;
