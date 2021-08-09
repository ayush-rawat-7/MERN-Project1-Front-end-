import React, { useEffect, useState, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { UserContext } from '../App';

function Logout() {
    const { state, dispatch } = useContext(UserContext);
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
            dispatch({ type: "USER", payload: false });
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
