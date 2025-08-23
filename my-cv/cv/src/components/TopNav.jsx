import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import {NavLink} from "react-router-dom";

const navLinks = [
  {path: "/", label: "Home"},
  {path: "/projects", label: "Projects"},
  {path: "/contact", label: "Contact"},
];

export default function TopNav(){
  const location = useLocation();
  const {theme, toggleTheme} = useTheme();
  return(
    <nav className="topnav" aria-label="Section Navigation">
      {navLinks.map((link)=>(
        <NavLink 
          key={link.path} 
          to={link.path}
          className={location.pathname === link.path ? "active" : ""}
        >
          {link.label}
        </NavLink>
      ))}
      <button onClick={toggleTheme} className="theme-toggle" style={{marginLeft: "auto"}} aria-label="Toggle Theme">
        {theme === "dark" ? "🌞" : "🌙"}
      </button>
    </nav>
  )
}