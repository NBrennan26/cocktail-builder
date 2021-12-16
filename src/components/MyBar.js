import React from "react";

const MyBar = (props) => {
  const inStockList = props.curBarInv.filter((item) => {
    return item.inStock;
  });
  const spiritList = inStockList.filter((item) => {
    return item.type === "spirit";
  });
  const liqueurList = inStockList.filter((item) => {
    return item.type === "liqueur";
  });
  const bittersList = inStockList.filter((item) => {
    return item.type === "bitters";
  });
  const syrupList = inStockList.filter((item) => {
    return item.type === "syrup";
  });
  const juiceList = inStockList.filter((item) => {
    return item.type === "juice";
  });
  const otherList = inStockList.filter((item) => {
    return item.type === "other";
  });

  return (
    <div className="main-comp" id="my-bar-main">
      <ul className="my-bar-list">
        <span className="ing-grp-title">Spirits</span>
        {spiritList.map((item) => {
          return <li className="in-stock-ing">{item.ingredient}</li>;
        })}
      </ul>
      <ul className="my-bar-list">
        <span className="ing-grp-title">Liqueurs</span>
        {liqueurList.map((item) => {
          return <li className="in-stock-ing">{item.ingredient}</li>;
        })}
      </ul>
      <ul className="my-bar-list">
        <span className="ing-grp-title">Bitters</span>
        {bittersList.map((item) => {
          return <li className="in-stock-ing">{item.ingredient}</li>;
        })}
      </ul>
      <ul className="my-bar-list">
        <span className="ing-grp-title">Syrups</span>
        {syrupList.map((item) => {
          return <li className="in-stock-ing">{item.ingredient}</li>;
        })}
      </ul>
      <ul className="my-bar-list">
        <span className="ing-grp-title">Juices</span>
        {juiceList.map((item) => {
          return <li className="in-stock-ing">{item.ingredient}</li>;
        })}
      </ul>
      <ul className="my-bar-list">
        <span className="ing-grp-title">Other</span>
        {otherList.map((item) => {
          return <li className="in-stock-ing">{item.ingredient}</li>;
        })}
      </ul>
    </div>
  );
};

export default MyBar;
