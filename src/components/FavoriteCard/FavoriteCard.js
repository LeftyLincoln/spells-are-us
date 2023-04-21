import React from "react"
import "./FavoriteCard.css"

export const FavoriteCard = ({name, description, id, deleteSpell}) => {  
  return (
    <div className="favorite-card">
      <h1 className="favorite-header">{name}</h1>
      <div className="favorite-description">{description}</div>
      <button className="favorite-button" onClick={() => deleteSpell(id)}>Delete Spell</button>
    </div>
  )
}