import React from "react";
import uniqid from "uniqid"
import IngredientList from "../utilities/IngredientList";

const BuildBar = (props) => {
  const spiritList = IngredientList.filter((item) => {
    return item.type === "spirit";
  });
  const liqueurList = IngredientList.filter((item) => {
    return item.type === "liqueur";
  });
  const bittersList = IngredientList.filter((item) => {
    return item.type === "bitters";
  });
  const syrupList = IngredientList.filter((item) => {
    return item.type === "syrup";
  });
  const juiceList = IngredientList.filter((item) => {
    return item.type === "juice";
  });
  const otherList = IngredientList.filter((item) => {
    return item.type === "other";
  });

  return (
    <div className="main-comp">
      <div>Build My Bar Page</div>
      <div>
        <form onChange={(e) => props.handleChangeInv(e)}>
          Spirits:
          <br />
          {spiritList.map((item) => {
            return (
              <label key={uniqid()}>
                <input type="checkbox" name={item.ingredient} />
                {item.ingredient}
              </label>
            );
          })}
          <br />
          Liqueurs:
          <br />
          {liqueurList.map((item) => {
            return (
              <label key={uniqid()}>
                <input type="checkbox" name={item.ingredient} />
                {item.ingredient}
              </label>
            );
          })}
          <br />
          Bitters:
          <br />
          {bittersList.map((item) => {
            return (
              <label key={uniqid()}>
                <input type="checkbox" name={item.ingredient} />
                {item.ingredient}
              </label>
            );
          })}
          <br />
          Syrups:
          <br />
          {syrupList.map((item) => {
            return (
              <label key={uniqid()}>
                <input type="checkbox" name={item.ingredient} />
                {item.ingredient}
              </label>
            );
          })}
          <br />
          Juices:
          <br />
          {juiceList.map((item) => {
            return (
              <label key={uniqid()}>
                <input type="checkbox" name={item.ingredient} />
                {item.ingredient}
              </label>
            );
          })}
          <br />
          Others:
          <br />
          {otherList.map((item) => {
            return (
              <label key={uniqid()}>
                <input type="checkbox" name={item.ingredient} />
                {item.ingredient}
              </label>
            );
          })}
        </form>
      </div>
    </div>
  );
};

export default BuildBar;
