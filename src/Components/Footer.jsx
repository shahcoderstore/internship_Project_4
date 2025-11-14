import React from 'react'
import "../StylesCSS/Footer.css"
function Footer() {
  return (
   <section className='footer-section'>
    <div className="footer-top-con">
        <div className="footer-about footer-top-divs">
            <h4>About</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet, nam!</p>
        </div>
        <div className="footer-info  footer-top-divs">
            <h4>Contact Info</h4>

            <span>
                <p>+1 987 654 3210</p>
            </span>
            <span>
                <p>mail@support.com</p>
            </span>
            <span>
                <p>1234 Altschul, New York,NY 10027-0000</p>
            </span>
        </div>
         <div className="footer-hours footer-top-divs">
            <h4>Opening Hours</h4>

            <span>
                <p>Monday - Thursday</p>
                <h5>10:00 AM - 11:00 PM</h5>
            </span>
            <span>
                <p>Friday - Sunday</p>
                <h5>12:00 AM - 03:00 AM</h5>
            </span>
         </div>

    </div>
    <div className="footer-mid-con">
        <h4>Get latest food recipe at your inbox</h4>
        <input type="email" name="" id="" placeholder='Enter Email' />
    </div>
    <div className="footer-bottom-con">
        <div className="footer-bottom-left">
            <p>Copyright © 2019 a theme by <span> themefisher.com</span></p>
        </div>
        <div className="footer-bottom-right">
            <p>Home </p>
            <p>About Us </p>
            <p>Gallery </p>
            <p>Privacy Policy </p>
            <p>Use of terms</p>
        </div>
    </div>

   </section>
  )
}

export default Footer