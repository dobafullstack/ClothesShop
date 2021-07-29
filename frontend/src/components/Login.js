import React from 'react'
import '../assets/css/Login.css'

import FacebookImg from '../assets/imgs/facebook-circle.png'
import GoogleImg from '../assets/imgs/google.png'
import AppleImg from '../assets/imgs/apple.png'

export default function Login() {
    return (
        <div className="login-wrapper h-100">
            <span className="span-title">If you have an account with us, please log in.</span>
            <form>
                <div className="group-item">
                    <label className="label-email">Email</label>
                    <input placeholder="Enter your email"/>
                </div>
                <div className="group-item">
                    <div className="password-text">
                        <label className="label-password">Password</label>
                        <span>Lost your password?</span>
                    </div>
                    <input placeholder="Enter your password"/>
                </div>
                <div className="group-item">
                    <button className="btn-login">Login</button>
                </div>
                <span className="or-text">
                    <h6><span>or</span></h6>
                </span>
                <div className="group-social text-center w-100 mt-5">
                    <img src={FacebookImg}/>
                    <img src={GoogleImg}/>
                    <img src={AppleImg}/>
                </div>
                <div className="login-bottom">
                    <span>New Customer?</span>
                    <button>create your account</button>
                </div>
            </form>
        </div>
    )
}
