import React from "react";
import {Link, useLocation} from "react-router-dom";

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
      <Link key={link.path} to={link.path}
      className={location.pathname === link.path ? "active" : ""}
      >
        
        {link.label}
      
      </Link>
      ))}
    </nav>
  )
}


{/*const links = [
{ id: "header", label: "Header" },
{ id: "about", label: "About" },
{ id: "projects", label: "Projects" },
{ id: "contact", label: "Contact" },
];


export default function TopNav() {
const handleNav = (e, id) => {
e.preventDefault();
const el = document.getElementById(id);
if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
};


return (
<nav className="topnav" aria-label="Section Navigation">
{links.map((l) => (
<a key={l.id} href={`#${l.id}`} onClick={(e) => handleNav(e, l.id)}>
{l.label}
</a>
))}
</nav>
);
}
*/ }