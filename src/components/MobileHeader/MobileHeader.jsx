import "./MobileHeader.css";
import LogoImage from "../../assets/Logo.png";
import MenuIcon from "../../assets/MenuIcon.svg";
import { NavLink } from "react-router";
import { useState, useEffect } from "react";

export default function MobileHeader() {
  const [open, setOpen] = useState(false);


  // Automatically close nav when window width exceeds 768px (for example)
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 540 && open) {
        setOpen(false);
      }
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [open]);
  function toggleOpen() {
    setOpen(!open);
  }

  const navMenu = (
    <nav className="mobile-nav">
      <NavLink to="/" className="nav-btn">
        Home
      </NavLink>
      <NavLink to="/workouts" className="nav-btn">
        Workouts
      </NavLink>
      <NavLink to="/Auth" className="primary-btn">
        Join
      </NavLink>
    </nav>
  );

  let toggleClass = "nav-toggle";
  if(open){
    toggleClass = "nav-toggle open"
  }

  return (
    <header className="mobile-header">
      <div className="logo">
        <img src={LogoImage} alt="Titanic Fitness Logo" />
        <h1>TITANIC FITNESS</h1>
      </div>
      <img className={toggleClass} src={MenuIcon} onClick={toggleOpen} />
      {open ? navMenu : null}
    </header>
  );
}
