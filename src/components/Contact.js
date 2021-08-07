import React, { useEffect, useState } from 'react'
import './css/contact.css'

export default function Contact() {
    const [userData, setUserData] = useState({ name: "", email: "", phone: "", message: "" });

    const userContact = async () => {
        try {
            const res = await fetch('/getdata', {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            });
            const data = await res.json();
            setUserData({ ...userData, name: data.name, email: data.email, phone: data.phone })
            if (!res.status === 200) {
                const error = new Error(res.error);
                throw error;
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        userContact();
    }, [])

    // storing data in state
    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setUserData({ ...userData, [name]: value });
    }

    // send data to backend
    const contactForm = async (e) => {
        e.preventDefault();
        const { name, email, phone, message } = userData;
        const res = await fetch('/contact', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name, email, phone, message
            })
        });
        const data = await res.json();
        if (!data) {
            console.log("message not sent");
        } else {
            window.alert("Message Sent");
            setUserData({ ...userData, message: "" });
        }
    }

    return (
        <>
            <div className="container-fluid ">
                <div className="container-fluid mt-5 p-3  ">
                    <div className="row mx-auto ">
                        <div className="col-4 d-flex justify-content-center">
                            <div className="card w-75 col-4">
                                <div className="card-body">
                                    <h5 className="card-title" style={{ color: 'green' }}>Phone</h5>
                                    <p className="card-text" style={{ color: 'blue' }}>+91 {userData.phone}</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-4 d-flex justify-content-center">
                            <div className="card w-75 col-4">
                                <div className="card-body">
                                    <h5 className="card-title" style={{ color: 'green' }}>Email</h5>
                                    <p className="card-text" style={{ color: 'blue' }}>{userData.email}</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-4 d-flex justify-content-center">
                            <div className="card w-75 col-4">
                                <div className="card-body">
                                    <h5 className="card-title" style={{ color: 'green' }}>Name</h5>
                                    <p className="card-text" style={{ color: 'blue' }}>{userData.name}</p>
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
                        <form method="POST" id="contact_form">
                            <div className="d-flex justify-content-between mt-4">
                                <div className="mb-3">
                                    <input type="text" className="form-width" name="name" id="name" placeholder="Your Name" defaultValue={userData.name} onChange={handleInput} required="true" />
                                </div>
                                <div className="mb-3">
                                    <input type="email" className="form-width" name="email" id="email" placeholder="Your Email" defaultValue={userData.email} onChange={handleInput} required="true" />
                                </div>
                                <div className="mb-3">
                                    <input type="number" className="form-width" id="phone" name="phone" placeholder="Your Phone" defaultValue={userData.phone} onChange={handleInput} required="true" />
                                </div>
                            </div>
                            <div className="mb-3 mt-4">
                                <textarea className="form-control" name="message" placeholder="Message" value={userData.message} onChange={handleInput} rows="15"></textarea>
                            </div>
                            <div>
                                <button type="submit" onClick={contactForm} className="btn btn-primary">Send Message</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
