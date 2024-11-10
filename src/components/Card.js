import React from "react";
import "./Card.css";

const Card = ({ children }) => {
  return <div className="card">{children}</div>;
};

export { Card };
