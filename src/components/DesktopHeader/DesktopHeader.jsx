import "./DesktopHeader.css";
import LogoImage from "../../assets/Logo.png"
import { NavLink } from "react-router";
import { useUser } from "../../contexts/UserContext";

export default function DesktopHeader() {
    const {user, logout} = useUser();
    return (
        <header className="desktop-header">
            <div className="logo">
                <img src={LogoImage} alt="Titanic Fitness Logo" />
                <h1>TITANIC FITNESS</h1>
            </div>
            <nav className="desktop-nav">
                <NavLink to="/" className="nav-btn">Home</NavLink>
                <NavLink to="/workouts" className="nav-btn">Workouts</NavLink>
                {
                    user ? <button className="primary-btn" onClick={logout}>Logout</button>
                    : <NavLink to="/Auth" className="primary-btn">Join</NavLink>
                }
                
            </nav>
        </header>
    )
}