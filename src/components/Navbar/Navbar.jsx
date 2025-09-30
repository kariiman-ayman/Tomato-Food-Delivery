import React, { useState, useContext } from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("home");
  const { getTotalCartAmount } = useContext(StoreContext);
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavAndScroll = (section, menuName) => {
    setMenu(menuName);
    if (location.pathname !== "/") {
      navigate("/", { replace: false });
      setTimeout(() => {
        const el = document.getElementById(section);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      const el = document.getElementById(section);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="navbar">
      <div className="navbar-content">
        <Link to="/">
          <img
            src={assets.logo}
            alt="Logo"
            className="logo"
            onClick={() => window.scrollTo(0, 0)}
            style={{ cursor: "pointer" }}
          />
        </Link>
        <ul className="navbar-menu">
          <Link
            to="/"
            onClick={() => {
              setMenu("home");
              window.scrollTo(0, 0);
            }}
            className={menu === "home" ? "active" : ""}
          >
            Home
          </Link>
          <a
            href="#explore-menu"
            onClick={(e) => {
              e.preventDefault();
              handleNavAndScroll("explore-menu", "menu");
            }}
            className={menu === "menu" ? "active" : ""}
          >
            Menu
          </a>
          <a
            href="#app-download"
            onClick={(e) => {
              e.preventDefault();
              handleNavAndScroll("app-download", "mobile-app");
            }}
            className={menu === "mobile-app" ? "active" : ""}
          >
            Mobile App
          </a>
          <a
            href="#footer"
            onClick={() => setMenu("contact-us")}
            className={menu === "contact-us" ? "active" : ""}
          >
            Contact Us
          </a>
        </ul>
        <div className="navbar-right">
          <img src={assets.search_icon} alt="Search Icon" />
          <div className="navbar-search-icon">
            <Link to="/cart" onClick={() => window.scrollTo(0, 0)}>
              <img src={assets.basket_icon} alt="Basket Icon" />
            </Link>
            <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
          </div>
          <button
            onClick={() => {
              window.scrollTo(0, 0);
              setShowLogin(true);
            }}
            className="navbar-button"
          >
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
