import React, { useEffect, useState } from "react";
import { Nav } from "../Nav/Nav";
import { SpellContainer } from "../SpellContainer/SpellContainer";
import { FavoriteContainer } from "../FavoriteContainer/FavoriteContainer";
import { WandInfo } from "../WandInfo/WandInfo";
import { Home } from "../Home/Home";
import { Form } from "../Form/Form";
import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";

const App = () => {
  const [spells, setSpells] = useState([]);
  const [error, setError] = useState("");
  const [favorites, setFavorites] = useState([]);
  const [filteredSpells, setFilteredSpells] = useState('')

  const getSpells = async () => {
    try {
      const response = await fetch("https://hp-api.onrender.com/api/spells");
      const allSpells = await response.json();
      setSpells(allSpells);
    } catch (error) {
      setError(`Sorry there was a ${error.message}. Please try again later`);
    }
  };

  useEffect(() => {
    getSpells();
  }, []);

  const addFavorite = (id) => {
    const favSpell = spells.find((spell) => spell.id === id);
    if (!favorites.includes(favSpell)) {
      setFavorites([...favorites, favSpell]);
    }
  };

  const deleteSpell = (id) => {
    const leftFavorites = favorites.filter((spell) => spell.id !== id);
    setFavorites(leftFavorites);
  };

  const matchedSpells = (input) => {
    const searchedSpell = spells.filter(spell => {
      console.log(input.toLowerCase())
      return spell.name.toLowerCase().includes(input.toLowerCase())
    })
    if (searchedSpell.length > 0) {
      setFilteredSpells(searchedSpell)
    }
  }
  const clearSearch = () => {
    setFilteredSpells("")
  }


  return (
    <main className="app">
      <Nav clearSearch={clearSearch}/>
      {error && <p>{error}</p>}
      <Switch>
        <Route
          path="/allSpells"
          render={() => (
            <>
              <Form 
                spells={spells}
                matchedSpells={matchedSpells}
              />
              <SpellContainer
                spells={filteredSpells || spells}
                addFavorite={addFavorite}
                favorites={favorites}
                />
            </>
          )}
        />
        <Route
          path="/favoriteSpells"
          render={() => (
            <FavoriteContainer
              favorites={favorites}
              deleteSpell={deleteSpell}
            />
          )}
        />
        <Route path="/wandInfo" render={() => <WandInfo />} />
        <Route path="/home" render={() => <Home />} />
        <Redirect from="*" to="/home" />
      </Switch>
    </main>
  );
};

export default App;
