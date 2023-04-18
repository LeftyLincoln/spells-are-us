import React, {useEffect, useState} from "react"
import { Nav } from "../Nav/Nav"
import { SpellContainer } from "../SpellContainer/SpellContainer"


const App = () => {
  
  const [spells, setSpells] = useState([])
  const [error, setError] = useState('')
  
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
  


  return (
    <>
      <Nav />
      <SpellContainer spells={spells}/>
      {/* <FavoriteContainer />
      <WandInfo /> */}
      {error}
    </>
  )
}


export default App
