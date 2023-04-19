import React from "react"
import { FavoriteCard } from "../FavoriteCard/FavoriteCard"
import "./FavoriteContainer.css"

export const FavoriteContainer = ({favorites, deleteSpell}) => {
  console.log("favorites", favorites)
  const favoriteSpells = favorites.map(favorite => {
    console.log("favorite name", favorite.name)
    return <FavoriteCard
    name={favorite.name}
    description={favorite.description}
    key={favorite.id}
    id={favorite.id}
    deleteSpell={deleteSpell}
    />
  })
  // const favLogic = !favorites.length ? <h1>You haven't saved any spells yet... </h1> : favoriteSpells
  return (
    <div>{favoriteSpells}</div>
  )
}