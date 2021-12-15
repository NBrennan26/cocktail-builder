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
  const { data, error, isLoading } = useFetch(
    "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita"
  );

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
      <div>
        {!data && isLoading && "Loading..."}
        {!data && error && "Error..."}
        {data &&
          data.drinks.map((drink) => (
            <div key={drink.idDrink}>{drink.strDrink}</div>
          ))}
      </div>
    </div>
  );
}

export default PageMain;
