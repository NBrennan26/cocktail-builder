import React, { useEffect } from "react";
import uniqid from "uniqid";

// allCocktailList, curIng

const MyCocktails = (props) => {

  return (
    <div className="main-comp">
      <div>
      {props.curIng.map((item) => {
          return <div key={uniqid()}>
            <span>{item.ingredient}</span>
          </div>;
        })}
        <br /> <br />
        {props.allCocktailList.map((item) => {
          return <div key={uniqid()}>
            <span>{item.name}</span>
          </div>;
        })}
      </div>
    </div>
  );
};

export default MyCocktails;
