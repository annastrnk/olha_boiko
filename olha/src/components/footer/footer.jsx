import "./footer.scss";
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <div className="footer-wrapper">
      <div className="contact-info">
        <a href="#" className="img-wrapper">
          <img src="../../../public/images/icons8-instagram-20.png" alt="" />
          Instagram
        </a>

        <a href="#" className="img-wrapper">
          <img src="../../../public/images/icons8-telegram-20.png" alt="" />
          Telegram
        </a>

        <a href="mailto:someone@yoursite.com" className="img-wrapper">
          <img src="../../../public/images/icons8-mail-20.png" alt="" />
          Email
        </a>
      </div>
      <div>
        <a href="https://www.razomrehab.com.ua/links">Rasom Rehub</a>
      </div>
      <div className="general-info">
        <a href="#">Політика конфіденційності</a>
        <a href="#">Договір публічної оферти</a>
        <NavLink to="/faq">Часто задавані питання</NavLink>
        
      </div>
    </div>
  );
}
