import RetailProductCard from "./RetailProductCard";
import React from "react";

class SideRetailBar extends React.Component {
	constructor( props ) {
		super( props );
	}

	render() {
		return (
			<div>
				<h1> Retail Prices</h1>
				<div style={{ overflow: "auto", height: "100vh" }}>
					<RetailProductCard
						imageSrc={ "https://cdn.pricespy.co.nz/product/front/800/4471962.jpg" }
						retailName={ "eSquare" }
						productName={ "Apple iPhone X 64GB Black" }
						price={ "$1,669.00" }
					/>

					<RetailProductCard
						imageSrc={ "https://cdn.pricespy.co.nz/product/front/800/4471962.jpg" }
						retailName={ "eSquare" }
						productName={ "Apple iPhone X 64GB Black" }
						price={ "$1,669.00" }
					/>
					<RetailProductCard
						imageSrc={ "https://cdn.pricespy.co.nz/product/front/800/4471962.jpg" }
						retailName={ "eSquare" }
						productName={ "Apple iPhone X 64GB Black" }
						price={ "$1,669.00" }
					/>
					<RetailProductCard
						imageSrc={ "https://cdn.pricespy.co.nz/product/front/800/4471962.jpg" }
						retailName={ "eSquare" }
						productName={ "Apple iPhone X 64GB Black" }
						price={ "$1,669.00" }
					/>
				</div>
			</div>
		);
	}

}

export default SideRetailBar