import React from 'react'
import  '../StylesCSS/DecHeader.css'
function DecHeader(prop) {
    
    
  return (
    <section className='DecHeader-section'>
        <div className="imag-conrainer">
        </div>
            <h1>{prop.name}</h1>
    </section>
  )
}

export default DecHeader