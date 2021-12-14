import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
// import { collection, getDocs, doc, setDoc } from "firebase/firestore";
// import { db } from "./Firestore";
import axios from "axios";
// import uniqid from "uniqid";
import MyBar from "./MyBar";
import MyCocktails from "./MyCocktails";
import BuildBar from "./BuildBar";
import MakeDrink from "./MakeDrink";
import RandomDrink from "./RandomDrink";
import About from "./About";

function PageMain() {
  const [testCocktail, setTestCocktail] = useState({});
  const [testloading, setTestLoading] = useState(false);

  // useEffect(() => {
  //   const loadCocktail = async () => {
  //     setTestLoading(true);
  //     const fetchData = await axios.get(
  //       "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita"
  //     );
  //     setTestCocktail(fetchData.data);
  //     setTestLoading(false);
  //   };
  //   loadCocktail();
  // }, []);

  useEffect(() => {
    const fetchData = async () => {
      let res = await fetch(
        "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita"
      );
      let response = await res.json();
      setTestCocktail(response.data);
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (testCocktail !== {} && testCocktail !== {  }) {
      console.log(testCocktail);
      console.log(testCocktail.drinks[0].strDrink);
    }
  }, [testloading, testCocktail]);

  return (
    <div id="page-main">
      <Routes>
        <Route path="/" element={<MyBar />} />
        <Route path="/cocktails" element={<MyCocktails />} />
        <Route path="/build" element={<BuildBar />} />
        <Route path="/drink" element={<MakeDrink />} />
        <Route path="/random" element={<RandomDrink />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default PageMain;
