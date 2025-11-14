import React from 'react'
import "../../StylesCSS/AboutCSS/OurServices.css"
import { FaCocktail } from "react-icons/fa";
import { BsFillBasket3Fill } from "react-icons/bs";
import { BsFillCakeFill } from "react-icons/bs";
import { GiFruitBowl } from "react-icons/gi";
import { MdLocalDining } from "react-icons/md";
import { GrRestaurant } from "react-icons/gr";

function OurServices() {
    return (
        <section className='OurServices-section'>
            <span>Our services</span>
            <h2>We provide good services with lots of facilities</h2>
            <div className="OurServices-container">
                <div className="service-con">
                    <FaCocktail style={{fontSize:'2.5rem' , color:"grey"}}/>
                    <h3>Fresh Food</h3>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                </div>
                <div className="service-con">
                    <BsFillBasket3Fill style={{fontSize:'2.5rem' , color:"grey"}}/>
                    <h3>Quality Cuisine</h3>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                </div>
                <div className="service-con">
                    <BsFillCakeFill style={{fontSize:'2.5rem' , color:"grey"}}/>
                    <h3>Bread & Pancake</h3>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                </div>
                <div className="service-con">
                    <GiFruitBowl style={{fontSize:'2.5rem' , color:"grey"}}/>
                    <h3>Fresh Vegies Salad</h3>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                </div>
                <div className="service-con">
                    <MdLocalDining style={{fontSize:'2.5rem' , color:"grey"}}/>
                    <h3>Event Management</h3>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                </div>
                <div className="service-con">
                    <GrRestaurant style={{fontSize:'2.5rem' , color:"grey"}}/>
                    <h3>Reserve Now</h3>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                </div>
            </div>
        </section>
    )
}

export default OurServices