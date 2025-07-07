import { NavLink } from "react-router-dom";
import "./header.scss";

export default function NavLinks({ isClicked, closeMenu }) {
  const getNavLinkClass = ({ isActive }) =>
    isActive ? "nav-link active" : "nav-link";

  return (
    <header className="header-main">
          <h2 className="logo">olha boiko</h2> 
      <nav className="header-main-nav">    
       <NavLink
          to="/"
          className={getNavLinkClass}
          onClick={() => {
            if (isClicked) closeMenu();
          }}
        >
          Головна
        </NavLink>
        <NavLink
          to="/about"
          className={getNavLinkClass}
          onClick={() => {
            if (isClicked) closeMenu();
          }}
        >
          Про мене
        </NavLink>
        <NavLink
          to="/consultation"
          className={getNavLinkClass}
          onClick={() => {
            if (isClicked) closeMenu();
          }}
        >
          Консультації
        </NavLink>
        <NavLink
          to="/courses"
          className={getNavLinkClass}
          onClick={() => {
            if (isClicked) closeMenu();
          }}
        >
          Курси
        </NavLink>
        <NavLink
          to="/articles"
          className={getNavLinkClass}
          onClick={() => {
            if (isClicked) closeMenu();
          }}
        >
          Корисні статті
        </NavLink>
      </nav>
      <div>
        <button className="btn-main">
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSezy_9ZUyf-ciWOQaIixui5nKyCkPId0OEGqB5VjHwUrS_sJg/viewform">
            Записатися
          </a>
        </button>
      </div>
    </header>
  );
}
