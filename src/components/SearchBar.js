import React from "react";
import {
	Form,
	Button,
	InputGroup,
	FormControl,
} from "react-bootstrap";
import "./SearchBar.css";
import logo from '../cheapies-logo.png'; 

export default function SearchBar() {
	return (
		<div className="searchBarHeader">
			<div className="logoSection">
        <img src={logo} className="logoSmall"/>
      </div>
			<Form inline className="searchBar">
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
				<Button className="searchButton" type="submit">
					GO
				</Button>
			</Form>
		</div>
	);
}