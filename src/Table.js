import React from "react";

class Table extends React.Component {

	componentDidMount() {
		const myHeaders = new Headers();
		myHeaders.append("Content-Type", "application/json");
		myHeaders.append("Authorization", "OAuth oauth_consumer_key=\"05BBDEDB2C2E73349E5C0F02C37BF90A\",oauth_token=\"E120C725F36E1610A1507732BC1FAE07\",oauth_signature_method=\"HMAC-SHA1\",oauth_timestamp=\"1596246902\",oauth_nonce=\"9mBfXAhEQh1\",oauth_version=\"1.0\",oauth_signature=\"wkrnszn8p4xBhnECcJC97fA7k3Y%3D\"");
		const requestOptions = {
			method: 'GET',
			headers: myHeaders,
			redirect: 'follow'
		};
		fetch("https://api.tmsandbox.co.nz/v1/Search/General.json?search_string=car", requestOptions)
			.then(response => response.text())
			.then(result => console.log(result))
			.catch(error => console.log('error', error));
	}

	render() {
		return (
			<table className="table table-striped">
				<thead>
				<tr>
					<th scope="col">#</th>
					<th scope="col">First</th>
					<th scope="col">Last</th>
					<th scope="col">Handle</th>
				</tr>
				</thead>
				<tbody>
				<tr>
					<th scope="row">1</th>
					<td>Mark</td>
					<td>Otto</td>
					<td>@mdo</td>
				</tr>
				<tr>
					<th scope="row">2</th>
					<td>Jacob</td>
					<td>Thornton</td>
					<td>@fat</td>
				</tr>
				<tr>
					<th scope="row">3</th>
					<td>Larry</td>
					<td>the Bird</td>
					<td>@twitter</td>
				</tr>
				</tbody>
			</table>
		);
	}
}

export default Table;