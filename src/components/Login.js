import React, { useState , useContext} from 'react'
import loginPic from '../images/login.svg'
import { useHistory } from 'react-router-dom';
import { UserContext } from '../App';

export default function Login() {

    const { state, dispatch } = useContext(UserContext);

    const history = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const loginUser = async (e) => {
        e.preventDefault();
        const res = await fetch('/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email, password
            })
        });
        const data = await res.json();
        if (res.status === 400 || !data) {
            window.alert("Invalid Details");
        } else {
            dispatch({ type: "USER", payload: true });
            window.alert("Login Successful");
            history.push('/');
        }
    }

    return (
        <>
            <div className="container mt-5 p-5">
                <div className="row">
                    <form method="POST" className="col-6 w-50 align-self-center">
                        <div className="container">
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control w-75" name="email" id="email" aria-describedby="emailHelp" />
                                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} name="password" className="form-control w-75" id="password" />
                            </div>
                            <button type="submit" className="btn btn-primary" onClick={loginUser} >Login</button>
                        </div>
                    </form>
                    <div className="container col-6">
                        <img src={loginPic} alt="pic" />
                    </div>
                </div>
            </div>
        </>
    )
}
