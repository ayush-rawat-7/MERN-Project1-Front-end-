import React, { useEffect, useState } from 'react'
import ayushPic from '../images/Ayush.jpg'
import { useHistory } from 'react-router-dom'
export default function About() {
    const [userData, setUserData] = useState([]);

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
            setUserData(() => data);
            console.log(userData);
            if (!res.status === 200) {
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
                            <img src={userData.name === "Ayush Rawat" ? ayushPic : "data:image/jpeg;base64,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"} alt="Ayush" width="200px" />
                        </div>

                        <div className="col-md-6">
                            <h5>{userData.name}</h5>
                            <h6>{userData.work}</h6>
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
                                            <p>{userData.name}</p>
                                        </div>
                                    </div>
                                    <div className="row mt-3">
                                        <div className="col-md-6">
                                            <label>Email</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>{userData.email}</p>
                                        </div>
                                    </div>
                                    <div className="row mt-3">
                                        <div className="col-md-6">
                                            <label>phone</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>{userData.phone}</p>
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
