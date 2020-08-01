import React from "react";
import "./App.css";
import LandingPage from "./components/LandingPage";
import SideRetailBar from "./SideRetailBar";

function App() {
  return (
    <div className="App">
        <LandingPage />
        <div>This is the trademe list</div>
        <SideRetailBar />
    </div>
  );
}

export default App;
