import { NavLink } from "react-router-dom";
import "./header.scss";


export default function NavLinks({isClicked, closeMenu}) {

  const getNavLinkClass = ({ isActive }) => (isActive ? "nav-link active" : "nav-link");
  

  return (
    <header className="header-main">
      <div className="logo">
        <NavLink to="/" className={getNavLinkClass} onClick={()=>isClicked && closeMenu}>olha boiko</NavLink>
      </div>
      <nav className="header-nav">
        <NavLink to="/about" className={getNavLinkClass} onClick={()=>isClicked && closeMenu} >Про мене</NavLink>
        <NavLink to="/consultation" className={getNavLinkClass} onClick={()=>isClicked && closeMenu}>Консультації</NavLink>
        <NavLink to="/courses" className={getNavLinkClass}onClick={()=>isClicked && closeMenu}>Курси</NavLink>
        <NavLink to="/articles" className={getNavLinkClass}onClick={()=>isClicked && closeMenu}>Корисні статті</NavLink>
      </nav>
      <div>
      
        <button>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSezy_9ZUyf-ciWOQaIixui5nKyCkPId0OEGqB5VjHwUrS_sJg/viewform">Записатися</a>
        </button>
      </div>
    </header>
  );
}