import React from "react"
import { FavoriteCard } from "../FavoriteCard/FavoriteCard"
import "./FavoriteContainer.css"
import PropTypes from 'prop-types';

export const FavoriteContainer = ({favorites, deleteSpell}) => {
  const favoriteSpells = favorites.map(favorite => {
    return <FavoriteCard
    name={favorite.name}
    description={favorite.description}
    key={favorite.id}
    id={favorite.id}
    deleteSpell={deleteSpell}
    />
  })
  const favLogic = !favorites.length ? <h1 className="no-fav-message">You haven't saved any spells yet... </h1> : favoriteSpells
  
  return (
    <div className="favorite-container">{favLogic}</div>
  )
}

FavoriteContainer.propTypes = {
  deleteSpell: PropTypes.func.isRequired,
  favorites: PropTypes.array.isRequired
}