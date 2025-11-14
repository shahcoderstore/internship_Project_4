import React from 'react'
import DecHeader from '../DecHeader'
import AboutUs from './AboutUs'
import Chefs from './Chefs'
import OurServices from './OurServices'
import Review from './Review'
import InstaSlide from '../Home/InstaSlide'


function AboutPage() {
  let name= "About Us"
  return (
    <section className='AboutPage-section'>
      <DecHeader name={name}/>
      <AboutUs/>
      <Chefs></Chefs>
      <OurServices/>
      <Review/>
      <InstaSlide></InstaSlide>
    </section>
  )
}

export default AboutPage