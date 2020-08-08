import React from "react";
import {
  Container,
  Row,
} from "react-bootstrap";
import "./LandingPage.css";
import logo from '../cheapies-logo.png';
import SearchBar from "./SearchBar";
// function showProducts() {

// }

const LandingPage = () => {
  return (
    <Container id={ "landingPage" }>
      <div className="logoSection">
        <img src={logo} alt="logo" className="logo"/>
        <h1 className="nameHeading">Cheapies</h1>
      </div>
      <Row xs={12} className="searchContainer">
        <p>Compare TradeMe catalog to retail prices.</p>
        <SearchBar />
      </Row>
    </Container>
  );
};

export default LandingPage;
