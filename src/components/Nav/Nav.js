import React from "react"
import "./Nav.css"
import { NavLink } from "react-router-dom"

export const Nav = () => {
  return (
    <div className="nav-bar">
      <NavLink to="/home"  style={{ textDecoration: 'none', color: 'black' }}>
        <h1 classname="nav-header">Spells Are Us</h1>
      </NavLink>
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
    </div>
  )
}