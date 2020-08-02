import React from "react";
import "./App.css";
import LandingPage from "./components/LandingPage";
import SideRetailBar from "./components/SideRetailBar";
import SearchBar from "./components/SearchBar";
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  return (
        <Router>
           <Switch>
               <Route path="/iphone-x">
                   <div className={ "displayPage" }>
                       <div>
                           <SearchBar />
                       </div>
                       <div>
                           <SideRetailBar />
                       </div>
                   </div>
               </Route>
               <Route path="/">
                   <LandingPage />
               </Route>
           </Switch>
        </Router>
  );
}

export default App;
