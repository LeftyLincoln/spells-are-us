import React from "react"

export const FavoriteCard = ({name, description, id, deleteSpell}) => {  
  console.log(name, description)
  return (
    <div>
      <h1>{name}</h1>
      <div>{description}</div>
      <button onClick={() => deleteSpell(id)}>Delete Spell</button>
    </div>
  )
}