import React from "react";
import uniqid from "uniqid";
import CocktailCard from "../utilities/CocktailCard";

const MyCocktails = (props) => {
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
};

export default MyCocktails;
