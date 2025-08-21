import React from "react";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  {path: "/", label: "Home"},
  {path: "/projects", label: "Projects"},
  {path: "/contact", label: "Contact"},
];

export default function TopNav(){
  const location = useLocation();
  return(
    <nav className="topnav" aria-label="Section Navigation">
      {navLinks.map((link)=>(
        <Link 
          key={link.path} 
          to={link.path}
          className={location.pathname === link.path ? "active" : ""}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  )
}