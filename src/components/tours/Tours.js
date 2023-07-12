import React from 'react';
import { Link } from 'react-router-dom';
import "./Tours.css";

function Tours({ data }) {
  return (
    <div className="card-container">
      {data.map((tour) => (
        <Link key={tour.id} to={`/tours/${tour.id}`} className="card-link">
          <div className="card">
            <h3>Name: {tour.name}</h3>
            <img src={tour.image} className="card-img-top" alt={tour.name} />
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Tours;


