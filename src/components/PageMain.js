import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
// import { collection, getDocs, doc, setDoc } from "firebase/firestore";
// import { db } from "./Firestore";
// import uniqid from "uniqid";
import useFetch from "../utilities/useFetch";
import MyBar from "./MyBar";
import MyCocktails from "./MyCocktails";
import BuildBar from "./BuildBar";
import MakeDrink from "./MakeDrink";
import RandomDrink from "./RandomDrink";
import About from "./About";

function PageMain() {
  // const { data, error, isLoading } = useFetch(
  //   "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita"
  // );

  const [userBarInventory, setUserBarInventory] = useState([]);

  const handleChangeInv = (e) => {
    const { name, checked } = e.target;
    console.log(name);
    console.log(checked);
    if (checked) {
      if (userBarInventory.length === 0) {
        setUserBarInventory([name]);
        console.log(userBarInventory);
      } else {
        setUserBarInventory((prevInv) => {
          return [...prevInv, name];
        });
        console.log(userBarInventory);
      }
    } else if (!checked) {
      console.log("no");
      console.log(name);
      const shortenedInv = userBarInventory.filter((item) => item !== name)
      console.log(shortenedInv)
      setUserBarInventory(shortenedInv)
    }
    console.log(userBarInventory);
  };

  useEffect(() => {
    console.log(userBarInventory);
  }, [userBarInventory]);

  return (
    <div id="page-main">
      <Routes>
        <Route path="/" element={<MyBar />} />
        <Route path="/cocktails" element={<MyCocktails />} />
        <Route
          path="/build"
          element={<BuildBar handleChangeInv={handleChangeInv} />}
        />
        <Route path="/drink" element={<MakeDrink />} />
        <Route path="/random" element={<RandomDrink />} />
        <Route path="/about" element={<About />} />
      </Routes>
      {/* <div>
        {!data && isLoading && "Loading..."}
        {!data && error && "Error..."}
        {data &&
          data.drinks.map((drink) => (
            <div key={drink.idDrink}>{drink.strDrink}</div>
          ))}
      </div> */}
    </div>
  );
}

export default PageMain;

/*
setPopUpStyle({
  ...popUpStyle,
  display: "none",
});
*/
