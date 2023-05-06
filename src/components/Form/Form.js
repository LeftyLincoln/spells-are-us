import React, { useState } from "react";
import "./Form.css"

export const Form = ({matchedSpells}) => {
  
  const [input, setInput] = useState("")

  const searchSpells = (event) => {
    setInput(event.target.value)
    setTimeout(matchedSpells(input), 20)
  }


  return (
    <form className="form">
      <input
        type="search"
        name="spells"
        placeholder="Search Spells"
        value={input}
        onChange={(event) => (searchSpells(event))}
      />
    </form>
  )
}