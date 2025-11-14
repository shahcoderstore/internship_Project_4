import React from 'react'
import "../../StylesCSS/HomeCSS/home.css"
import MainCon from './MainCon';
import About from './About';
import Dishes from './Dishes';
import GetApp from './GetApp';
import InstaSlide from './InstaSlide';
import Footer from '../Footer';

function Home() {
    return (
        <section className='home-section'>
           <MainCon/>
           <About></About>
           <Dishes></Dishes>
           <GetApp></GetApp>
           <InstaSlide/>
           
        </section>
    )

}

export default Home