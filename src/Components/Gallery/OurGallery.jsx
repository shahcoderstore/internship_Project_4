import React from 'react'
import "../../StylesCSS/OurGalleryCSS/OurGallery.css"
function OurGallery() {
  return (
    <section className='section-ourgallery'>

        <span >
            Our Gallery
        </span>
        <h2>Awesome place good decoration to spend quality time</h2>
        <div className="ourgallery-imag-container">
            <img src="https://cafedine-bootstrap.vercel.app/images/gallery/img-1.jpg" alt="" />
            <img src="https://cafedine-bootstrap.vercel.app/images/gallery/img-2.jpg" alt=""  />
            <img src="https://cafedine-bootstrap.vercel.app/images/gallery/img-3.jpg" alt=""  />
        </div>
    </section>
  )
}

export default OurGallery