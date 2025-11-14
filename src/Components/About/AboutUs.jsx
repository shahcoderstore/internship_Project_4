import React from 'react'
import "../../StylesCSS/AboutCSS/Aboutus.css"
function AboutUs() {
    return (
        <section className="section_Aboutus">
            <div className="Aboutus-left">
                <img className='img1' src="	https://cafedine-bootstrap.vercel.app/images/about/about-img.jpg" alt="" />
                <img className='img2' src="https://cafedine-bootstrap.vercel.app/images/about/about-2.jpg" alt="" />
            </div>
            <div className="Aboutus-right">
                <h2>About Us</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente necessitatibus id, animi nemo quos eos minus adipisci veritatis quibusdamm</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. repudiandae eius doloribus accusamus fugit .</p>
                <h4>- Clean Environment</h4>
                <h4>- Experience chefs</h4>
                <h4>- Fresh and creative dishes</h4>
            </div>
            <div className="about-absolute-con">
                <p>Book Now !</p>
                <p>+34567890</p>
            </div>
        </section>
    )
}

export default AboutUs