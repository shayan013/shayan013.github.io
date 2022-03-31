import React from "react";
import "./listing.css";
import Card from "./Card";
import Heading from "../heading/Heading";
function Listing() {
  return (
    <div className="app__listing">
      <div className="container">
        <div className="app__titles">
          <Heading smallHeading="listing" bigHeading="our listing" />
        </div>
        <div className=" row app__cards  g-5">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
}

export default Listing;
