import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
// import { collection, getDocs, doc, setDoc } from "firebase/firestore";
// import { db } from "./Firestore";
// import uniqid from "uniqid";
// import useFetch from "../utilities/useFetch";
import IngredientList from "../utilities/IngredientList";
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

  const [curBarInv, setCurBarInv] = useState(IngredientList)

  const handleChangeInv = (e) => {
    const { name, checked } = e.target;
    const mappedInv = curBarInv.map((item) => {
      if (item.ingredient === name) {
        console.log(item)
        item.inStock = checked
      }
      return item
    })
    setCurBarInv(mappedInv)
  };

  useEffect(() => {
    console.log(curBarInv)
  }, [curBarInv])

  return (
    <div id="page-main">
      <Routes>
        <Route
          path="/"
          element={<MyBar curBarInv={curBarInv} />}
        />
        <Route path="/cocktails" element={<MyCocktails />} />
        <Route
          path="/build"
          element={
            <BuildBar
              handleChangeInv={handleChangeInv}
              curBarInv={curBarInv}
            />
          }
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
