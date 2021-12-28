import React from "react";
import uniqid from "uniqid";

const BuildBar = (props) => {
  const spiritList = props.curBarInv.filter((item) => {
    return item.type === "spirit";
  });
  const liqueurList = props.curBarInv.filter((item) => {
    return item.type === "liqueur";
  });
  const bittersList = props.curBarInv.filter((item) => {
    return item.type === "bitters";
  });
  const syrupList = props.curBarInv.filter((item) => {
    return item.type === "syrup";
  });
  const fruitList = props.curBarInv.filter((item) => {
    return item.type === "fruit";
  });
  const otherList = props.curBarInv.filter((item) => {
    return item.type === "other";
  });

  return (
    <div className="main-comp">
      <div>
        <form>
          <div className="ing-grp">
            <span className="ing-grp-title">Spirits</span>
            {spiritList.map((item) => {
              return (
                <label key={uniqid()}>
                  <input
                    type="checkbox"
                    name={item.ingredient}
                    checked={item.inStock}
                    onChange={(e) => props.handleChangeInv(e)}
                  />
                  {item.ingredient}
                </label>
              );
            })}
          </div>
          <div className="ing-grp">
            <span className="ing-grp-title">Liqueurs</span>
            {liqueurList.map((item) => {
              return (
                <label key={uniqid()}>
                  <input
                    type="checkbox"
                    name={item.ingredient}
                    checked={item.inStock}
                    onChange={(e) => props.handleChangeInv(e)}
                  />
                  {item.ingredient}
                </label>
              );
            })}
          </div>
          <div className="ing-grp">
            <span className="ing-grp-title">Bitters</span>
            {bittersList.map((item) => {
              return (
                <label key={uniqid()}>
                  <input
                    type="checkbox"
                    name={item.ingredient}
                    checked={item.inStock}
                    onChange={(e) => props.handleChangeInv(e)}
                  />
                  {item.ingredient}
                </label>
              );
            })}
          </div>
          <div className="ing-grp">
            <span className="ing-grp-title">Syrups</span>
            {syrupList.map((item) => {
              return (
                <label key={uniqid()}>
                  <input
                    type="checkbox"
                    name={item.ingredient}
                    checked={item.inStock}
                    onChange={(e) => props.handleChangeInv(e)}
                  />
                  {item.ingredient}
                </label>
              );
            })}
          </div>
          <div className="ing-grp">
            <span className="ing-grp-title">Fruits & Juices</span>
            {fruitList.map((item) => {
              return (
                <label key={uniqid()}>
                  <input
                    type="checkbox"
                    name={item.ingredient}
                    checked={item.inStock}
                    onChange={(e) => props.handleChangeInv(e)}
                  />
                  {item.ingredient}
                </label>
              );
            })}
          </div>
          <div className="ing-grp">
            <span className="ing-grp-title">Others</span>
            {otherList.map((item) => {
              return (
                <label key={uniqid()}>
                  <input
                    type="checkbox"
                    name={item.ingredient}
                    checked={item.inStock}
                    onChange={(e) => props.handleChangeInv(e)}
                  />
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
