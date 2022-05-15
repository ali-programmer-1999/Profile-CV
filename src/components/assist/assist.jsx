/* eslint-disable no-unused-vars */
import React, { useRef, useState } from "react";
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/heading-has-content */
import "./assist_style.css";
// eslint-disable-next-line no-unused-vars
// image
import mehdi from "../../image/mehdi.jpg";
import company_1 from "../../image/company/company1.png";
import company_2 from "../../image/company/company2.jpg";
import company_3 from "../../image/company/company3.png";
import freelancer from "../../image/company/freelance.jpg";

// FontAwesomeIcon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// ====slide===
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

function Assist() {
  return (
    <div id="assist" className="assist container">
      <h1 className="project-logo">Cooperation</h1>

      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        slidesPerGroup={3}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination]}
        className="slider mySwiper"
      >
        <SwiperSlide>
          <div className="slide-item">
            <div className="text-box">
              <p className="member">
                <span>Description :</span>
                <br /> watch shop , person web , webnews , Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Voluptatem culpa perspiciatis
                ut maiores inventore
              </p>
            </div>
            <div className="image-assist">
              <img src={mehdi} alt="" />
              <div className="text-name">
                <h4>Mehdi</h4>
                <small>person</small>
              </div>
            </div>
            <div className="icon-box">
              <a href="">
                <i className="fa-brands fa-facebook"></i>
              </a>
              <a href="">
                <i className="fa-brands fa-whatsapp"></i>
              </a>
              <a href="">
                <i className="fa-brands fa-telegram"></i>
              </a>
              <a href="">
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
              <a href="">
                <i className="fa-brands fa-github"></i>
              </a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-item">
            <div className="text-box">
              <p className="member">
                <span>Description :</span>
                <br /> Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Voluptatibus, officiis modi excepturi, quam ullam ratione
                ........{" "}
              </p>
            </div>
            <div className="image-assist">
              <img src={company_1} alt="" />
              <div className="text-name">
                <h4>lorem</h4>
                <small>Company</small>
              </div>
            </div>
            <div className="icon-box">
              <a href="">
                <i className="fa-brands fa-facebook"></i>
              </a>
              <a href="">
                <i className="fa-brands fa-whatsapp"></i>
              </a>
              <a href="">
                <i className="fa-brands fa-telegram"></i>
              </a>
              <a href="">
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
              <a href="">
                <i className="fa-brands fa-github"></i>
              </a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-item">
            <div className="text-box">
              <p className="member">
                <span>Description :</span>
                <br /> Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Voluptatibus, officiis modi excepturi, quam ullam ratione
                ........{" "}
              </p>
            </div>
            <div className="image-assist">
              <img src={freelancer} alt="" />
              <div className="text-name">
                <h4>lorem</h4>
                <small>Freelancer</small>
              </div>
            </div>
            <div className="icon-box">
              <a href="">
                <i className="fa-brands fa-facebook"></i>
              </a>
              <a href="">
                <i className="fa-brands fa-whatsapp"></i>
              </a>
              <a href="">
                <i className="fa-brands fa-telegram"></i>
              </a>
              <a href="">
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
              <a href="">
                <i className="fa-brands fa-github"></i>
              </a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-item">
            <div className="text-box">
              <p className="member">
                <span>Description :</span>
                <br /> watch shop , person web , webnews , Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Voluptatem culpa perspiciatis
                ut maiores inventore
              </p>
            </div>
            <div className="image-assist">
              <img src={company_3} alt="" />
              <div className="text-name">
                <h4>lorem</h4>
                <small>person</small>
              </div>
            </div>
            <div className="icon-box">
              <a href="">
                <i className="fa-brands fa-facebook"></i>
              </a>
              <a href="">
                <i className="fa-brands fa-whatsapp"></i>
              </a>
              <a href="">
                <i className="fa-brands fa-telegram"></i>
              </a>
              <a href="">
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
              <a href="">
                <i className="fa-brands fa-github"></i>
              </a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-item">
            <div className="text-box">
              <p className="member">
                <span>Description :</span>
                <br /> watch shop , person web , webnews , Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Voluptatem culpa perspiciatis
                ut maiores inventore{" "}
              </p>
            </div>
            <div className="image-assist">
              <img src={company_2} alt="" />
              <div className="text-name">
                <h4>lorem</h4>
                <small>Company</small>
              </div>
            </div>
            <div className="icon-box">
              <a href="">
                <i className="fa-brands fa-facebook"></i>
              </a>
              <a href="">
                <i className="fa-brands fa-whatsapp"></i>
              </a>
              <a href="">
                <i className="fa-brands fa-telegram"></i>
              </a>
              <a href="">
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
              <a href="">
                <i className="fa-brands fa-github"></i>
              </a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-item">
            <div className="text-box">
              <p className="member">
                <span>Description :</span>
                <br /> watch shop , person web , webnews , Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Voluptatem culpa perspiciatis
                ut maiores inventore{" "}
              </p>
            </div>
            <div className="image-assist">
              <img src={freelancer} alt="" />
              <div className="text-name">
                <h4>lorem</h4>
                <small>Freelancer</small>
              </div>
            </div>
            <div className="icon-box">
              <a href="">
                <i className="fa-brands fa-facebook"></i>
              </a>
              <a href="">
                <i className="fa-brands fa-whatsapp"></i>
              </a>
              <a href="">
                <i className="fa-brands fa-telegram"></i>
              </a>
              <a href="">
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
              <a href="">
                <i className="fa-brands fa-github"></i>
              </a>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

const shower_project =document.querySelector('.assist');

window.addEventListener('scroll' , ()=>{
  if(document.documentElement.scrollTop > 1700){
    document.querySelector('.assist').classList.add('assist-show');
  }
  else{
    document.querySelector('.assist').classList.remove('assist-show');
  }
  
})

export default Assist;
