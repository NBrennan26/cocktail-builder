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
  const [curIng, setCurIng] = useState([]);
  const [allCocktailList, setAllCocktailList] = useState([]);
  const [ingredientName, setIngredientName] = useState(null);

  // Handle select/Unselect from Bar Builder
  const handleChangeInv = (e) => {
    const { name, checked } = e.target;
    const mappedInv = curBarInv.map((item) => {
      if (item.ingredient === name) {
        // console.log(item);
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

  // Update curIng to only items that are checked
  const updateCurIng = () => {
    const filterIng = curBarInv.filter((item) => {
      return item.inStock;
    });
    setCurIng(filterIng);
  };

  // Fetch Cocktails from API based on selected Ingredient, and Add Cocktails to Cocktail list
  useEffect(() => {
    // Fetch cocktail based on ingredient
    if (ingredientName) {
      getCocktails(
        "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=" +
          ingredientName
      ).then((data) => {
        // Fetch cocktail using ID (for full data)
        if (data) {
          data.drinks.forEach((cocktail) => {
            getCocktails(
              "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=" +
                cocktail.idDrink
            ).then((data) => {
              // Check if cocktail is already on list
              if (
                allCocktailList.some(
                  (cocktail) => cocktail.id === data.drinks[0].idDrink
                )
              ) {
              } else {
                let drink = data.drinks[0];
                // Create ingredient list for cocktail
                let getIngList = (data) => {
                  let ingList = [];
                  for (let i = 1; i <= 8; i++) {
                    if (data["strIngredient" + i]) {
                      let ing = data["strIngredient" + i];
                      let dir = data["strMeasure" + i];
                      ingList.push({ ingredient: ing, measurement: dir });
                    }
                  }
                  return ingList;
                };
                // Create cocktail object
                let newCocktail = {
                  id: drink.idDrink,
                  name: drink.strDrink,
                  glass: drink.strGlass,
                  ingredients: getIngList(drink),
                  instructions: drink.strInstructions,
                  image: drink.strDrinkThumb,
                };
                // Add cocktail object to cocktail list
                setAllCocktailList((cocktails) => [...cocktails, newCocktail]);
              }
            });
          });
        }
      });
    }
    updateCurIng();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [curBarInv]);

  const filterCocktailList = async () => {
    let newList = [];
    for (let i = 0; i < allCocktailList.length; i++) {
      for (let j = 0; j < curIng.length; j++) {
        let ingCount = 0;
        allCocktailList[i].ingredients.forEach((ing) => {
          console.log(ing.ingredient.toLowerCase())
          console.log(curIng[j])
          if (ing === curIng[j]) {
            ingCount += 1
            console.log(ingCount)
          }
        });
      }
      newList.push(allCocktailList[i]);
    }
    console.log(newList);
    return newList;
  };

  ///// NEED TO FIGURE OUT ABOVE LOOP ^^^ /////

  useEffect(() => {
    if (allCocktailList.length > 0) {
      filterCocktailList().then((list) => {
        console.log("useEffected");
      });
    }
  }, [allCocktailList]);

  useEffect(() => {
    // console.log(curBarInv);
    // console.log(curIng);
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
          element={
            <MyCocktails allCocktailList={allCocktailList} curIng={curIng} />
          }
        />
        <Route path="/drink" element={<MakeDrink />} />
        <Route path="/random" element={<RandomDrink />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default PageMain;
