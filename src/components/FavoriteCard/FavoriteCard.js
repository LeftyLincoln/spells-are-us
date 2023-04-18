import React from "react"

export const FavoriteCard = ({title, description, deleteSpell}) => {
  return (
    <div>
      <h1>{title}</h1>
      <div>{description}</div>
      <button>Delete Spell</button>
    </div>
  )
}