import React from "react"
import "./Nav.css"
import { NavLink } from "react-router-dom"

export const Nav = () => {
  return (
    <div className="nav-bar">
        <h1>Spells Are Us</h1>
        <div className="buttons">
          <NavLink to="/home">
            <button>Home</button>
          </NavLink>
          <NavLink to="/allSpells">
            <button>All Spells</button>
          </NavLink>
          <NavLink to="/favoriteSpells">
            <button>Favorite Spells</button>
          </NavLink>
          <NavLink to="/wandInfo">
            <button>Wand Info Bonus</button>
          </NavLink>
        </div>
      <h2> Welcome Muggle, Find your Spells here... </h2>
    </div>
  )
}