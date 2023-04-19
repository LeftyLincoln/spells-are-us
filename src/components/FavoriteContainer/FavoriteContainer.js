import React from "react"
import { FavoriteCard } from "../FavoriteCard/FavoriteCard"
import "./FavoriteContainer.css"

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
  const favLogic = !favorites.length ? <h1>You haven't saved any spells yet... </h1> : favoriteSpells
  return (
    <div>{favLogic}</div>
  )
}