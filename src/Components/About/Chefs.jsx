import React from 'react'
import "../../StylesCSS/AboutCSS/Chefs.css"
function Chefs() {
    return (
        <section className='Chefs-section'>
            <span >Meet The Chefs</span>
            <h2>We have experienced and creative chefs to start</h2>
            <div className="Chefs-container">
                <div className="Chef-con">
                    <img src="https://cafedine-bootstrap.vercel.app/images/chef/chef_1.jpg" alt="" srcset="" />
                    <div className="Chef-description">
                        <h3>Daniel Graham</h3>
                        <p>Master chef</p>
                    </div>
                    <p>Far from the countries Vokalia and Consonantia, there live the blind texts. They live in Bookmarksgrove.</p>

                </div>
                <div className="Chef-con">
                    <img src="https://cafedine-bootstrap.vercel.app/images/chef/chef_2.jpg" alt="" srcset="" />
                    <div className="Chef-description">
                        <h3>Nick Browning</h3>
                        <p>Master chef</p>
                    </div>
                    <p>Far from the countries Vokalia and Consonantia, there live the blind texts. They live in Bookmarksgrove.</p>
                </div>
                <div className="Chef-con">
                    <img src="https://cafedine-bootstrap.vercel.app/images/chef/chef_3.jpg" alt="" srcset="" />
                    <div className="Chef-description">
                        <h3>Willium Jack</h3>
                        <p>Master chef</p>
                    </div>
                    <p>Far from the countries Vokalia and Consonantia, there live the blind texts. They live in Bookmarksgrove.</p>
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

export default Chefs