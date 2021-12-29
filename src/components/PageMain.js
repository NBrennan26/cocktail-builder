import React, { useState, useEffect, useRef } from "react";
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
  const [posCocktails, setPosCocktails] = useState([]);
  const [ingredientName, setIngredientName] = useState(null);
  const isMounted = useRef(false);

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

  // Test whether all ingredients are present for each cocktail
  // key = needed ingredients (allIngredientList)
  // test = ingredients present (curIng)
  const verifyIng = (key, test) => {
    let testArr = [];
    test.forEach((item) => {
      testArr.push(item.ingredient);
    });
    return key.every((ing) => testArr.includes(ing.ingredient.toLowerCase()));
  };

  // Loop through allCocktailList and add cocktails that all ingredients are present in curIng to posCocktail (called by useEffect when curIng changes)
  const filterCocktailList = async () => {
    let newList = [];
    let allLength = allCocktailList.length;

    for (let i = 0; i < allLength; i++) {
      if (verifyIng(allCocktailList[i].ingredients, curIng)) {
        if (newList.some((cocktail) => cocktail.id === allCocktailList[i].id)) {
          console.log("already on list");
        } else {
          newList.push(allCocktailList[i]);
        }
      }
    }
    return newList;
  };

  useEffect(() => {
    if (allCocktailList.length > 0) {
      filterCocktailList().then((list) => {
        console.log(list);
        setPosCocktails(list);
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [curIng]);

  // Update localStorage upon change
  useEffect(() => {
    if (isMounted.current) {
      if (
        localStorage.getItem("curBarInv") !== curBarInv &&
        curBarInv.length > 0
      ) {
        localStorage.setItem("curBarInv", JSON.stringify(curBarInv));
      }
      if (
        localStorage.getItem("posCocktails") !== posCocktails &&
        posCocktails.length > 0
      ) {
        localStorage.setItem("posCocktails", JSON.stringify(posCocktails));
      }
      if (
        localStorage.getItem("allCocktailList") !== allCocktailList &&
        allCocktailList.length > 0
      ) {
        localStorage.setItem(
          "allCocktailList",
          JSON.stringify(allCocktailList)
        );
      }
    } else {
      isMounted.current = true;
    }
  }, [allCocktailList, curBarInv, posCocktails]);

  // componentDidMount, load and set from localStorage (if present)
  useEffect(() => {
    if (localStorage.length > 0) {
      // Update curBarInv to localStorage
      // if (localStorage.getItem("curBarInv") !== null) {
      if ("curBarInv" in localStorage) {
        try {
          const storedInv = JSON.parse(localStorage.getItem("curBarInv"));
          setCurBarInv(storedInv);
        } catch (err) {
          console.log(err);
        }
      }
      // Update posCocktails to localStorage
      if (
        localStorage.getItem("posCocktails") !== null &&
        localStorage.getItem("posCocktails").length > 0
      ) {
        const storedPossibles = JSON.parse(
          localStorage.getItem("posCocktails")
        );
        setPosCocktails(storedPossibles);
      }
      // Update allCocktailList to localStorage
      if (
        localStorage.getItem("allCocktailList") !== null &&
        localStorage.getItem("allCocktailList").length > 0
      ) {
        const storedCocktails = JSON.parse(
          localStorage.getItem("allCocktailList")
        );
        setAllCocktailList(storedCocktails);
      }
    } else {
      // Do Nothing
      console.log("no localStorage. Doing Nothing...");
    }
  }, []);

  const clearInv = () => {
    setCurBarInv(IngredientList);
    setCurIng([]);
    setAllCocktailList([]);
    setPosCocktails([]);
    setIngredientName(null);
  };

  return (
    <div id="page-main">
      <Routes>
        <Route path="/" element={<MyBar curBarInv={curBarInv} />} />
        <Route
          path="/build"
          element={
            <BuildBar
              handleChangeInv={handleChangeInv}
              curBarInv={curBarInv}
              clearInv={clearInv}
            />
          }
        />
        <Route
          path="/cocktails"
          element={<MyCocktails posCocktails={posCocktails} />}
        />
        <Route path="/drink" element={<MakeDrink />} />
        <Route
          path="/random"
          element={<RandomDrink posCocktails={posCocktails} />}
        />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default PageMain;
