import React from "react";


const links = [
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