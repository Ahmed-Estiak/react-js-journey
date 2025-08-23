import {useParams} from "react-router-dom";
import {getProjectById} from "../data/projects";
import {Link, Navigate} from "react-router-dom";

export default function ProjectDetail(){
  const {id} = useParams();
  const project = getProjectById(id);

  if (!project){
    return <Navigate to="/projects" replace />;
  }

  return(
    <div className="section">
    <div className="stack">
      <Link to="/projects" className="back-link">
      ← Back to Projects
      </Link>

    <div className="project-header">
      <h2>{project.title}</h2>
      <div className="project-status">
        Status: <span className={project.status === "completed" ? "completed" : "in-progress"}>{project.status}</span>
      </div>
    </div>
    <div className="project-content">
          <h3>About this project</h3>
          <p>{project.fullDesc}</p>

          <h3>Technologies Used</h3>
          <div className="tech-list">
            {project.tech.map(tech => (
              <span key={tech} className="tech-tag">{tech}</span>
            ))}
          </div>

          {/* Project links */}
          <div className="project-links">
            {project.demoUrl && (
              <a 
                href={project.demoUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                🚀 Live Demo
              </a>
            )}
            {project.githubUrl && (
              <a 
                href={project.githubUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                📱 GitHub
              </a>
            )}
          </div>
    </div>
    </div>
    </div>
  )
}

