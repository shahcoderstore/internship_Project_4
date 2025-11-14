import React from 'react'
import "../../StylesCSS/HomeCSS/Dishes.css"
function Dishes() {
    return (
        <section className='dishes-section'>
            <span>CafeDine Dishes</span>
            <h2>We provide quality food.We care about your health</h2>
            <section className="dishes-lists-con">
                <div className="list-categry-con">
                    <p>All</p>
                    <p>STARTED</p>
                    <p>LAUNCH</p>
                    <p>DINNER</p>
                </div>
                <div className="list-dishes-con">
                    <div className="dish-container">
                        <img src="https://cafedine-bootstrap.vercel.app/images/menu/menu-1.jpg" alt="" srcset="" />
                        <div className="decription">
                            <h4>Vitello Tonato - 23$</h4>
                            <p>Chinese mustard/Chipotle aiol</p>
                        </div>
                    </div>
                    <div className="dish-container">
                        <img src="https://cafedine-bootstrap.vercel.app/images/menu/menu-2.jpg" alt="" srcset="" />
                        <div className="decription">
                            <h4>Crema di Pomodoro - 34$</h4>
                            <p>Chinese mustard/Chipotle aiol</p>
                        </div>
                    </div>
                    <div className="dish-container">
                        <img src="https://cafedine-bootstrap.vercel.app/images/menu/menu-3.jpg" alt="" srcset="" />
                        <div className="decription">
                            <h4>Oatmeal Cookie - 13$</h4>
                            <p>Chinese mustard/Chipotle aiol</p>
                        </div>
                    </div>
                    <div className="dish-container">
                        <img src="https://cafedine-bootstrap.vercel.app/images/menu/menu-4.jpg" alt="" srcset="" />
                        <div className="decription">
                            <h4>Seasonal Soup - 10$</h4>
                            <p>Chinese mustard/Chipotle aiol</p>
                        </div>
                    </div>
                    <div className="dish-container">
                        <img src="https://cafedine-bootstrap.vercel.app/images/menu/menu-5.jpg" alt="" srcset="" />
                        <div className="decription">
                            <h4>Pizza Pane - 28$</h4>
                            <p>Chinese mustard/Chipotle aiol</p>
                        </div>
                    </div>
                    <div className="dish-container">
                        <img src="https://cafedine-bootstrap.vercel.app/images/menu/menu-6.jpg" alt="" srcset="" />
                        <div className="decription">
                            <h4>Carpacio - 20$</h4>
                            <p>Chinese mustard/Chipotle aiol</p>
                        </div>
                    </div>
                    <div className="dish-container">
                        <img src="https://cafedine-bootstrap.vercel.app/images/menu/menu-7.jpg" alt="" srcset="" />
                        <div className="decription">
                            <h4>Insalata Rucola - 15$</h4>
                            <p>Chinese mustard/Chipotle aiol</p>
                        </div>
                    </div>
                    <div className="dish-container">
                        <img src="https://cafedine-bootstrap.vercel.app/images/menu/menu-8.jpg" alt="" srcset="" />
                        <div className="decription">
                            <h4>Carpacio - 13$</h4>
                            <p>Chinese mustard/Chipotle aiol</p>
                        </div>
                    </div>
                </div>
            </section>

        </section>
    )
}

export default Dishes