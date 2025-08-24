import { createContext, useContext, useState, useMemo, useReducer } from "react";
import { projects as initialProjects } from "../data/projects";

const ProjectContext = createContext(null);
const initialState = {
  projects: initialProjects,
  filters: {
    status: "all",
    tech: "all"
  },
  sortBy: "id",
  loading: false,
  error: null
}
function projectReducer(state, action) {
  switch (action.type) {
    case "SET_FILTERS":
      return{
        ...state,
        filters: {
          ...state.filters,
          [action.field]: action.value
        }
      }
    case "SET_SORT":
      return{
        ...state,
        sortBy: action.payload
      }
      case 'UPDATE_PROJECT':
        return{
          ...state,
          projects: state.projects.map(p=>p.id=== action.payload.id ? {...p, ...action.payload.updates} 
            : p)
        }
        case 'ADD_PROJECT':
          return{
            ...state,
            projects: [...state.projects, action.payload]
          }
        case 'DELETE_PROJECT':
          return{
            ...state,
            projects: state.projects.filter(p=>p.id !== action.payload)
          }
        case 'SET_LOADING':
          return{
            ...state,
            loading: action.payload
          }
        case 'SET_ERROR':
          return{
            ...state,
            error: action.payload,
            loading: false
          }
        default:
          return state
    
  }
}

export function ProjectProvider({ children }) {
  const [state, dispatch] = useReducer(projectReducer, initialState);
  const filteredProjects = useMemo(() => {
    let filtered = [...state.projects];
    
    if (state.filters.status !== "all") {
      filtered = filtered.filter(p => p.status === state.filters.status);
    }
    
    if (state.filters.tech !== "all") {
      filtered = filtered.filter(p => p.tech.includes(state.filters.tech));
    }
    
    return filtered.sort((a, b) => {
      if (state.sortBy === "title") return a.title.localeCompare(b.title);
      return a.id - b.id;
    });
  }, [state.projects, state.filters, state.sortBy]);
  const value = useMemo(() => ({
    ...state,
    projects: filteredProjects,
    dispatch,
    setFilters: (field, value) => dispatch({type: "SET_FILTERS", field, value}),
    setSort: (sortBy) => dispatch({type: "SET_SORT", payload: sortBy}),
    updateProject: (id, updates) => dispatch({type: "UPDATE_PROJECT", payload: {id, updates}}),
    addProject: (project) => dispatch({type: "ADD_PROJECT", payload: project}),
    deleteProject: (id) => dispatch({type: "DELETE_PROJECT", payload: id}),

  }), [state, filteredProjects, dispatch]);
  return (
    <ProjectContext.Provider value={value}>
      {children}
    </ProjectContext.Provider>
  )
}

export function useProject() {
  const ctx = useContext(ProjectContext);
  if (!ctx) throw new Error("useProject must be used within ProjectProvider");
  return ctx;
}