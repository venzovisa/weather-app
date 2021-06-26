import React from 'react';
import { Link } from "react-router-dom";

export default function Header({ searchBox }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <a className="navbar-brand" href="/">Weather App</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarColor03">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/search">Search</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/statistics">Statistics</Link>
            </li>
          </ul>
          {searchBox}
        </div>
      </div>
    </nav>
  )
}