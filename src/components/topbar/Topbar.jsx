/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from "react";
import "./topbar.css";
import { BsPersonLinesFill } from "react-icons/Bs";
import { GrMail } from "react-icons/Gr";
import { GiHamburgerMenu } from "react-icons/Gi";
import Menu from "../../menu/Menu";
const Topbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className="topbar">
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            Roman.
          </a>
          <div className="itemcontainer">
            <BsPersonLinesFill className="icon" />
            <span>+977 9860996585</span>
          </div>
          <div className="itemcontainer">
            <GrMail className="icon" />
            <span>romanpudasaini78@gmail.com</span>
          </div>
        </div>
        <div className="right">
          <div className="itemcontainer">
            <GiHamburgerMenu className="icons" onClick={toggleMenu} />
          </div>
          {isMenuOpen && <Menu />}
        </div>
      </div>
    </div>
  );
};

export default Topbar;
