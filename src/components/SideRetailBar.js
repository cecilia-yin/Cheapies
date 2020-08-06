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
				<h1 className="retailTitle">Retail Prices</h1>
				<div style={{ overflow: "scroll"}}>
					<RetailProductCard
						imageSrc={ "https://www.pihaslsc.com/wp-content/uploads/2019/09/harvey-norman.jpg" }
						retailName={ "Harvey Norman" }
						productName={ "APPLE Apple iPhone XR 64GB (Black)" }
						price={ "$1,063.00" }
						rating={ "★★★☆☆" }
					/>
										<RetailProductCard
						imageSrc={ "data:image/png;base64,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" }
						retailName={ "JB Hi-Fi" }
						productName={ "Apple iPhone XR 64GB" }
						price={ "$1,099.00" }
						rating={ "★★★★★" }
					/>
					<RetailProductCard
						imageSrc={ "https://channellife.co.nz/uploads/story/2015/04/14/preview_NL-Logo.jpg" }
						retailName={ "Noel Leeming" }
						productName={ "iPhone XR" }
						price={ "$1,149.00" }
						rating={ "★★★★☆" }
					/>
					<RetailProductCard
						imageSrc={ "https://www.pbtech.co.nz/fileslib/_20200722132950_about_pb-tech_thumbnail.jpg" }
						retailName={ "PB Tech" }
						productName={ "Apple iPhone XR 64GB (Black)" }
						price={ "$1,149.00" }
						rating={ "★★★☆☆" }
					/>
				</div>
			</div>
		);
	}

}

export default SideRetailBar