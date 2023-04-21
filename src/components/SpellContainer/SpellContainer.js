import React from "react"
import { SpellCard } from "../SpellCard/SpellCard"
import "./SpellContainer.css"
import PropTypes from 'prop-types';

export const SpellContainer = ({spells, addFavorite, favorites}) => {
  const allSpells = spells.map(spell => {
    return <SpellCard
    name={spell.name}
    description={spell.description}
    key={spell.id}
    id={spell.id}
    addFavorite={addFavorite}
    favorites={favorites} 
    />
  })
  
  return (
    <div className="spells-container">{allSpells}</div>
  )
}

SpellContainer.propTypes = {
  spells: PropTypes.array.isRequired,
  addFavorite: PropTypes.func.isRequired,
  favorites: PropTypes.array.isRequired
}