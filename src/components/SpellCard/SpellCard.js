import React, { useEffect } from "react";
import "./SpellCard.css";
import { useState } from "react";
import PropTypes from "prop-types";

export const SpellCard = ({
  name,
  description,
  id,
  addFavorite,
  favorites,
}) => {
  const [disable, setDisable] = useState(false);

  useEffect(() => {
    const isFavorite = favorites.find((favorite) => {
      return favorite.id === id;
    });
    if (isFavorite) {
      setDisable(true);
    }
  }, [favorites, id]);

  return (
    <div className="spell-card">
      <h1>{name}</h1>
      <p className="description">{description}</p>
      <button
        className="spell-button"
        onClick={() => {
          addFavorite(id);
          setDisable(true);
        }}
        disabled={disable}
      >
        ⭐️
      </button>
    </div>
  );
};

SpellCard.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  addFavorite: PropTypes.func.isRequired,
  favorites: PropTypes.array.isRequired,
};
