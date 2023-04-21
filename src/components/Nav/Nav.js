import React from "react";
import "./Nav.css";
import { NavLink, Route } from "react-router-dom";


export const Nav = () => {
  return (
    <>
      <Route path="/home">
        <div className="nav-bar">
          <NavLink
            to="/home"
            style={{ textDecoration: "none", color: "black" }}
          >
            <h1 className="nav-header">Spells Are Us</h1>
          </NavLink>
          <div className="buttons">
            <NavLink to="/allSpells">
              <button className="allSpells-button">All Spells</button>
            </NavLink>
            <NavLink to="/favoriteSpells">
              <button className="fav-spell-button">Favorite Spells</button>
            </NavLink>
            <NavLink to="/wandInfo">
              <button className="wand-info-button">Wand Info Bonus</button>
            </NavLink>
          </div>
        </div>
      </Route>
      <Route path="/allSpells">
        <div className="nav-bar">
          <NavLink
            to="/home"
            style={{ textDecoration: "none", color: "black" }}
          >
            <h1 className="nav-header">Spells Are Us</h1>
          </NavLink>
          <div className="buttons">
            <NavLink to="/home">
              <button className="home-button">Home</button>
            </NavLink>
            <NavLink to="/favoriteSpells">
              <button className="fav-spell-button">Favorite Spells</button>
            </NavLink>
            <NavLink to="/wandInfo">
              <button className="wand-info-button">Wand Info Bonus</button>
            </NavLink>
          </div>
        </div>
      </Route>
      <Route path="/favoriteSpells">
        <div className="nav-bar">
          <NavLink
            to="/home"
            style={{ textDecoration: "none", color: "black" }}
          >
            <h1 className="nav-header">Spells Are Us</h1>
          </NavLink>
          <div className="buttons">
            <NavLink to="/home">
              <button className="home-button">Home</button>
            </NavLink>
            <NavLink to="/allSpells">
              <button className="allSpells-button">All Spells</button>
            </NavLink>
            <NavLink to="/wandInfo">
              <button className="wand-info-button">Wand Info Bonus</button>
            </NavLink>
          </div>
        </div>
      </Route>
      <Route path="/wandInfo">
        <div className="nav-bar">
          <NavLink
            to="/home"
            style={{ textDecoration: "none", color: "black" }}
          >
            <h1 className="nav-header">Spells Are Us</h1>
          </NavLink>
          <div className="buttons">
            <NavLink to="/home">
              <button className="home-button">Home</button>
            </NavLink>
            <NavLink to="/allSpells">
              <button className="allSpells-button">All Spells</button>
            </NavLink>
            <NavLink to="/favoriteSpells">
              <button className="fav-spell-button">Favorite Spells</button>
            </NavLink>
          </div>
        </div>
      </Route>
    </>
  );

  {
    /* return (
    <div className="nav-bar">
      <NavLink to="/home" style={{ textDecoration: "none", color: "black" }}>
        <h1 className="nav-header">Spells Are Us</h1>
      </NavLink>
      <div className="buttons">
        <NavLink to="/home">
          <button className="home-button">Home</button>
        </NavLink>
        <NavLink to="/allSpells">
          <button className="allSpells-button">All Spells</button>
        </NavLink>
        <NavLink to="/favoriteSpells">
          <button className="fav-spell-button">Favorite Spells</button>
        </NavLink>
        <NavLink to="/wandInfo">
          <button className="wand-info-button">Wand Info Bonus</button>
        </NavLink>
      </div>
    </div>
  ); */
  }
};
