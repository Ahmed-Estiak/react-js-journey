// App.jsx
import React from "react";
import "./portfolio.css";
import Sidebar from "./components/Sidebar";
import TopNav from "./components/TopNav";
import Hero from "./sections/Hero"; // Header section
import About from "./sections/About";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import {BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useEffect } from "react";

export default function App({ scrollTo }) {
  // 🔽 NEW: if route is /projects or /contact, auto-scroll those sections
  useEffect(() => {
    if (!scrollTo) return;
    const el = document.getElementById(scrollTo);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [scrollTo]);

  return (
    <div className="layout">
      <aside className="sidebar">
        <Sidebar />
      </aside>

      <main className="content">
        <TopNav />
        <section id="header" className="section"><Hero /></section>
        <section id="about" className="section"><About /></section>
        <section id="projects" className="section"><Projects /></section>
        <section id="contact" className="section"><Contact /></section>
      </main>
    </div>
  );
}











/*function HomePage(){
  return(
    <>
    <section id="header" className="section"><Hero /></section>
    <section id="about" className="section"><About /></section>
    </>
  )
}

function ProjectsPage(){
  return(
    <>
    <section id="projects" className="section"><Projects /></section>
    </>
  )
}

function ContactPage(){
  return(
    <>
    <section id="contact" className="section"><Contact /></section>
    </>
  )
}


export default function App() {
  return (
    <BrowserRouter>
    <div className="layout">
{/* Left fixed/ sticky sidebar (your name) */ /*}
<aside className="sidebar">
<Sidebar />
</aside>


{/* Right content area with nav + sections */ /*}
<main className="content">
<TopNav />


{/* Sections with IDs for smooth scroll targets */ /*}
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/projects" element={<ProjectsPage />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
</main>
</div>
</BrowserRouter>
  );
}
  */  

