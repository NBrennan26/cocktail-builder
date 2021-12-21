import React from "react";
import CocktailCard from "../utilities/CocktailCard";

const RandomDrink = (props) => {
  const count = props.posCocktails.length;
  const num = Math.floor(Math.random() * count);
  let item = props.posCocktails[num];

  if (item !== undefined) {
    return (
      <div className="main-comp">
        <div className="random-display">
          <CocktailCard item={item} />
        </div>
      </div>
    );
  } else {
    return (
      <div className="main-comp">
        <span>
          Random Cocktails are suggested based on your available ingredients
        </span>
        <span>
          Please add ingredients to your bar to enable random cocktails
        </span>
      </div>
    );
  }
};

export default RandomDrink;
