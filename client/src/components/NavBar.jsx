import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Back to Homepage</Link>
        </li>
        <li>
          <Link to="/sounds">All Sounds</Link>
        </li>
        <li>
          <Link to="/new-upload">Upload Sound</Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
