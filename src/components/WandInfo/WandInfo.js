import React from "react";
import "./WandInfo.css";

export const WandInfo = () => {
  return (
    <div>
    <div className="wand-info-title">
      <img className="wand-image-info" src={require("../../assets/wandImage.png")} alt="wand" />
      <h2 className="quote">
        "The wand chooses the wizard... it's not always clear why."
      </h2> 
      <img className="wand-image-info" src={require("../../assets/wandImage.png")} alt="wand" />
    </div>  
    <h3 className="about">
      A wand is a magical object through which a wizard/witch channels
      his/her magical powers. Most spells are done with the aid of a wand,
      even though it is possible to perform magic without one
    </h3>
    <div className="facts">
      <h3>Facts:</h3>
      <h3>Most Powerful: The Elder Wand </h3>
      <h3>Wand Makers: Ollivander & Gregorovitch are the best known makers</h3>
      <h3>Made Of: Most wands were long, thin rods of wood with a magical
        substance embedded into their core.</h3>
      <h3>Main Magical Substances: Unicorn Hair, Dragon Heartstring, Phoenix Feather</h3>
    </div>
    </div>

)
}
