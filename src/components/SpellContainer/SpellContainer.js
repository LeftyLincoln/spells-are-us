import React from "react"
import { SpellCard } from "../SpellCard/SpellCard"

export const SpellContainer = ({spells, addFavorite}) => {
  const allSpells = spells.map(spell => {
    return <SpellCard
    name={spell.name}
    description={spell.description}
    key={spell.id}
    id={spell.id}
    addFavorites={addFavorite} 
    />
  })
  
  return (
    <div>{allSpells}</div>
  )
}