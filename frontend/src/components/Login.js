import React from 'react'
import '../assets/css/Login.css'

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
                        <label className="label-password">Email</label>
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
                <div className="group-social"></div>
                <div className="login-bottom">
                    <span>New Customer?</span>
                    <button>create your account</button>
                </div>
            </form>
        </div>
    )
}
