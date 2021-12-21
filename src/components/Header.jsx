import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="headerClass">
      <Link className="routeClass" to="/">
        Home
      </Link>
      <Link className="routeClass" to="/create">
        Create
      </Link>
      <Link className="routeClass" to="/item">
        Item
      </Link>
    </div>
  );
}

export default Header;
