import React, { useState } from "react";
import "./Menu.css";
import { FaHome, FaUserFriends, FaAddressBook, FaUserAlt, FaBell, FaCalendar } from "react-icons/fa";
import Link from "next/link";

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="menu-container">
      {/* Header with Menu icons */}
      <header>
        <div className="nav-img" onClick={toggleMenu}>
          <img src="asset/menu2.png" width={80} height={80}  />
        </div>
        <div className="login-btn">
            <p>Do you have any account ?</p>

            <button className="login-btn-org" >
              Sign up
            </button>
          </div>
        <div className="">
          <FaBell style={{ fontSize: "50px", color: "#212529" }} />

          
        </div>
      </header>

      {/* Sidebar Menu */}
      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <button className="close-btn" onClick={toggleMenu}>
          &times;
        </button>
        <div className="menu-content">
          <div className="menu-header">
            <Logo />
           
          </div>
          <nav>
            <ul className="menu-list">
              <li>
                <Link href="/">
                  <FaHome className="icons" /> Home
                </Link>
              </li>
              <li>
                <Link href="dash-board">
                  <FaUserFriends className="icons" /> Dash board
                </Link>
              
              </li>
              {/* Event List */}
              <li>
                <Link href="/event">
                  <FaCalendar className="icons" /> Events
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <FaAddressBook className="icons" /> Contact us
                </Link>
              </li>
             
              {/* Help */}
              <li>
                <Link href="/help">
                  <FaUserFriends className="icons" /> Help
                </Link>
              </li>
              <li>
                <Link href="/help">
                  <FaUserFriends className="icons" /> Chat 
                </Link>
              </li>
              
              
            </ul>
          </nav>
        </div>
      </div>

      {/* Overlay */}
      {isOpen && <div className="overlay" onClick={toggleMenu}></div>}
    </div>
  );
}

const Logo = () => {
  return(

    <div className="logo">
   
      <img src="/asset/logo.png" alt="" />
      <div className="nav-text">
        <h1>EDU QUICK</h1>
        <p>HIDAYA E-LEARNING</p>
      </div>
    
    </div>
 
  )
};

const Notification = ()=>{
  return(
    <FaBell />
  )
}

export { Logo };
