import React from "react"

export const FavoriteCard = ({title, description, id, deleteSpell}) => {  
  
  return (
    <div>
      <h1>{title}</h1>
      <div>{description}</div>
      <button onClick={() => deleteSpell(id)}>Delete Spell</button>
    </div>
  )
}