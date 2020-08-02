import React from "react";
import "./trademeListings.css";

class trademeListings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      loading: false,
    };
  }

  async componentDidMount() {
    //-------------------------COPIED FROM POSTMAN-------------------------//

    var myHeaders = new Headers();
    myHeaders.append(
      "Authorization",
      'OAuth oauth_consumer_key="D17F85682EC9E85C5331A5EC8A37EF6C",oauth_token="746E8773C90D93C49F3FA90746AB6A16",oauth_signature_method="PLAINTEXT",oauth_timestamp="1596318103",oauth_nonce="kyKViad40SC",oauth_version="1.0",oauth_signature="E2C3B1648930003B5A57AEA51486DDF0%2641D0238FC64939626282B97CEEDFF79E"'
    );
    myHeaders.append(
      "Cookie",
      "TS01412e73=0102463f1808de7b9032c610b6879ba3256b072466a108738f256a727d454960390b5f73914c68d3d0a9a815cd96dcbd9706a765ee"
    );

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    // Variable for Search Term
    const searchTerm = "iphone x 64gb silver";
    let results = [];

    await fetch(
      "https://api.trademe.co.nz/v1/Search/General.json?search_string=" +
        searchTerm,
      requestOptions
    )
      .then((response) => response.json())
      .then(async (result) => {
        results = result.List.slice(0, 10);
        for (let i = 0; i < results.length; i++) {
          // Fetch is Asynchronous - Need to behave synchronously
          await fetch(
            `https://api.trademe.co.nz/v1/Member/${results[i].MemberId}/FeedbackCount.json`,
            requestOptions
          )
            .then((response) => response.text())
            .then((result) => {
              // console.log(result);
              results[i].feedback = JSON.parse(result);
              // console.log(results[i].feedback);
            })
            .catch((error) => console.log("error", error));

          // console.log(results);
          this.setState({
            data: results,
          });
        }
        this.setState({
          loading: true,
        });
      })
      .catch((error) => console.log("error", error));

    //----------------------------------------------------------------------//
  }

  render() {
    if (this.state.loading) {
      return (
        <div className="trademeListings">
          {this.state.data.map((item, index) => {
            let imageUrl = item.PictureHref.replace("thumb", "tq");
            console.log(item);

            return (
              <div key={item.ListingId} className="listingCard">
                <div className="imageDiv">
                  <img className="listingImage" src={imageUrl} />
                </div>

                <div className="listingContent">
                  <h1 className="listingTitle listingText">{item.Title}</h1>
                  {!item.HasBuyNow && !item.IsBuyNowOnly && (
                    <h3 className=" listingText">{`Current Bid: ${item.PriceDisplay}`}</h3>
                  )}

                  {item.IsBuyNowOnly && (
                    <h3 className=" listingText">{`Buy Now: $${item.BuyNowPrice}`}</h3>
                  )}

                  {item.HasBuyNow && !item.IsBuyNowOnly && (
                    <h3 className=" listingText">{`Buy Now: $${item.BuyNowPrice}`}</h3>
                  )}

                  {item.HasBuyNow && !item.IsBuyNowOnly && (
                    <h3 className=" listingText">{`Current Bid: ${item.PriceDisplay}`}</h3>
                  )}

                  <h3 className="listingText">{`Seller Rating: ${item.feedback.TotalCount}`}</h3>
                </div>
              </div>
            );
          })}
        </div>
      );
    } else {
      return <h1>Loading</h1>;
    }
  }
}

export default trademeListings;
