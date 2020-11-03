import React, { useState } from "react";
import { Link, NavLink, withRouter } from "react-router-dom";

const Navbar = (props) => {
  const [name, setName] = useState("Poke Time");

  return (
    <nav className="nav-wrapper red darken-3">
      <div className="container">
        <Link className="brand-logo" to="/">
          {name}
        </Link>
        {/* <button onClick={() => setName("Posts")}>Posts</button>
        <button onClick={() => setName("Users")}>Users</button>
        <button onClick={() => setName("Comments")}>Comments</button> */}
        <ul className="right">
          <li>
            <NavLink exact to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default withRouter(Navbar);
