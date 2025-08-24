import React from "react";

export default function Button({
  children,
  variant = "primary",
  size = "medium", 
  disabled = false,
  onClick,
  className = "",
  as: Component = "button",
  ...props
}) {
  const baseClass = "btn";
  const variantClass = `btn-${variant}`;
  const sizeClass = `btn-${size}`;
  
  return (
    <Component
      className={`${baseClass} ${variantClass} ${sizeClass} ${className}`}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {children}
    </Component>
  );
}
