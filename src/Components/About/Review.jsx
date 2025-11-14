import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
// import "./swiperFix.css";
import { A11y, Autoplay, Navigation, Pagination, Scrollbar } from 'swiper/modules';
import styles from "../../StylesCSS/AboutCSS/Review.module.css"
function Review() {
    return (
        <section className={styles.sectionreview}>
            <span>customers review</span>
            <h2>Our customers say about us.Lets check out some</h2>
            <div className={styles.reviewscontainer}>
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                    spaceBetween={30}
                    slidesPerView="auto"
                    scrollbar={{ draggable: true }}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false
                    }}
                    centeredSlides={true}
                    loop={true}

                >

                    <SwiperSlide>
                        <div className={styles.review}>
                            <p>“A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.”</p>
                            <img src="https://cafedine-bootstrap.vercel.app/images/about/p-1.jpg" alt="" srcset="" />
                            <h4>Maxim Smith</h4>
                            <p>CEO, Founder</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={styles.review}>
                            <p>““Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.””</p>
                            <img src="https://cafedine-bootstrap.vercel.app/images/about/p-2.jpg" alt="" srcset="" />
                            <h4>Geert Green</h4>
                            <p>CEO, Founder</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={styles.review}>
                            <p>““Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.””</p>
                            <img src="https://cafedine-bootstrap.vercel.app/images/about/p-3.jpg" alt="" srcset="" />
                            <h4>Dennis Roman</h4>
                            <p>CEO, Founder</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={styles.review}>
                            <p>““The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. She packed her seven versalia, put her initial into the belt and made herself on the way.””</p>
                            <img src="https://cafedine-bootstrap.vercel.app/images/about/p-2.jpg" alt="" srcset="" />
                            <h4>Geert Green</h4>
                            <p>CEO, Founder</p>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </section >
    )
}

export default Review