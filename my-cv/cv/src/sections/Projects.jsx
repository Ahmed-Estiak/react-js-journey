import React from "react";
import { projects } from "../data/projects";
import {Link} from "react-router-dom";


export default function Projects() {
  return (
    <div className="stack">
      <h2>Projects</h2>
      <div className="grid">
        {projects.map((project) => (
          <article key={project.id} className="card project-card">
            <h3>{project.title}</h3>
            <p>{project.shortDesc}</p>
            <div className="project-tech">
              {project.tech.slice(0, 2).map(tech => (
                <span key={tech} className="tech-tag">{tech}</span>
              ))}
            </div>
            <div className="project-actions">
              <Link 
                to={`/projects/${project.id}`} 
                className="btn btn-primary"
              >
                View Details
              </Link>
              {project.status === "completed" && project.demoUrl && (
                <a 
                  href={project.demoUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                >
                  Live Demo
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}