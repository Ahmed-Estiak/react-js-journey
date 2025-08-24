import React from "react";
import { Link } from "react-router-dom";
import Card from "./ui/Card";
import Button from "./ui/Button";

export default function ProjectCard({ project }) {
  return (
    <Card variant="elevated" className="project-card">
      <h3>{project.title}</h3>
      <p>{project.shortDesc}</p>
      
      <div className="project-tech">
        {project.tech.slice(0, 2).map(tech => (
          <span key={tech} className="tech-tag">{tech}</span>
        ))}
      </div>
      
      <div className="project-actions">
        <Button 
          as={Link} 
          to={`/projects/${project.id}`}
          variant="primary"
        >
          View Details
        </Button>
        
        {project.status === "completed" && project.demoUrl && (
          <Button 
            as="a"
            href={project.demoUrl}
            target="_blank"
            variant="secondary"
          >
            Live Demo
          </Button>
        )}
      </div>
    </Card>
  );
}
