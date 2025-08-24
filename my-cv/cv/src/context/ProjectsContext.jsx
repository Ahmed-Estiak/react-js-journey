import React, { createContext, useContext, useState, useMemo } from "react";
import { projects as initialProjects } from "../data/projects";

const ProjectsContext = createContext(null);

export function ProjectsProvider({ children }) {
  const [projects, setProjects] = useState(initialProjects);
  const [filters, setFilters] = useState({
    status: "all",
    tech: "all"
  });
  const [sortBy, setSortBy] = useState("id");

  const filteredProjects = useMemo(() => {
    let filtered = [...projects];
    
    if (filters.status !== "all") {
      filtered = filtered.filter(p => p.status === filters.status);
    }
    
    if (filters.tech !== "all") {
      filtered = filtered.filter(p => p.tech.includes(filters.tech));
    }
    
    return filtered.sort((a, b) => {
      if (sortBy === "title") return a.title.localeCompare(b.title);
      return a.id - b.id;
    });
  }, [projects, filters, sortBy]);

  const value = useMemo(() => ({
    projects: filteredProjects,
    allProjects: projects,
    filters,
    setFilters,
    sortBy,
    setSortBy,
    updateProject: (id, updates) => {
      setProjects(prev => prev.map(p => 
        p.id === id ? { ...p, ...updates } : p
      ));
    }
  }), [filteredProjects, projects, filters, sortBy]);

  return (
    <ProjectsContext.Provider value={value}>
      {children}
    </ProjectsContext.Provider>
  );
}

export function useProjects() {
  const ctx = useContext(ProjectsContext);
  if (!ctx) throw new Error("useProjects must be used within ProjectsProvider");
  return ctx;
}
