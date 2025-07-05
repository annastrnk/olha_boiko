import { useState } from "react";
import NavLinks from "./navLinks";
import { MdOutlineMenu } from "react-icons/md";
import { MdClose } from "react-icons/md";
import { NavLink } from "react-router-dom";

export default function MobileHeader() {
  const [click, setClick] = useState(false);

  const Hamburger = (
    <MdOutlineMenu
      className="hamburgerMenu"
      size="30px"
      color="black"
      onClick={() => setClick(!click)}
    />
  );

  const Close = (
    <MdClose
      className="hamburgerMenu"
      size="30px"
      color="black"
      onClick={() => setClick(!click)}
    />
  );
  const closeMenu = () => setClick(false);

  return (
    <nav className="mobileNavigation">
      <h2 className="logo">olha boiko</h2>
      {click ? Close : Hamburger}
      {click && <NavLinks isClicked={true} closeMenu={closeMenu} />}
    </nav>
  );
}
