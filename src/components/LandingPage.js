import React from "react";
import {
  Form,
  Button,
  InputGroup,
  FormControl,
  Container,
  Row,
  Col,
} from "react-bootstrap";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <Container>
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
          <Button className="searchButton" type="submit">
            GO
          </Button>
        </Form>
      </Row>
    </Container>
  );
};

export default LandingPage;
