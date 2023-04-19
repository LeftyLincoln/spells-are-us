import React from "react"
import "./Nav.css"

export const Nav = () => {
  return (
    <div className="nav-bar">
        <h1>Spells Are Us</h1>
        <div className="buttons">
          <button>Home</button>
          <button>All Spells</button>
          <button>Favorite Spells</button>
          <button>Wand Info Bonus</button>
        </div>
      <h2>🪄 Welcome Muggle, your magical spells await 🪄</h2>
    </div>
  )
}