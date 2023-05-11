import React from "react";
import "./Loading.css";

export default function Loading() {
  return (
    <div className="container">
      <div className="spinner-container">
        <div className="loading-spinner"></div>
      </div>
    </div>
  );
}