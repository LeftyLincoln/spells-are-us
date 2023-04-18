import React from "react"
import { FavoriteCard } from "../FavoriteCard/FavoriteCard"

export const FavoriteContainer = ({favorites, deleteSpell}) => {
  const favoriteSpells = favorites.map(favorite => {
    return <FavoriteCard
    title={favorite.title}
    description={favorite.description}
    deleteSpell={deleteSpell}
    key={favorite.id}
    id={favorite.id}
    />
  })
  const favLogic = !favorites.length ? <h1>You haven't saved any spells yet... </h1> : favoriteSpells
  return (
    <div>{favLogic}</div>
  )
}