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
						imageSrc={ "https://d2q79iu7y748jz.cloudfront.net/s/_squarelogo/f4966f66724f64a2e9a0f8f937aa8da9" }
						retailName={ "Harvey Norman" }
						productName={ "Apple iPhone XR 64GB" }
						price={ "$1,063.00" }
						rating={ "★★★★★" }
					/>

					<RetailProductCard
						imageSrc={ "https://i.imgur.com/Hp5gqEB.png" }
						retailName={ "Noel Leeming" }
						productName={ "APPLE Apple iPhone XR 64GB (Black)" }
						price={ "$1,149.00" }
						rating={ "★★★☆☆" }
					/>
					<RetailProductCard
						imageSrc={ "https://i.ytimg.com/vi/g9zecfafqyU/maxresdefault.jpg" }
						retailName={ "PB TECH" }
						productName={ "Apple iPhone XR 64GB (Black)" }
						price={ "$1,149.00" }
						rating={ "★★★☆☆" }
					/>
					<RetailProductCard
						imageSrc={ "https://scontent.fakl7-1.fna.fbcdn.net/v/t1.0-9/1001650_574460042604594_220445246_n.png?_nc_cat=104&_nc_sid=09cbfe&_nc_ohc=kQVcZOIU8eYAX8GEpqD&_nc_oc=AQkbrtZZyLJ2aJeIpKX5-6LqoiyCmlRswjx3i4K3Ntl91LPCusjjfB4Eh1JfIkItSv8&_nc_ht=scontent.fakl7-1.fna&oh=65b04050d1d0be1604e7cb858459bd16&oe=5F4A54EB" }
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