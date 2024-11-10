import React from "react";
import "../styles/Card.css";

const Card = ({ title, content, children }) => {
  return (
    <div className="card">
      {title && <h3 className="card-title">{title}</h3>}
      {content && <p className="card-text">{content}</p>}
      {children && <div className="card-content">{children}</div>}
    </div>
  );
};

export { Card };
