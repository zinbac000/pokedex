import React from "react";
import pokeball from "../../../assets/img/pokeball_gray.png";
import "./PokedexSpinner.scss";

export const PokedexSpinner = () => {
  return (
    <div className="pokedex-loader">
      <img src={pokeball} alt="pokeball" />
    </div>
  );
};
