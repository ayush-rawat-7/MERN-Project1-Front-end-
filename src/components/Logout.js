import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'

function Logout() {
    const history = useHistory();

    // using promises
    useEffect(() => {
        fetch('/logout', {
            method: 'get',
            headers: {
                Accept: 'application/json',
                "Content-Type": "application/json"
            },
            credentials: "include"
        }).then((res) => {
            history.push('/login', { replace: true });
            if(!res.status === 200) {
                const error = new Error(res.error);
                throw error;
            }
        }).catch((error) => {
            console.log(error);
        })
    }, [])
    
    return (
        <></>
    )
}

export default Logout
