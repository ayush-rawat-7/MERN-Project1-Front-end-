import React, { useState } from 'react'
import registration from '../images/registration.jpg'
import { NavLink, useHistory } from 'react-router-dom'

export default function Signup() {
    const history = useHistory() //useHistory for redirection.

    const [user, setUser] = useState({
        name: '',
        email: '',
        phone: '',
        work: '',
        password: '',
        cpassword: ''
    });
    let name, value;
    const handleChange = (e) => {
        name = e.target.name;
        value = e.target.value;
        setUser({ ...user, [name]: value });
    }

    const PostData = async (e) => {
        e.preventDefault();
        const { name, email, work, phone, password, cpassword } = user;

        //add proxy in package.json file to make requests on backend server instead of front end server
        const res = await fetch("/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name,
                email,
                work,
                phone,
                password,
                cpassword
            })
        });
        const data = await res.json();
        if (data.status === 422 || !data) {
            window.alert("INVALID REGISTRATION");
            console.log("INVALID REGISTRATION");
        } else {
            console.log("REGISTRATION Successful");
            history.push("/login"); //to take user to login page
        }
    }

    return (
        <>
            <div className="signup">
                <div className=" container ">
                    <div className="signup-content mt-5">
                        <div className="signup-form">
                            <h2 className="form-title">Sign up</h2>
                            <form method="POST" className="register-form">
                                <div className="form-group">
                                    <label htmlFor="name"><i className="zmdi zmdi-account icons"></i>
                                    </label>
                                    <input type="text" name="name" id="name" autoComplete="off"
                                        value={user.name} onChange={handleChange} placeholder="Your Name" />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="email"><i className="zmdi zmdi-email icons"></i>
                                    </label>
                                    <input type="email" name="email" id="email" autoComplete="off"
                                        value={user.email} onChange={handleChange} placeholder="Your Email" />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="phone"><i className="zmdi zmdi-phone-in-talk icons"></i>
                                    </label>
                                    <input type="number" name="phone" id="phone" autoComplete="off"
                                        value={user.phone} onChange={handleChange} placeholder="Your Phone" />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="work"><i className="zmdi zmdi-slideshow icons"></i>
                                    </label>
                                    <input type="text" name="work" id="work" autoComplete="off"
                                        value={user.work} onChange={handleChange} placeholder="Your Profession" />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="password"><i className="zmdi zmdi-lock icons"></i>
                                    </label>
                                    <input type="password" name="password" id="password" autoComplete="off"
                                        value={user.password} onChange={handleChange} placeholder="Your Password" />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="cpassword"><i className="zmdi zmdi-lock icons"></i>
                                    </label>
                                    <input type="password" name="cpassword" id="cpassword" autoComplete="off"
                                        value={user.cpassword} onChange={handleChange} placeholder="Confirm Password" />
                                </div>

                                <div className="form-group form-button">
                                    <input type="submit" name="signup" id="signup" className="form-submit" value="register" onClick={PostData} />
                                </div>

                            </form>
                        </div>
                        <div className="signup-image">
                            <figure>
                                <img src={registration} className="register-img" alt="register pic" width="400px" />
                            </figure>
                            <NavLink to="/login">I am already registered</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
