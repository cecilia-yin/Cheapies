import React from "react";
import {
	Form,
	Button,
	InputGroup,
	FormControl,
} from "react-bootstrap";
import "./SearchBar.css";
import { Link } from "react-router-dom";

export default function SearchBar() {
	return (
		<Form inline className="searchBar">
			<Form.Label className="searchInput" id="inlineFormInputGroupUsername2" srOnly>
				Username
			</Form.Label>
			<InputGroup>
				<FormControl
					id="inlineFormInputGroupUsername2"
					placeholder="Search Catalogue"
				/>
			</InputGroup>
			<Link to={ "/catalog" }>
				<Button className="searchButton" type="submit">
					GO
				</Button>
			</Link>
		</Form>
	);
}