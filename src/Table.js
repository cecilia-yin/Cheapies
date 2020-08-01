import React from "react";

class Table extends React.Component {

	constructor ( props ) {
		super( props );

		this.state = {
			data: []
		}
	}

	componentDidMount() {
		const myHeaders = new Headers();
		myHeaders.append("Authorization", "OAuth oauth_consumer_key=\"05BBDEDB2C2E73349E5C0F02C37BF90A\",oauth_token=\"E120C725F36E1610A1507732BC1FAE07\",oauth_signature_method=\"HMAC-SHA1\",oauth_timestamp=\"1596254053\",oauth_nonce=\"Tr8RJKuiSfq\",oauth_version=\"1.0\",oauth_signature=\"sf3%2BXhLp1%2B21IoX8j9dixmN4FT4%3D\"");

		const requestOptions = {
			method: 'GET',
			headers: myHeaders,
			redirect: 'follow'
		};

		fetch("https://api.tmsandbox.co.nz/v1/Search/General.json?search_string=iphone", requestOptions)
			.then(response => response.json())
			.then(result => {
				console.log( result );
				this.setState({
					data: result.List
				});
			})
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
				{
					this.state.data.map( ( item, index ) => {
						return (
							<tr key={ item.ListingId }>
								<th scope="row">{ item.Title }</th>
								<th scope="row">{ item.Title }</th>
								<th scope="row">{ item.Title }</th>
								<th scope="row">{ item.Title }</th>
							</tr>
						);
					})
				}
				</tbody>
			</table>
		);
	}
}

export default Table;