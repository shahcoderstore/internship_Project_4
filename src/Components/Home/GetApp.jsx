import React from 'react'
import { TfiAndroid } from "react-icons/tfi";
import { IoLogoAppleAppstore } from "react-icons/io5";
import "../../StylesCSS/HomeCSS/Getapp.css"
function GetApp() {
    return (
        <section className='section-getapp'>

            <div className="getapp-left"><img src="https://cafedine-bootstrap.vercel.app/images/CafeDine.jpg" alt="" srcset="" /> </div>
            <div className="getapp-right">
                <span>Make it easy</span>
                <h2>Get the CafeDine App</h2>
                <p>Get instant access to recipes from celebrity Cafedia and world-renowed brands right in your pocker. </p>
                <div className="buttons-con">
                    <button className='google'>
                        <div className="google_right">
                            <TfiAndroid style={{fontSize:"2.3rem"}}></TfiAndroid>
                            <div>
                                <span>GET IT ON</span>
                                <h3>GOOGLE PLAY</h3>
                            </div>
                        </div>
                    </button>
                    <button className='app-store'>
                        <div className="app_right">
                            <IoLogoAppleAppstore style={{fontSize:"2.3rem"}} />
                            <div>
                                <span>GET IT ON</span>
                                <h3>APP STORE</h3>
                            </div>
                        </div>
                    </button>
                </div>
            </div>
        </section>
    )
}

export default GetApp