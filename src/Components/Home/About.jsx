import React from 'react'
import "../../StylesCSS/HomeCSS/About.css"
function About() {
    return (
        <section className='About-section'>
            <span>About CafeDine</span>
            <h2>We are a modern restaurant in the center of the city </h2>
            <div className="dish-con">
                <div className="dish">
                    <img src="https://cafedine-bootstrap.vercel.app/images/about/img-1.jpg" alt="" srcset="" />
                    <h3>Quality Food</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.impedit maiores fugit illo deserunt!</p>
                </div>
                <div className="dish">
                    <img src="https://cafedine-bootstrap.vercel.app/images/about/img-2.jpg" alt="" srcset="" />
                    <h3>Friendly place
                    </h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.impedit maiores fugit illo deserunt!</p>
                </div>
                <div className="dish">
                    <img src="https://cafedine-bootstrap.vercel.app/images/about/img-3.jpg" alt="" srcset="" />
                    <h3>Affordable price</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.impedit maiores fugit illo deserunt!</p>
                </div>
            </div>

            <div className="section_cta">
                <img src="https://cafedine-bootstrap.vercel.app/images/banner/cta-bg.jpg" alt="" srcset="" />
                <div className="decription_show">
                    <span>Prepare The Best Dishes</span>
                    <h2>Come & Experience Our Best of World Class Cousine</h2>
                      <button>BOOK NOW</button>
                </div>
            </div>
        </section>
    )
}

export default About