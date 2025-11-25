import "./Auth.css";
import HeroBanner from "../../components/HeroBanner/HeroBanner"
import AuthImage1 from "../../assets/AuthBanner_01.png"
import { useState } from "react";

import { useUser } from "../../contexts/UserContext";

function LoginForm({ toggle }) {
    return (
        <form className="auth-form">
            Login Form
            <button onClick={toggle}>Register</button>
        </form>)
}

function RegisterForm({ toggle }) {

    const {user, login} = useUser();

    function registerUser(){
        //temporary function for testing
        login({
            "email" : "temp@gmail.com",
            "displayName" : "bob"
        });
    }

    return (
        <form className="auth-form" onSubmit={registerUser}>
            {user ? <h1>Current User: {user.displayName}</h1> : null}
            <input type="email" className="auth-input" placeholder="Email" />
            <input type="password" className="auth-input" placeholder="Password" />
            <input type="text" className="auth-input" placeholder="Display Name" />

            <div className="toggle-section">
                <button type="submit" className="primary-btn">Register Now</button>
                <div className="toggle-group">
                    <p>Already have an account?</p>
                    <button className="toggle-btn" onClick={toggle}>Log in</button>
                </div>
            </div>
        </form>
    )
}

export default function Auth() {
    // if registerForm is true, display register form, else display login form
    const [registerForm, setRegisterForm] = useState(true)
    function toggleForm() {
        setRegisterForm(!registerForm);
    }

    return (
        <div className="auth-layout">
            <HeroBanner image={AuthImage1} />
            <div className="auth-form-column">
                <h2>Unsinkable gains await</h2>
                {registerForm ? <RegisterForm toggle={toggleForm} /> : <LoginForm toggle={toggleForm} />}
            </div>
        </div>
    )
}