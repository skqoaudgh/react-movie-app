import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css'

export const Navigation = () => {
  return (
    <div className="nav">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </div>
  );
}