import React from 'react'
import './css/contact.css'

export default function Contact() {
    return (
        <>
            <div className="container-fluid ">
                <div className="container-fluid mt-5 p-3  ">
                    <div className="row mx-auto ">
                        <div className="col-4 d-flex justify-content-center">
                            <div className="card w-75 col-4">
                                <div className="card-body">
                                    <h5 className="card-title" style={{ color: 'green' }}>Phone</h5>
                                    <p className="card-text" style={{ color: 'blue' }}>+91 8787878787</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-4 d-flex justify-content-center">
                            <div className="card w-75 col-4">
                                <div className="card-body">
                                    <h5 className="card-title" style={{ color: 'green' }}>Email</h5>
                                    <p className="card-text" style={{ color: 'blue' }}>rwat905@gmail.com</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-4 d-flex justify-content-center">
                            <div className="card w-75 col-4">
                                <div className="card-body">
                                    <h5 className="card-title" style={{ color: 'green' }}>Address</h5>
                                    <p className="card-text" style={{ color: 'blue' }}>New Delhi, Dwarka</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* message part */}
            <div className="container mt-4">
                <div className="row">
                    <div className="col-lg-10 offset-lg-1">
                        <div className="title mx-auto">
                            <h2 className="text-center">Get in touch</h2>
                        </div>
                        <form id="contact_form">
                            <div className="d-flex justify-content-between mt-4">
                                <div className="mb-3">
                                    <input type="text" className="form-width" id="name" placeholder="Your Name" required="true" />
                                </div>
                                <div className="mb-3">
                                    <input type="email" className="form-width" id="email" placeholder="Your Email" required="true" />
                                </div>
                                <div className="mb-3">
                                    <input type="number" className="form-width" id="phone" placeholder="Your Phone" required="true" />
                                </div>
                            </div>
                            <div className="mb-3 mt-4">
                                <textarea className="form-control" placeholder="Message" rows="15"></textarea>
                            </div>
                            <div>
                                <button type="submit" className="btn btn-primary">Send Message</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
