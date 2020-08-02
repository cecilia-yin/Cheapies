import React from "react";
import {
  Button,
  Container, Form, FormControl, InputGroup,
  Row,
} from "react-bootstrap";
import "./LandingPage.css";
import { Link } from "react-router-dom";
import logo from '../cheapies-logo.png';
import SearchBar from "./SearchBar";
// function showProducts() {

// }

const LandingPage = () => {
  return (
    <Container id={ "landingPage" }>
      <div className="logoSection">
        <img src={logo} className="logo"/>
        <h1 className="nameHeading">Cheapies</h1>
      </div>
      <Row xs={12} className="searchContainer">
        <SearchBar />
      </Row>
    </Container>
  );
};

export default LandingPage;
