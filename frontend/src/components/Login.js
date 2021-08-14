import React, { useState } from "react";
import "../assets/css/Login.css";

import FacebookImg from "../assets/imgs/facebook-circle.png";
import GoogleImg from "../assets/imgs/google.png";
import AppleImg from "../assets/imgs/apple.png";

import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "../redux/actions/auth.action";
import ReactLoading from "react-loading";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const auth = useSelector((state) => state.auth);

    const handleLogin = () => {
        if (email === "" || password === "") {
            return;
        }

        dispatch(login(email, password));
    };

    return (
        <div className='login-wrapper h-100'>
            {auth.isLogin ? (
                <div className='group-item m-0 pt-3'>
                    <button className='btn-login' onClick={() => dispatch(logout())}>Logout</button>
                </div>
            ) : (
                <div>
                    <span className='span-title'>
                        If you have an account with us, please log in.
                    </span>
                    <div className='group-item'>
                        <label className='label-email'>Email</label>
                        <input
                            type='email'
                            placeholder='Enter your email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className='group-item'>
                        <div className='password-text'>
                            <label className='label-password'>Password</label>
                            <span>Lost your password?</span>
                        </div>
                        <input
                            type='password'
                            placeholder='Enter your password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <div className='group-item'>
                        <button
                            className='btn-login'
                            onClick={() => handleLogin()}>
                            Login
                        </button>
                    </div>
                    <span className='or-text'>
                        <h6>
                            <span>or</span>
                        </h6>
                    </span>
                    <div className='group-social text-center w-100 mt-5'>
                        <img src={FacebookImg} alt="icon"/>
                        <img src={GoogleImg} alt="icon"/>
                        <img src={AppleImg} alt="icon"/>
                    </div>
                    <div className='d-flex justify-content-center mt-5'>
                        {auth.isLoading ? (
                            <ReactLoading
                                height={"10%"}
                                width={"10%"}
                                color={"#121212"}
                                type='spin'
                            />
                        ) : null}
                    </div>
                    <div className='login-bottom'>
                        <span>New Customer?</span>
                        <button>create your account</button>
                    </div>
                </div>
            )}
        </div>
    );
}
