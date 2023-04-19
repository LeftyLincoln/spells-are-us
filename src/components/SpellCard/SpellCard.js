import React from "react"
import "./SpellCard.css"

export const SpellCard = ({name, description, id, addFavorite}) => {
  return (
    <div className="spell-card">
      <h1>{name}</h1>
      <p>{description}</p>
      <button className="spell-button" onClick={() => addFavorite(id)}>Add Spell to Favorites</button>
    </div>
  )
}

