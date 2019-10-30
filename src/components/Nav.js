import React from "react";

export default function Nav() {
  return (
    <ul className="nav-class nav navbar flex-nowrap">
      <li className="nav-item mr-auto">
        <a className="navbar-brand" href="#">
          Terminal
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
          Home
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
          Employees
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
          About
        </a>
      </li>
    </ul>
  );
}
