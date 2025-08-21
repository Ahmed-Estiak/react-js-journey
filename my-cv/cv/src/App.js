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

function HomePage(){
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
    <div className="layout">
{/* Left fixed/ sticky sidebar (your name) */ /*}
<aside className="sidebar">
<Sidebar />
</aside>


{/* Right content area with nav + sections */ /*}
<main className="content">
<TopNav />


{/* Sections with IDs for smooth scroll targets */}
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/projects" element={<ProjectsPage />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
</main>
</div>
  );
}
  */  

