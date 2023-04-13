import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav className="navigation">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/counter">Counter</Link>
        </li>
      </ul>
    </nav>
  );
}
