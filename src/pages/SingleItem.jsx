import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MockData from "../data/MockData";

function SingleItem() {
  const { id } = useParams();
  const [loc, setLoc] = useState({});

  useEffect(() => {
    setLoc(MockData.find((location) => location.path === id));
  }, [id]);
  return (
    <>
      <div>
        <h2>{loc?.name}</h2>
        <p>{loc?.description}</p>
        <p>{loc?.population}</p>
        <img src={loc?.image} alt={loc?.name} width="500px" />
      </div>
    </>
  );
}

export default SingleItem;
