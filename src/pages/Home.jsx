import React from "react";
import { Link } from "react-router-dom";
import MockData from "../data/MockData";

function Home() {
  return (
    <div>
      <ul>
        {MockData.map((location) => (
          <li key={location.id}>
            <h2>{location.name}</h2>
            <Link to={`/location/${location.path}`}>
              <button>View Details</button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
