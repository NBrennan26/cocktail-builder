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
  // const { data, error, isLoading } = useFetch(
  //   "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita"
  // );

  const [curBarInv, setCurBarInv] = useState(IngredientList);
  const [allCocktailList, setAllCocktailList] = useState([]);
  const [ingredientName, setIngredientName] = useState(null);

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

  const getIngName = (name) => {
    setIngredientName(name.replace(/\s/g, "_"));
  };

  useEffect(() => {
    console.log(curBarInv);
  }, [curBarInv]);

  useEffect(() => {
    if (ingredientName) {
      getCocktails(
        "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=" +
          ingredientName
      ).then((data) => {
        if (data) {
          // console.log(data);
          // console.log(data.drinks);
          data.drinks.forEach((cocktail) => {
            getCocktails(
              "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=" +
                cocktail.idDrink
            ).then((data) => {
              console.log(data);
              console.log(data.drinks[0]);
              setAllCocktailList((cocktails) => [...cocktails, data.drinks[0]]);
            });
          });
        }
      });
      console.log(allCocktailList);
    }
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
        <Route path="/cocktails" element={<MyCocktails />} />
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
