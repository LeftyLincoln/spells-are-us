import React, {useEffect, useState} from "react"
import { Nav } from "../Nav/Nav"
import { SpellContainer } from "../SpellContainer/SpellContainer"


const App = () => {
  
  const [spells, setSpells] = useState([])
  const [error, setError] = useState('')
  const [favorites, setFavorites] =useState([])
  
  const getSpells = async () => {
    try {
      const response = await fetch('https://hp-api.onrender.com/api/spells')
      const allSpells = await response.json()
      setSpells(allSpells)
    } catch (error) {
      setError(`Sorry there was a ${error}. Please try again later`)
    }
  }

  useEffect(() => {
    getSpells()
  }, [])
  
  const addFavorite = (id) => {
    const favSpell = spells.filter(spell => spell.id === id)
    setFavorites([...favorites, favSpell])
  }

  const deleteSpell = (id) => {
    const leftFavorites = favorites.filter(spell => spell.id !== id)
    setFavorites(leftFavorites)
  }


  return (
    <>
      <Nav />
      <SpellContainer spells={spells} addFavorite={addFavorite}/>
      {/* <FavoriteContainer favorites={favorites} deleteSpell={deleteSpell}/>
      <WandInfo /> */}
      {error}
    </>
  )
}


export default App
