import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
// import "./swiperFix.css";
import { A11y, Autoplay, Navigation, Pagination, Scrollbar } from 'swiper/modules';
import "../../StylesCSS/HomeCSS/InstaSlide.css"
function InstaSlide() {
    return (
        <section className='section-instaslide'>
            <div className="insta-button">
                <button type="button">Instagram</button>
            </div>
            <div className="insta-slider">
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                    spaceBetween={0}
                    slidesPerView={"auto"}
                    scrollbar={{ draggable: true }}
                    autoplay={{
                        delay: 3000,       // 1 second per slide
                        // keeps autoplay even after manual slide
                    }}
                    loop={true}
// centeredSlides={true}
                >

                    <SwiperSlide> <img src="https://cafedine-bootstrap.vercel.app/images/gallery/gallery-1.jpg" alt="" srcset="" /></SwiperSlide>
                    <SwiperSlide><img src="https://cafedine-bootstrap.vercel.app/images/gallery/gallery-2.jpg" alt="" srcset="" /></SwiperSlide>
                    <SwiperSlide><img src="https://cafedine-bootstrap.vercel.app/images/gallery/gallery-3.jpg" alt="" srcset="" /></SwiperSlide>
                    <SwiperSlide><img src="https://cafedine-bootstrap.vercel.app/images/gallery/gallery-4.jpg" alt="" srcset="" /></SwiperSlide>
                    <SwiperSlide><img src="https://cafedine-bootstrap.vercel.app/images/gallery/gallery-5.jpg" alt="" srcset="" /></SwiperSlide>
                    <SwiperSlide><img src="https://cafedine-bootstrap.vercel.app/images/gallery/gallery-6.jpg" alt="" srcset="" /></SwiperSlide>
                    <SwiperSlide><img src="https://cafedine-bootstrap.vercel.app/images/gallery/gallery-7.jpg" alt="" srcset="" /></SwiperSlide>
                    <SwiperSlide><img src="https://cafedine-bootstrap.vercel.app/images/gallery/gallery-2.jpg" alt="" srcset="" /></SwiperSlide>
                    <SwiperSlide><img src="https://cafedine-bootstrap.vercel.app/images/gallery/gallery-4.jpg" alt="" srcset="" /></SwiperSlide>
                    <SwiperSlide><img src="https://cafedine-bootstrap.vercel.app/images/gallery/gallery-6.jpg" alt="" srcset="" /></SwiperSlide>
                    <SwiperSlide><img src="https://cafedine-bootstrap.vercel.app/images/gallery/gallery-1.jpg" alt="" srcset="" /></SwiperSlide>
                    <SwiperSlide><img src="https://cafedine-bootstrap.vercel.app/images/gallery/gallery-5.jpg" alt="" srcset="" /></SwiperSlide>
                </Swiper>
            </div>
        </section >
    )
}

export default InstaSlide