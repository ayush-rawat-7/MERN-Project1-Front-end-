import React from 'react'
import { NavLink } from 'react-router-dom'
export default function Error() {
    return (
        <>
            <div className="container d-flex flex-column align-items-center">
                <h1>404</h1>
                <h2>Not Found</h2>
            </div>
            <NavLink to="/"><button>BACK TO HOME</button></NavLink>
        </>
    )
}
