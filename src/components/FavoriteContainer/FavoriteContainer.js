import React from "react"

export const FavoriteContainer = ({favorites, deleteSpell}) => {
  const favoriteSpells = favorites.map(favorite => {
    <FavoriteCard
      title={favorite.title}
      description={favorite.description}
      deleteFavorites={deleteSpell}
    />
  })
  return (
    {favoriteSpells}
  )
}