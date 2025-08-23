// App.jsx
import React from "react";
import "./portfolio.css";
import Sidebar from "./components/Sidebar";
import TopNav from "./components/TopNav";
import Hero from "./sections/Hero"; // Header section
import About from "./sections/About";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {ThemeProvider} from "./context/ThemeContext";
import ProjectDetail from "./pages/ProjectDetail";

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
    <section id="projects" className="section"><Projects /></section>
  )
}

function ContactPage(){
  return(
    <section id="contact" className="section"><Contact /></section>
  )
}

export default function App() {
  return (
    <ThemeProvider>
    <BrowserRouter>
      <div className="layout">
        {/* Left fixed/ sticky sidebar (your name) */}
        <aside className="sidebar">
          <Sidebar />
        </aside>

        {/* Right content area with nav + sections */}
        <main className="content">
          <TopNav />

          {/* Routes */}
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/projects/:id" element={<ProjectDetail />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
    </ThemeProvider>
  );
}

