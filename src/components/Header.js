import React from "react";
import { Link, useLocation } from "react-router-dom"; // Import Link and useLocation from React Router
import "../styles/header.css";
import About from "../pages/About.js";

function Header() {
  const location = useLocation();

  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">R/A</Link>
          </li>
          <li>
            <Link
              to="/About"
              className={location.pathname === "/About" ? "disabled" : ""}
            >
              More about me ?
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
