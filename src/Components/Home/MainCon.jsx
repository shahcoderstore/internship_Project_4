import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
// import "./swiperFix.css";
import { A11y, Autoplay, Navigation, Pagination, Scrollbar } from 'swiper/modules';

import { RiBowlFill } from "react-icons/ri";
import { FaTasks } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
function MainCon() {
    return (
        <>
            <div className='mainCon'>
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                    spaceBetween={50}
                    slidesPerView={1}
                    navigation          // Enables next/prev buttons
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    autoplay={{
                        delay: 3000,       // 1 second per slide
                        disableOnInteraction: false, // keeps autoplay even after manual slide
                    }}
                       centeredSlides={true}
                    loop={true}

                >
                    <SwiperSlide>
                        <div className="slider">
                            <img src="https://cafedine-bootstrap.vercel.app/images/banner/slide-1.jpg" alt="" srcset="" />
                            <div className="home-absolute-container">
                                <p>Welcome to restuarant</p>
                                <h1>Fresh,Delicious meal to reach your optimum health and fitness</h1>
                                <button>VIEW MENU</button>
                            </div>

                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="slider">
                            <img src="https://cafedine-bootstrap.vercel.app/images/banner/slide-2.jpg" alt="" srcset="" />
                            <div className="home-absolute-container">
                                <p>Welcome to restuarant</p>
                                <h1>Good food starts with good ingridients.Have a great time with us</h1>
                                <button>VIEW MENU</button>
                            </div>

                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="slider">
                            <img src="https://cafedine-bootstrap.vercel.app/images/banner/slide-3.jpg" alt="" srcset="" />
                            <div className="home-absolute-container">
                                <p>Welcome to restuarant</p>
                                <h1>We deliver good quality food with great service to our customers</h1>
                                <button>VIEW MENU</button>
                            </div>

                        </div>
                    </SwiperSlide>

                </Swiper>

                <div className="facilities-con">
                    <div className="facilitie">
                        < RiBowlFill style={{ fontSize: "4rem" }} />
                        <h3>Delicious Food</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia animi ipsam obcaecati.</p>
                    </div>
                    <div className="facilitie">
                        <FaTasks style={{ fontSize: "3rem" }} />
                        <h3>Online Order</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia animi ipsam obcaecati.</p>
                    </div>
                    <div className="facilitie">
                        <FaMapMarkerAlt style={{ fontSize: "3rem" }} />
                        <h3>Free delivery</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia animi ipsam obcaecati.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MainCon