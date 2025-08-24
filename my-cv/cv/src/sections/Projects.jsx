import React from "react";
import ProjectCard from "../components/ProjectCard";
import { useProject } from "../context/ProjectContext";

export default function Projects() {
  const { projects } = useProject();
  
  return (
    <div className="stack">
      <h2>Projects</h2>
      <div className="grid">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}