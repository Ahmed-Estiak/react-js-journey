// ─────────────────────────────────────────────────────────────────────────────
// file: src/App.jsx
// ─────────────────────────────────────────────────────────────────────────────
import React from "react";
import "./portfolio.css";
import Sidebar from "./components/Sidebar";
import TopNav from "./components/TopNav";
import Hero from "./sections/Hero";        // Header section
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

// ─────────────────────────────────────────────────────────────────────────────
// file: src/components/Sidebar.jsx
// ─────────────────────────────────────────────────────────────────────────────
import React from "react";

export default function Sidebar() {
  return (
    <div className="sidebar-inner">
      <h1 className="brand">Ahmed Estiak</h1>
      <p className="role">Frontend Developer</p>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// file: src/components/TopNav.jsx
// ─────────────────────────────────────────────────────────────────────────────
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

// ─────────────────────────────────────────────────────────────────────────────
// file: src/sections/Hero.jsx (Header)
// ─────────────────────────────────────────────────────────────────────────────
import React from "react";

export default function Hero() {
  return (
    <div className="stack">
      <h2>Hi, I build clean UIs.</h2>
      <p>
        This is a placeholder header/hero section. Replace this copy with your
        value proposition later. Keep styling minimal for now.
      </p>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// file: src/sections/About.jsx
// ─────────────────────────────────────────────────────────────────────────────
import React from "react";

export default function About() {
  return (
    <div className="stack">
      <h2>About</h2>
      <p>
        I’m learning React and building small projects. This section will
        contain a short bio, skills list, and maybe a profile photo later.
      </p>
      <ul>
        <li>HTML, CSS (Flex/Grid, responsive)</li>
        <li>JavaScript (DOM, fetch, localStorage)</li>
        <li>React (props, state, hooks)</li>
      </ul>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// file: src/sections/Projects.jsx
// ─────────────────────────────────────────────────────────────────────────────
import React from "react";

const projects = [
  { id: 1, title: "Note Taker", desc: "Add/edit/delete, localStorage persist." },
  { id: 2, title: "Random User Card", desc: "Fetch API + smooth UI." },
  { id: 3, title: "Text Analyzer", desc: "Counts chars/words/sentences." },
];

export default function Projects() {
  return (
    <div className="stack">
      <h2>Projects</h2>
      <div className="grid">
        {projects.map((p) => (
          <article key={p.id} className="card">
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
            {/* Later: link to live demo / GitHub */}
          </article>
        ))}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// file: src/sections/Contact.jsx
// ─────────────────────────────────────────────────────────────────────────────
import React from "react";

export default function Contact() {
  return (
    <div className="stack">
      <h2>Contact</h2>
      <p>Reach me at <a href="mailto:ahmed@example.com">ahmed@example.com</a></p>
      <p>LinkedIn and GitHub links will go here later.</p>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// file: src/portfolio.css (minimal layout + smooth scroll; style later)
// ─────────────────────────────────────────────────────────────────────────────

