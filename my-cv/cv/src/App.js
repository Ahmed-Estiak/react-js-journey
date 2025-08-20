// App.jsx
import React from "react";
import "./portfolio.css";
import Sidebar from "./components/Sidebar";
import TopNav from "./components/TopNav";
import Hero from "./sections/Hero"; // Header section
import About from "./sections/About";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";


export default function App() {
  return (
    <div className="layout">
{/* Left fixed/ sticky sidebar (your name) */}
<aside className="sidebar">
<Sidebar />
</aside>


{/* Right content area with nav + sections */}
<main className="content">
<TopNav />


{/* Sections with IDs for smooth scroll targets */}
<section id="header" className="section"><Hero /></section>
<section id="about" className="section"><About /></section>
<section id="projects" className="section"><Projects /></section>
<section id="contact" className="section"><Contact /></section>
</main>
</div>
  );
}
