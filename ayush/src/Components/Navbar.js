import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };
  const[navBar,setNavBar]=useState(false);
  const navChange=()=>{
    if(window.scrollY>=100){
        setNavBar(true);
    }
    else{
        setNavBar(false);
    }
  }
  window.addEventListener("scroll",navChange);
  return (
    <div className={navBar?"header header-bg":"header"}>
      <Link to={"/Home"}>
        <h1>AYUSH SAHU</h1>
      </Link>
      <ul className={click? "nav-menu active":"nav-menu"} > 
        <li>
          <Link to={"/Home"}>Home</Link>
        </li>
        <li>
          <Link to={"/Contact"}>Contact</Link>
        </li>
        <li>
          <Link to={"/Project"}>Project</Link>
        </li>
        <li>
          <Link to={"/About"}>About</Link>
        </li>
      </ul>
      <div className="hamBurger" onClick={handleClick}>
        {click ? (
          <FaTimes size={20} style={{ color: "#fff" }} />
        ) : (
          <FaBars size={20} style={{ color: "#fff" }} />
        )}
      </div>
    </div>
  );
};

export default Navbar;
