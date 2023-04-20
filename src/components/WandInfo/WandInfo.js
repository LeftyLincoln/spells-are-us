import React from "react";
import "./WandInfo.css";

export const WandInfo = () => {
  return (
    <div className="wand-info">
      <h2 className="quote">
        "The wand chooses the wizard... it's not always clear why."
      </h2>
      <div className="facts">
        A wand is a magical object through which a wizard/witch channels
        his/her magical powers. Most spells are done with the aid of a wand,
        even though it is possible to perform magic without one
      </div>
      <div className="famous-wand">
          Most Famous Wand: The Elder Wand, one of the three deathly hallows
          objects
      </div>
      <div className="wand-maker">Famous Wand Makers: Ollivander & Mykew Gregorovitch </div>
      <div className="materials">
        Materials: Most wands were long, thin rods of wood with a magical
        substance embedded into their core.
      </div>
      <div className="substances">
        Magical Substances: The Main Three
        <br></br> 1. Unicorn Hair : Unicorn hair generally produced the most
        consistent magic <br></br> 2. Dragon Heartstring: As a rule, dragon
        heartstrings produced wands with the most power, and which were
        capable of the most flamboyant spells<br></br> 3. Phoenix Feather: Rarest,
        capable of the widest range of magic
      </div>
    </div>
  );
};
