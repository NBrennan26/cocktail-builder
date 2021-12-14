import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import PageMain from "./components/PageMain"

const App = () => {
  return (
    <Router>
      <div>Test</div>
      <PageMain />
    </Router>
  );
};

export default App;
