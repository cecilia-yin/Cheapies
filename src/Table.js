import React from "react";

class Table extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    //-------------------------COPIED FROM POSTMAN-------------------------//

    const myHeaders = new Headers();
    myHeaders.append(
      "Authorization",
      'OAuth oauth_consumer_key="05BBDEDB2C2E73349E5C0F02C37BF90A",oauth_token="E120C725F36E1610A1507732BC1FAE07",oauth_signature_method="HMAC-SHA1",oauth_timestamp="1596254053",oauth_nonce="Tr8RJKuiSfq",oauth_version="1.0",oauth_signature="sf3%2BXhLp1%2B21IoX8j9dixmN4FT4%3D"'
    );

    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(
      "https://api.tmsandbox.co.nz/v1/Search/General.json?search_string=iphone",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        this.setState({
          data: result.List,
        });
      })
      .catch((error) => console.log("error", error));

    //----------------------------------------------------------------------//
  }

  render() {
    return (
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Listing ID</th>
            <th scope="col">Image</th>
            <th scope="col">Name</th>
            <th scope="col">Buy Now</th>
            <th scope="col">Start Price</th>
            <th scope="col">Condition</th>
            <th scope="col">Member Rating</th>
            <th scope="col">Member ID</th>
          </tr>
        </thead>
        <tbody>
          {this.state.data.map((item, index) => {
            return (
              <tr key={item.ListingId}>
                <th scope="row">{item.ListingId}</th>
                <th scope="row">
                  <img src={item.PictureHref} />
                </th>
                <th scope="row">{item.Title}</th>
                <th scope="row">{item.PriceDisplay}</th>
                <th scope="row">
                  {item.IsBuyNowOnly ? "Buy Now ONLY" : "$" + item.StartPrice}
                </th>
                <th scope="row">{item.IsNew ? "New" : "Used"}</th>
                <th scope="row">API Required</th>
                <th scope="row">{item.MemberId}</th>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}

export default Table;
