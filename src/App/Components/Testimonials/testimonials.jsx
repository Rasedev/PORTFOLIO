import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import "./Testimonials.css";
import { BiSolidQuoteAltLeft } from "react-icons/bi";
import { Autoplay, EffectCube, Pagination } from "swiper/modules";
//import TreeComponent from "./../Tree/TreeComponent";
import slide0 from "../../../assets/R0.png"
import slide1 from "../../../assets/R1.png"
import slide2 from "../../../assets/R2.png"



const Testimonials = () => {
  

  return (
    <section className="testimonials ">
      
      <div className="shape_3">
        <div className="test_wrap p-5">
          <div className="font-lato text-[15px] font-semibold text-[#fff] text-center pb-5">
            <h5 className="">Review from clients</h5>
            <h1 className="text-[30px] text-[#3bbca7] font-bold">
              <span>Testi</span>monials{" "}<span className="color">.</span>
            </h1>
          </div>

          <div className="test-wrapper">
            <div className="author">
              <img className="s-1" src="./src/assets/shape-19.svg" alt="" />
            
              <div className="auth-wrapper">
                <div className="quote">
                  <BiSolidQuoteAltLeft className="icon text-center absolute top-[25%] left-[24%]" />
                </div>
                <div className="auth-img">
                  <Swiper
                    effect="cube"
                    // autoplay={{
                    //   delay: 2500,
                    //   disableOnInteraction: false,
                    // }}
                    grabCursor={true}
                    cubeEffect={{
                      shadow: true,
                      slideShadows: true,
                      shadowOffset: 20,
                      shadowScale: 0.94,
                    }}
                    pagination={{ clickable: true }}
                    modules={[Autoplay, EffectCube]}
                    className="mySwiper"
                  >
                    <SwiperSlide>
                      <img src={slide0} alt="author" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src={slide1} alt="author" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src={slide2} alt="author" />
                    </SwiperSlide>
                  </Swiper>
                </div>
                {/* <TreeComponent /> */}
              </div>
            </div>
            <div className="test-content ">
              
              <Swiper
                effect="cube"
                // autoplay={{
                //   delay: 2500,
                //   disableOnInteraction: false,
                // }}
                grabCursor={true}
                cubeEffect={{
                  shadow: true,
                  slideShadows: true,
                  shadowOffset: 20,
                  shadowScale: 0.94,
                }}
                pagination={{ clickable: true }}
                modules={[Autoplay, EffectCube, Pagination]}
                className="mySwiper"
                
              >
                
                <SwiperSlide>
                  <div className="single-testimonial-content">
                    <p className="font-Roboto">
                      “ We are very content and happy wan all the work Russell
                      Khan has done for us! Not only did he just what he had to
                      do, comes up with suggestions and improvements of his owns
                      and points out weaknesses which he in perfect
                      communication is able to improve. understood the
                      requirement, and delivered quickly. Multiple revisions
                      allowed which were very helpful. I will work with him
                      again.
                    </p>
                    <h5 className="name">Martney Paker</h5>
                    <span className="designation">IT Specialist</span>
                    
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="single-testimonial-content">
                    <p className="font-Roboto">
                      “ We are very content and happy wan all the work Russell
                      Khan has done for us! Not only did he just what he had to
                      do, comes up with suggestions and improvements of his owns
                      and points out weaknesses which he in perfect
                      communication is able to improve. understood the
                      requirement, and delivered quickly. Multiple revisions
                      allowed which were very helpful. I will work with him
                      again.
                    </p>
                    <h5 className="name">Martney Holder</h5>
                    <span className="designation">IT Specialist</span>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="single-testimonial-content">
                    <p className="font-Roboto">
                      “ We are very content and happy wan all the work Russell
                      Khan has done for us! Not only did he just what he had to
                      do, comes up with suggestions and improvements of his owns
                      and points out weaknesses which he in perfect
                      communication is able to improve. understood the
                      requirement, and delivered quickly. Multiple revisions
                      allowed which were very helpful. I will work with him
                      again.
                    </p>
                    <h5 className="name">Andrew Paker</h5>
                    <span className="designation">IT Specialist</span>
                  </div>
                </SwiperSlide>


              </Swiper>
            </div>
          </div>
                {/* <TreeComponent/> */}
         
          
    
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
