import React from "react";

class RetailProductCard extends React.Component {
	constructor( props ) {
		super( props );
	}

	render() {
		return (
			<div className="card mb-3">
				<div className="row no-gutters">
					<div className="col-md-4">
						<img src={ this.props.imageSrc } className="card-img" alt="image for phone" />
					</div>
					<div className="col-md-8">
						<div className="card-body">
							<h5 className="card-title">{ this.props.retailName }</h5>
							<hr/>
							<div className="row">
								<div className="col-6">
									<p className="card-text"><small className="text-muted">{ this.props.productName }</small></p>
								</div>
								<div className="col-6">
									<p className="card-text"><small className="text-muted">{ this.props.price }</small></p>
								</div>
							</div>
							<div className="row">
								<div className="col-6">
									<p className="card-text"><small className="text-muted">{ "Store rating" }</small></p>
								</div>
								<div className="col-6">
									<p className="card-text"><small className="text-muted">{ this.props.rating }</small></p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default RetailProductCard;