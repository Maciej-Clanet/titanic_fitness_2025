import "./Auth.css";
import HeroBanner from "../../components/HeroBanner/HeroBanner"
import AuthImage1 from "../../assets/AuthBanner_01.png"
import { useState } from "react";

import { useUser } from "../../contexts/UserContext";
import axios from "axios";

function LoginForm({ toggle }) {

    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");

    const {login} = useUser();
    function loginUser(event) {
        event.preventDefault();
        const endpoint = "http://127.0.0.1:8001/auth/login";
        const formData = {
            "password": password,
            "email": email
        }

        axios.post(endpoint, formData)
        .then(res => {
            login(res.data)
        })
        .catch(err => {
            setError(err?.response?.data?.detail || "Error occured")
        });


    }

    return (
        <form className="auth-form" onSubmit={loginUser}>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="auth-input" placeholder="Email" />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="auth-input" placeholder="Password" />
            {error ? <p>{error}</p> : null}
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
    const { login } = useUser();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");

    function registerUser(event) {
        event.preventDefault()

        const endpoint = "http://127.0.0.1:8001/auth/register";
        const formData = {
            "username": username,
            "password": password,
            "email": email
        }

        axios.post(endpoint, formData)
        .then(res => {
            login(res.data)
        })
        .catch(err => {
            setError(err?.response?.data?.detail || "Error occured")
        });

    }

    return (
        <form className="auth-form" onSubmit={registerUser}>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="auth-input" placeholder="Email" />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="auth-input" placeholder="Password" />
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="auth-input" placeholder="Display Name" />
            {error ? <p>{error}</p> : null}
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