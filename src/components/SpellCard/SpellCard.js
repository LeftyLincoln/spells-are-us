import React from "react"
import "./SpellCard.css"
import { useState } from "react"

export const SpellCard = ({name, description, id, addFavorite}) => {
  const [disable, setDisable] = useState(false)

  return (
    <div className="spell-card">
      <h1>{name}</h1>
      <p className="description">{description}</p>
      <button className="spell-button" onClick={() => {
        addFavorite(id)
        setDisable(true)
      }} disabled={disable}>Add Spell to Favorites</button>
    </div>
  )
}

