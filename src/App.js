import React from "react";
import "./App.css";
import LandingPage from "./components/LandingPage";
import SideRetailBar from "./components/SideRetailBar";
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import TrademeListings from "./components/TrademeListings";

function App() {
  return (
      <div className={ "App" }>
          <Router>
              <Switch>
                  <Route path="/catalog">
                      <div className={ "displayPage" }>
                          <div>
                              <TrademeListings />
                          </div>
                          <div className="sidebar">
                              <SideRetailBar />
                          </div>
                      </div>
                  </Route>
                  <Route path="/">
                      <LandingPage />
                  </Route>
              </Switch>
          </Router>
      </div>
  );
}

export default App;
