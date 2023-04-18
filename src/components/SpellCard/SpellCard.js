import React from "react"

export const SpellCard = ({name, description, id}) => {
  return (
    <div className="spell-Card">
      <h1>{name}</h1>
      <p>{description}</p>
      <button>Add Spell to Favorites</button>
    </div>
  )
}