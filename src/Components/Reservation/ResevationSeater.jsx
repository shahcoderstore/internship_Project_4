import React from 'react'
import "../../StylesCSS/ReservationCSS/ResevationSeater.css"
function ResevationSeater() {
    return (
        <section className='ResevationSeater-section'>
            <div className="ResevationSeater-left">
                <span>Reservation</span>
                <h2>Reserve your seat for betterment</h2>
                <div className="reservation-form-container">
                    <div>
                        <label htmlFor="name">
                            Name
                        </label>
                        <input type="text" id='name' placeholder='Full Name' />

                    </div>
                    <div>
                        <label htmlFor="email"  >
                            Email
                        </label>
                        <input type="email" id='email' placeholder='Email Address' />

                    </div>

                    <div>
                        <label htmlFor="number">Phone</label>
                        <input type="number" id='number' placeholder='Phone Number' />

                    </div>

                    <div>
                        <label for="persons">Number of Persons</label>
                        <select id="persons" >
                            <option value="1">1 person</option>
                            <option value="2">2 persons</option>
                            <option value="3">3 persons</option>
                            <option value="4">4 persons</option>
                            <option value="5+">5+ persons</option>
                        </select>

                    </div>

                    <div>
                        <label htmlFor="date">
                            Date
                        </label>
                        <input type="text" id='date' placeholder='Select your Date' />

                    </div>
                    <div>

                        <label htmlFor="time">
                            Time
                        </label>
                        <input type="text" id='time' placeholder='Select your Time' />

                    </div>

                </div>
            </div>
            <div className="ResevationSeater-right">
                <span>Check availabilty</span>
                <h3>Opening Times</h3>
                <div>
                    <h4>Monday - Thursday</h4>
                    <span>9.00-12.00</span>
                </div>
                <div>
                    <h4>Friday - Sunday</h4>
                    <span>2.00-8.00
                    </span>
                </div>
                <div>
                    <span className='call'>Call us for</span>
                    <h2 className='num'>02 34597879</h2>
                </div>
            </div>
        </section>
    )
}

export default ResevationSeater