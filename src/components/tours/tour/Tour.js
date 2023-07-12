import React from 'react';
import { Link } from 'react-router-dom';
import "./Tour.css";

function Tour({ tour }) {
  const { id, name, image } = tour;

  return (
    <Link to={`/city/${id}`} className="card-link">
      <div className="card">
        <img src={image} className="card-img-top" alt={name} />
        <h3>{name}</h3>
      </div>
    </Link>
  );
}

export default Tour;

    
