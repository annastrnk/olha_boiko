import NavLinks from "../navLinks/navLinks";
import './desktopHeader.scss'

export default function DesktopHeader() {
  return (
    <nav className="header-main desktopNavigation">
      <h2 className="logo">olha boiko</h2>
      <NavLinks />
      <button className="btn-main">
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSezy_9ZUyf-ciWOQaIixui5nKyCkPId0OEGqB5VjHwUrS_sJg/viewform">
          Записатися
        </a>
      </button>
    </nav>
  );
}
