import React from "react";
import {
  Button,
  Container, Form, FormControl, InputGroup,
  Row,
} from "react-bootstrap";
import "./LandingPage.css";
import { Link } from "react-router-dom";
import logo from '../cheapies-logo.png';
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
        <Form inline className="searchBar">
        <div className="subtitle">
          <p>Compare TradeMe prices with other retailers.</p>
        </div>
          <Form.Label htmlFor="inlineFormInputGroupUsername2" srOnly>
            Username
          </Form.Label>
          <InputGroup>
            <FormControl
                id="inlineFormInputGroupUsername2"
                placeholder="Search Catalogue"
                className="shadow-none"
            />
          </InputGroup>
          <Link to={ "/iphone-x" }>
            <Button className="searchButton" type="submit">
              GO
            </Button>
          </Link>
        </Form>
      </Row>
    </Container>
  );
};

export default LandingPage;
