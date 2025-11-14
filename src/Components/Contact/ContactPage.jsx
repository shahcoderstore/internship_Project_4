import React from 'react'
import DecHeader from '../DecHeader'
import "../../StylesCSS/ContactPageCSS/Contactpage.css"
function ContactPage() {
let name = 'Get in Touch'
    return (
        <>
            <DecHeader name = {name} />

            <section className="contact-section">
                <p className="subtitle">Contact us</p>
                <h2 className="title">Get In Touch</h2>

                <div className="contact-form" >
                    {/* First Row: Name and Email */}
                    <div className="form-group-row">
                        <input
                            type="text"
                            placeholder="Your Name"
                            className="text-input"
                            required
                        />
                        <input
                            type="email"
                            placeholder="Email Address"
                            className="text-input"
                            required
                        />
                    </div>

                    {/* Second Row: Phone and Subject */}
                    <div className="form-group-row">
                        <input
                            type="tel"
                            placeholder="Phone Number"
                            className="text-input"
                        />
                        <input
                            type="text"
                            placeholder="Subject"
                            className="text-input"
                        />
                    </div>

                    {/* Third Row: Message */}
                    <div className="form-group-full">
                        <textarea
                            placeholder="Your Message"
                            className="textarea-input"
                            required
                        ></textarea>
                    </div>

                    <button type="submit" className="submit-button">
                        SEND MESSAGE
                    </button>
                </div>
            </section>
        </>
    )
}

export default ContactPage