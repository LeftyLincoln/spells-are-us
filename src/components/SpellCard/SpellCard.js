import React from "react"

export const SpellCard = ({name, description, id, addFavorite}) => {
  return (
    <div className="spell-Card">
      <h1>{name}</h1>
      <p>{description}</p>
      <button onClick={() => addFavorite(id)}>Add Spell to Favorites</button>
    </div>
  )
}

// const favoriteDog = (newFav) => {
//   setFavorites([...favorites, newFav]);
// }

// return (
//   <div className="card">
//     <Modal  url={url} />
//     <button onClick={() => {
//       favoriteDog(url) 
//       setDisabled(true)
//       }} className="favorite-button" disabled={disabled}>Save</button>
//   </div>
// );
// }