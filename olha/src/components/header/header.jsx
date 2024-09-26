
import { Link, NavLink } from "react-router-dom"
import "./header.scss"

export default function Header() {

  return(
    <header className="header-main">
      <div classNam="logo">
      <NavLink to="/" >olha boiko</NavLink>
      </div>
      <nav className="header-nav">
        <NavLink to="/about">Про мене</NavLink>
        <NavLink to="/consultation"> Консультації</NavLink>
        <NavLink to="/courses">Курси</NavLink>
        <NavLink to="/articles">Корісні статті</NavLink>
      </nav>
      <div>
        <button>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSezy_9ZUyf-ciWOQaIixui5nKyCkPId0OEGqB5VjHwUrS_sJg/viewform">записатися</a>
        </button>
      </div>
    </header>
  
  
)
  }