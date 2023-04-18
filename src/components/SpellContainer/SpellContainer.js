import React from "react"
import { SpellCard } from "../SpellCard/SpellCard"

export const SpellContainer = ({spells}) => {
  const allSpells = spells.map(spell => {
    return <SpellCard
    name={spell.name}
    description={spell.description}
    key={spell.id}
    id={spell.id} 
    />
  })
  
  return (
    <div>{allSpells}</div>
  )
}