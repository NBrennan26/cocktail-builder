import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
// import { collection, getDocs, doc, setDoc } from "firebase/firestore";
// import { db } from "./Firestore";
// import uniqid from "uniqid";
import getCocktails from "../utilities/GetCocktails";
import IngredientList from "../utilities/IngredientList";
import MyBar from "./MyBar";
import MyCocktails from "./MyCocktails";
import BuildBar from "./BuildBar";
import MakeDrink from "./MakeDrink";
import RandomDrink from "./RandomDrink";
import About from "./About";

function PageMain() {
  const [curBarInv, setCurBarInv] = useState(IngredientList);
  const [allCocktailList, setAllCocktailList] = useState([]);
  const [ingredientName, setIngredientName] = useState(null);

  // Handle select/Unselect from Bar Builder
  const handleChangeInv = (e) => {
    const { name, checked } = e.target;
    const mappedInv = curBarInv.map((item) => {
      if (item.ingredient === name) {
        console.log(item);
        item.inStock = checked;
      }
      return item;
    });
    setCurBarInv(mappedInv);
    getIngName(name);
  };

  // Replace spaces in names with underscores
  const getIngName = (name) => {
    setIngredientName(name.replace(/\s/g, "_"));
  };

  // Fetch All cocktails that include selected ingredient, and add those cocktails to allCocktailList if not already present
  useEffect(() => {
    if (ingredientName) {
      getCocktails(
        "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=" +
          ingredientName
      ).then((data) => {
        if (data) {
          data.drinks.forEach((cocktail) => {
            getCocktails(
              "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=" +
                cocktail.idDrink
            ).then((data) => {
              if (
                allCocktailList.some(
                  (cocktail) => cocktail.idDrink === data.drinks[0].idDrink
                )
              ) {
                console.log("Already In List");
              } else {
                console.log("Adding...");
                setAllCocktailList((cocktails) => [
                  ...cocktails,
                  data.drinks[0],
                ]);
              }
            });
          });
        }
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [curBarInv]);

  return (
    <div id="page-main">
      <Routes>
        <Route path="/" element={<MyBar curBarInv={curBarInv} />} />
        <Route
          path="/build"
          element={
            <BuildBar handleChangeInv={handleChangeInv} curBarInv={curBarInv} />
          }
        />
        <Route
          path="/cocktails"
          element={<MyCocktails allCocktailList={allCocktailList} />}
        />
        <Route path="/drink" element={<MakeDrink />} />
        <Route path="/random" element={<RandomDrink />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default PageMain;
