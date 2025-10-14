import "./DesktopHeader.css";
import LogoImage from "../../assets/Logo.png"
import { NavLink } from "react-router";

export default function DesktopHeader() {
    return (
        <header className="desktop-header">
            <div className="logo">
                <img src={LogoImage} alt="Titanic Fitness Logo" />
                <h1>TITANIC FITNESS</h1>
            </div>
            <nav className="desktop-nav">
                <NavLink to="/" className="nav-btn">Home</NavLink>
                <NavLink to="/workouts" className="nav-btn">Workouts</NavLink>
                <NavLink to="/Auth" className="primary-btn">Join</NavLink>
            </nav>
        </header>
    )
}