import React from "react";

export default function Card({ 
  children, 
  className = "", 
  onClick, 
  variant = "default",
  ...props 
}) {
  const variants = {
    default: "card",
    elevated: "card card-elevated", 
    bordered: "card card-bordered"
  };

  return (
    <div 
      className={`${variants[variant]} ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </div>
  );
}
