import React from "react";
import {
	Form,
	Button,
	InputGroup,
	FormControl,
} from "react-bootstrap";
import "./LandingPage.css";

export default function SearchBar() {
	return (
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
	);
}