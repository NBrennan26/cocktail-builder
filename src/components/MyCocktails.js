import React from "react";
import uniqid from "uniqid";
import CocktailCard from "../utilities/CocktailCard";

const MyCocktails = (props) => {
  if (props.posCocktails.length > 0) {
    return (
      <div className="main-comp">
        <div className="card-display">
          {props.posCocktails.map((item) => {
            return (
              <div key={uniqid()}>
                <CocktailCard item={item} />
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    return (
      <div className="main-comp">
        <span>
          Please add a few more ingredients to your bar to see possible
          cocktails
        </span>
      </div>
    );
  }
};

export default MyCocktails;
