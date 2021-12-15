import React from "react";

const MyBar = (props) => {

  const inStockList = props.curBarInv.filter(item => {
    return item.inStock
  })
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

  console.log(
    spiritList,
    liqueurList,
    bittersList,
    syrupList,
    juiceList,
    otherList
  );

  return (
    <div className="main-comp">
      <div>My Bar Page</div>
      <ul>
        {spiritList.map((item) => {
              return (
                <li>
                  {item.ingredient}
                </li>
              );
            })}
      </ul>
    </div>
  );
};

export default MyBar;
