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
      his/her magical powers. <br></br> Most spells are done with the aid of a wand,
      even though it is possible to perform magic without one
    </h3>
    <div className="facts">
      <h3>Facts:</h3>
      <h3> <u>Most Powerful:</u> The Elder Wand </h3>
      <h3> <u>Wand Makers:</u> Ollivander & Gregorovitch are the best known makers</h3>
      <h3> <u>Made Of:</u><br></br>Most wands were long, thin rods of wood with a magical
        substance embedded into their core.</h3>
      <h3> <u>Substances:</u><br></br> Unicorn Hair, Dragon Heartstring, Phoenix Feather & More</h3>
    </div>
    </div>

)
}
