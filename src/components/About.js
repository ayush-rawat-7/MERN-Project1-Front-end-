import React, { useEffect } from 'react'
import ayushPic from '../images/Ayush.jpg'
import { useHistory } from 'react-router-dom'
export default function About() {
    const history = useHistory();
    const callAboutPage = async () => {
        try {
            const res = await fetch('/about', {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                credentials: "include"   //send cookies to backend
            });
            const data = await res.json();
            console.log(data);

            if(!res.status === 200) {
                const error = new Error(res.error);
                throw error;
            }
        } catch (error) {
            console.log(error);
            history.push('/login')
        }
    }

    useEffect(() => {
        callAboutPage();
    }, [])

    return (
        <>
            <div className="container">
                <form method="GET">
                    <div className="row">
                        <div className="col-md-4">
                            <img src={ayushPic} alt="Ayush" width="200px" />
                        </div>

                        <div className="col-md-6">
                            <h5>Ayush Rawat</h5>
                            <h6>Web Developer</h6>
                            <p className="mt-3 mb-5">RANKINGS <span>1/10</span></p>

                            <ul className="nav nav-tabs" role="tablist">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-controls="page" id="home-tab" data-toggle="tab" role="tab" href="#home">About</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" aria-controls="page" id="profile-tab" data-toggle="tab" role="tab" href="#profile">Profile</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-2">
                            <input type="submit" className="form-control" name="btnAddMore" value="Edit Profile" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4 mt-4">
                            <p>Work Links</p>
                            <a href="https://www.youtube.com/watch?v=kHEhhV3EyPU&list=PLwGdqUZWnOp3t3qT7pvAznwUDzKbhEcCc&index=27">Youtube</a><br />
                            <a href="https://www.youtube.com/watch?v=kHEhhV3EyPU&list=PLwGdqUZWnOp3t3qT7pvAznwUDzKbhEcCc&index=27">Youtube</a><br />
                            <a href="https://www.youtube.com/watch?v=kHEhhV3EyPU&list=PLwGdqUZWnOp3t3qT7pvAznwUDzKbhEcCc&index=27">Youtube</a><br />
                            <a href="https://www.youtube.com/watch?v=kHEhhV3EyPU&list=PLwGdqUZWnOp3t3qT7pvAznwUDzKbhEcCc&index=27">Youtube</a><br />
                            <a href="https://www.youtube.com/watch?v=kHEhhV3EyPU&list=PLwGdqUZWnOp3t3qT7pvAznwUDzKbhEcCc&index=27">Youtube</a><br />
                        </div>
                        <div className="col-md-8 pl-5">
                            <div className="tab-content profile-tab" id="myTabContent">
                                <div className="tab-pane fade show active" id="home" role="tabpanel" area-aria-labelledby="home-tab">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label>User ID</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>46646546454</p>
                                        </div>
                                    </div>
                                    <div className="row mt-3">
                                        <div className="col-md-6">
                                            <label>Name</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>Ayush Rawat</p>
                                        </div>
                                    </div>
                                    <div className="row mt-3">
                                        <div className="col-md-6">
                                            <label>Email</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>example@gmail.com</p>
                                        </div>
                                    </div>
                                    <div className="row mt-3">
                                        <div className="col-md-6">
                                            <label>phone</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>7878787878</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="tab-pane fade " id="profile" role="tabpanel" area-aria-labelledby="profile-tab">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label>Experience</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>Expert</p>
                                        </div>
                                    </div>
                                    <div className="row mt-3">
                                        <div className="col-md-6">
                                            <label>Hourly Rate</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>50000</p>
                                        </div>
                                    </div>
                                    <div className="row mt-3">
                                        <div className="col-md-6">
                                            <label>Total Projects</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>25</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}
