import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { collection, getDocs, doc, setDoc } from "firebase/firestore";
import { db } from "./Firestore";
import uniqid from "uniqid";
import MyBar from "./MyBar";
import MyCocktails from "./MyCocktails";
import BuildBar from "./BuildBar";
import MakeDrink from "./MakeDrink";
import RandomDrink from "./RandomDrink";
import About from "./About";

function PageMain() {
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
