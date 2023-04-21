import React, { useEffect } from "react"
import "./SpellCard.css"
import { useState } from "react"

export const SpellCard = ({name, description, id, addFavorite, favorites}) => {
  const [disable, setDisable] = useState(false)
  
  useEffect(() => {
    const isFavorite = favorites.find(favorite => {
      return favorite.id === id
    })
    if (isFavorite) {
      setDisable(true)
    }
  }, [])


  return (
    <div className="spell-card">
      <h1>{name}</h1>
      <p className="description">{description}</p>
      <button className="spell-button" onClick={() => {
        addFavorite(id)
        setDisable(true)
      }} disabled={disable}>⭐️</button>
    </div>
  )
}

