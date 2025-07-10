import "./footer.scss";
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <div className="footer-wrapper">
      <div className="contact-info">
        <a href="https://www.instagram.com/olha_boiko?igsh=azc4OG5wdWpwc3hk" >
          <img src="/images/icons8-instagram-75.png" alt="" />
        </a>

        <a href="https://t.me/tazove_dno_vuno_i_tereveni" >
          <img src="/images/icons8-telegram-75.png" alt="" />
        </a>

        <a href="mailto:someone@yoursite.com" >
          <img src="/images/icons8-mail-75.png" alt="" />
        </a>
      </div>
      <div>
        <a href="https://www.razomrehab.com.ua/links">Rasom Rehub</a>
      </div>
      <div className="general-info">
        <a href="#">Умови надання послуг</a>
        <a href="#">Юридична інформація</a>
        
      </div>
    </div>
  );
}
