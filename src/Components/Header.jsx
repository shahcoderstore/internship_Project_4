import React, { useState } from 'react'
import "../StylesCSS/Header.css"
import { NavLink } from 'react-router'
import { IoIosMenu } from "react-icons/io";
function Header() {
  let [toggle, setToggle] = useState(false);

  return (
    <section className='header-section'>
      <div className="header-left">
        <img src="	https://cafedine-bootstrap.vercel.app/images/logo.png" alt="" srcSet="" />
      </div>
      <div className={`header-right ${toggle ? "active" : ""}`}>
        <ul>
          <li>
            <NavLink to={"/"}>HOME</NavLink>

          </li>
          <li>
            <NavLink to={"about"}>About</NavLink>
          </li>
          <li>
            <NavLink to={"recipes"}>RECIPES</NavLink>
          </li>
          <li>
            <NavLink to={"gallery"}>GALLERY</NavLink>
          </li>
          <li>

            <NavLink to={"reservation"}>RESERVATION</NavLink>



          </li>
          <li>
            <NavLink to={"blog"}>BLOG </NavLink>

          </li>
          <li>
            <NavLink to={"contact"}>CONTACT</NavLink>
          </li>

        </ul>

      </div>


      <button className='menu-button' onClick={() => setToggle((prev) => !prev)}>
        <IoIosMenu />
      </button>


    </section>
  )
}

export default Header
