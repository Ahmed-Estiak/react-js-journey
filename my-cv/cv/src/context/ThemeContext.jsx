import  React, {createContext, useState, useContext, useEffect, useMemo} from "react";

const ThemeContext = createContext(null);

export function ThemeProvider({children}){
  const getInitialTheme = () => {
    const saved= localStorage.getItem("theme");
    if(saved==="light" || saved==="dark") return saved;
    const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    return prefersDark ? "dark" : "light";
  };

  const [theme, setTheme] = useState(getInitialTheme);
  useEffect(()=>{
    localStorage.setItem("theme", theme);
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = ()=>{
    setTheme((t)=>t==="dark" ? "light" : "dark");
    const value = useMemo(()=>({
      theme, toggleTheme
    }), [theme]);
    return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  }

  

}

export function useTheme(){
  const ctx = useContext(ThemeContext);
  if(!ctx) throw new Error("useTheme must be used within a ThemeProvider");
  return ctx;
}