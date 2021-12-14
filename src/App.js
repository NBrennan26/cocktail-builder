import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import PageMain from "./components/PageMain";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <Header />
      <PageMain />
      <Footer />
    </Router>
  );
};

export default App;
