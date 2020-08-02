import RetailProductCard from "./RetailProductCard";
import React from "react";
import "./sideRetailBar.css";

class SideRetailBar extends React.Component {
	constructor( props ) {
		super( props );
	}

	render() {
		return (
			<div className="retailPriceSidebar">
				<h1 className="retailTitle"> Retail Prices</h1>
				<div style={{ overflow: "scroll", height: "100vh" }}>
					<RetailProductCard
						imageSrc={ "https://cdn.pricespy.co.nz/product/front/800/4939135.jpg" }
						retailName={ "Expert Infotech" }
						productName={ "Apple iPhone XR 64GB" }
						price={ "$1,063.00" }
						rating={ "★★★★★" }
					/>

					<RetailProductCard
						imageSrc={ "https://cdn.pricespy.co.nz/product/standard/800/4939135.jpg" }
						retailName={ "JB Hi-Fi" }
						productName={ "APPLE Apple iPhone XR 64GB (Black)" }
						price={ "$1,149.00" }
						rating={ "★★★☆☆" }
					/>
					<RetailProductCard
						imageSrc={ "https://cdn.pricespy.co.nz/product/front/800/4471962.jpg" }
						retailName={ "PETECH" }
						productName={ "Apple iPhone XR 64GB (Black)" }
						price={ "$1,149.00" }
						rating={ "★★★☆☆" }
					/>
					<RetailProductCard
						imageSrc={ "https://cdn.pricespy.co.nz/product/right/800/4939135.jpg" }
						retailName={ "eSquare" }
						productName={ "iPhone XR" }
						price={ "$1,669.00" }
						rating={ "★★★★☆" }
					/>
				</div>
			</div>
		);
	}

}

export default SideRetailBar