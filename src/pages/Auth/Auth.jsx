import "./Auth.css";
import HeroBanner from "../../components/HeroBanner/HeroBanner"
import AuthImage1 from "../../assets/AuthBanner_01.png"
import { useState } from "react";

import { useUser } from "../../contexts/UserContext";

function LoginForm({ toggle }) {

    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    return (
        <form className="auth-form">
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="auth-input" placeholder="Email" />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="auth-input" placeholder="Password" />
            <div className="toggle-section">
                <button type="submit" className="primary-btn">Login </button>
                <div className="toggle-group">
                    <p>Don't have an account?</p>
                    <button className="toggle-btn" onClick={toggle}>Register</button>
                </div>
            </div>
        </form>)
}

function RegisterForm({ toggle }) {
    const { user, login } = useUser();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    function registerUser() {
        login({
            "username": "goober",
            "email": "goober@goobco.com"
        })
    }

    return (
        <form className="auth-form" onSubmit={registerUser}>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="auth-input" placeholder="Email" />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="auth-input" placeholder="Password" />
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="auth-input" placeholder="Display Name" />

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