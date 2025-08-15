import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark mb-4">
      <div className="container">
        <Link className="navbar-brand" index>
          React Exercises
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/greeting">
                Greeting
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/counter">
                Counter
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/color-changer">
                Color Changer
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/live-typing">
                Live Typing
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/todo-list">
                Todo List
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/toggle-text">
                Toggle Text
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/fruit-list">
                Fruit List
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;