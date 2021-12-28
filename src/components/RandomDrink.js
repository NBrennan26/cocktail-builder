import React, { useEffect, useState } from "react";
import CocktailCard from "../utilities/CocktailCard";

const RandomDrink = (props) => {
  const [item, setItem] = useState(null);

  const count = props.posCocktails.length;
  let num = Math.floor(Math.random() * count);
  let intItem = props.posCocktails[num];

  useEffect(() => {
    setItem(intItem);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClick = () => {
    let newNum = Math.floor(Math.random() * count);
    if (newNum !== num) {
      num = newNum;
      setItem(props.posCocktails[num]);
    } else {
      handleClick();
    }
  };

  if (item !== undefined && item !== null) {
    return (
      <div className="main-comp">
        <div className="random-display">
          <CocktailCard item={item} />
        </div>
        <button id="ran-btn" type="button" onClick={() => handleClick()}>
          Shuffle
        </button>
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
