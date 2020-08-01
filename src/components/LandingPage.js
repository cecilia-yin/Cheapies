import React from "react";
import { Form, Button, InputGroup, FormControl } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const LandingPage = () => {
  const element = <FontAwesomeIcon icon={faSearch} />;
  const v = (
    <div>
      <Form inline>
        <Form.Label htmlFor="inlineFormInputGroupUsername2" srOnly>
          Username
        </Form.Label>
        <InputGroup className="mb-2 mr-sm-2">
          <InputGroup.Prepend>
            <InputGroup.Text>{element}</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            id="inlineFormInputGroupUsername2"
            placeholder="What are you looking for"
            style={{ width: 500 }}
          />
        </InputGroup>

        <Button type="submit" className="mb-2">
          Search
        </Button>
      </Form>
    </div>
  );
  return v;
};

export default LandingPage;
