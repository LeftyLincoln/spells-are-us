import React from "react";
import "./Home.css";
import { NavLink } from "react-router-dom";

export const Home = () => {
  return (
    <div className="home-page">
      <h2 className="home-title"> Welcome Muggle, Enter Below... </h2>
      <NavLink to="/allSpells">
        <img
          className="wand-image"
          src={require("../../assets/wandImage.png")}
          alt="wand"
        />
      </NavLink>
    </div>
  );
};
