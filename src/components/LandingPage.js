import React from "react";
import {
  Button,
  Container, Form, FormControl, InputGroup,
  Row,
} from "react-bootstrap";
import "./LandingPage.css";
import { Link } from "react-router-dom";

function showProducts() {

}

const LandingPage = () => {
  return (
    <Container id={ "landingPage" }>
      <Row>
        <div style={{ width: 300, backgroundColor: "black", height: 100 }} />
      </Row>
      <Row xs={12} className="searchContainer">
        <Form inline className="searchBar">
          <Form.Label htmlFor="inlineFormInputGroupUsername2" srOnly>
            Username
          </Form.Label>
          <InputGroup>
            <FormControl
                id="inlineFormInputGroupUsername2"
                placeholder="&#xF002; Search Catalogue"
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
