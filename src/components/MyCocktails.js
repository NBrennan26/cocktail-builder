import React from "react";
import uniqid from "uniqid";

const MyCocktails = (props) => {
  return (
    <div className="main-comp">
      <div>
        My Cocktails Page
        {props.allCocktailList.map((item) => {
          return <div key={uniqid()}>
            <span>{item.strDrink}</span>
          </div>;
        })}
      </div>
    </div>
  );
};

export default MyCocktails;
