import React from "react";

const MyBar = (props) => {
  const spiritList = props.userBarInventory.filter((item) => {
    return item.type === "spirit";
  });
  const liqueurList = props.userBarInventory.filter((item) => {
    return item.type === "liqueur";
  });
  const bittersList = props.userBarInventory.filter((item) => {
    return item.type === "bitters";
  });
  const syrupList = props.userBarInventory.filter((item) => {
    return item.type === "syrup";
  });
  const juiceList = props.userBarInventory.filter((item) => {
    return item.type === "juice";
  });
  const otherList = props.userBarInventory.filter((item) => {
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
    </div>
  );
};

export default MyBar;
