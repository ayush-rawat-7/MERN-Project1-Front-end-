import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import './css/home.css';
export default function Home() {
    const [username, setUsername] = useState('');
    const userHomePage = async () => {
        try {
            const res = await fetch('/getdata', {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            });
            const data = await res.json();
            setUsername(data.name)
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        userHomePage();
    }, [])
    return (
        <>
            <div className=" home-text">
                <div className="text-center">
                    <p className="pt-5 " style={{ color: '#00aaff' }}>WECLOME</p>
                    <h1>{username}</h1>
                    <h2>{username ? "Happy to see you back" : "We Are The MERN Developer"}</h2>
                </div>
            </div>
        </>
    )
}
