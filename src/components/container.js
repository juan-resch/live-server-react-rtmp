import React from "react";
import "./index.css";

export default function Container({ children, style }) {
  return (
    <div className="container" style={{ ...style }}>
      {children}
    </div>
  );
}
