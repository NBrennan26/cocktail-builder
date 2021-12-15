import React from "react";
import uniqid from "uniqid";
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
      <div>
        <form onChange={(e) => props.handleChangeInv(e)}>
          <div className="ing-grp">
            <span className="ing-grp-title">Spirits</span>
            {spiritList.map((item) => {
              return (
                <label>
                  <input type="checkbox" name={item.ingredient} />
                  {item.ingredient}
                </label>
              );
            })}
          </div>
          <div className="ing-grp">
            <span className="ing-grp-title">Liqueurs</span>
            {liqueurList.map((item) => {
              return (
                <label>
                  <input type="checkbox" name={item.ingredient} />
                  {item.ingredient}
                </label>
              );
            })}
          </div>
          <div className="ing-grp">
            <span className="ing-grp-title">Bitters</span>
            {bittersList.map((item) => {
              return (
                <label>
                  <input type="checkbox" name={item.ingredient} />
                  {item.ingredient}
                </label>
              );
            })}
          </div>
          <div className="ing-grp">
            <span className="ing-grp-title">Syrups</span>
            {syrupList.map((item) => {
              return (
                <label>
                  <input type="checkbox" name={item.ingredient} />
                  {item.ingredient}
                </label>
              );
            })}
          </div>
          <div className="ing-grp">
            <span className="ing-grp-title">Juices</span>
            {juiceList.map((item) => {
              return (
                <label>
                  <input type="checkbox" name={item.ingredient} />
                  {item.ingredient}
                </label>
              );
            })}
          </div>
          <div className="ing-grp">
            <span className="ing-grp-title">Others</span>
            {otherList.map((item) => {
              return (
                <label>
                  <input type="checkbox" name={item.ingredient} />
                  {item.ingredient}
                </label>
              );
            })}
          </div>
        </form>
      </div>
    </div>
  );
};

export default BuildBar;
