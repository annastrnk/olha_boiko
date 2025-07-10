import { useState } from "react";
import NavLinks from "../navLinks/navLinks";
import { MdOutlineMenu, MdClose } from "react-icons/md";
import './mobileHeader.scss'

export default function MobileHeader() {
  const [click, setClick] = useState(false);

  const toggleMenu = () => setClick((prev) => !prev);
  const closeMenu = () => setClick(false);

  return (
    <div className={`mobileNavigation ${click ? "open" : "closed"}`}>
      <div className="mobileHeader-bar">
        <h2 className="logo">olha boiko</h2>
        {click ? (
          <MdClose className="hamburgerMenu" size="30px" onClick={toggleMenu} />
        ) : (
          <MdOutlineMenu className="hamburgerMenu" size="30px" onClick={toggleMenu} />
        )}
      </div>

      {click && (
        <div className="mobileNavigation-menu">
          <NavLinks isClicked={true} closeMenu={closeMenu} />
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSezy_9ZUyf-ciWOQaIixui5nKyCkPId0OEGqB5VjHwUrS_sJg/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-main"
          >
            Записатися
          </a>
        </div>
      )}
    </div>
  );
}





// import { useState } from "react";
// import NavLinks from "./navLinks";
// import { MdOutlineMenu, MdClose } from "react-icons/md";

// export default function MobileHeader() {
//   const [click, setClick] = useState(false);
//   const toggle = () => setClick(!click);

//   return (
//     <div className="mobileNavigation">
//       <h2 className="logo">olha boiko</h2>
//       {click ? (
//         <MdClose className="hamburgerMenu" size="30px" onClick={toggle} />
//       ) : (
//         <MdOutlineMenu className="hamburgerMenu" size="30px" onClick={toggle} />
//       )}
//       {click && <NavLinks isClicked={true} closeMenu={() => setClick(false)} />}
//     </div>
//   );
// }


// import { useState } from "react";
// import NavLinks from "./navLinks";
// import { MdOutlineMenu } from "react-icons/md";
// import { MdClose } from "react-icons/md";

// export default function MobileHeader() {
//   const [click, setClick] = useState(false);

//   const Hamburger = (
//     <MdOutlineMenu
//       className="hamburgerMenu"
//       size="30px"
//       color="black"
//       onClick={() => setClick(!click)}
//     />
//   );

//   const Close = (
//     <MdClose
//       className="hamburgerMenu"
//       size="30px"
//       color="black"
//       onClick={() => setClick(!click)}
//     />
//   );
//   const closeMenu = () => setClick(false);

//   return (
//     <nav className="mobileNavigation">
//       <h2 className="logo">olha boiko</h2>
//       {click ? Close : Hamburger}
//       {click && <NavLinks isClicked={true} closeMenu={closeMenu} />}
//     </nav>
//   );
// }
