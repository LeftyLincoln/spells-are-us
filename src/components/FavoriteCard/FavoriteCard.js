import React from "react"
import "./FavoriteCard.css"

export const FavoriteCard = ({name, description, id, deleteSpell}) => {  
  //all coming in undefined.
  console.log(name, description, id)
  return (
    <div className="favorite-card">
      <h1>{name}</h1>
      <div>{description}</div>
      <button className="favorite-button" onClick={() => deleteSpell(id)}>Delete Spell</button>
    </div>
  )
}