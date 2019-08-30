import React, { Component } from "react";
import axios from "axios";

export default class Form extends Component {
	constructor() {
		super();
		this.state = {
			addedInv: [],
			imageUrl: "",
			productName: "",
			price: ""
		};
		this.addInventory = this.addInventory.bind(this);
		this.removeProduct = this.removeProduct.bind(this);
	}

	componentDidMount() {
		axios.get("http://localhost/3000/api/products").then((response) => {
			this.setState({ addedInv: response });
			console.log(response);
		});
	}

	addInventory() {
		const { imageUrl, productName, price } = this.state;
		const newProduct = { imageUrl, productName, price };

		axios
			.post("http://localhost/3000/api/products", newProduct)
			.then((response) => {
				this.setState({
					addedInv: response,
					imageUrl: "",
					productName: "",
					price: ""
				});
			});
	}

	removeProduct(id) {
		axios.delete(`/api/products/${id}`).then((response) => {
			this.setState({ addedInv: response.data });
		});
	}

	render() {
		const { imageUrl, productName, price } = this.state;
		return (
			<div>
				<div>Form Component</div>
				<form
					onSubmit={(event) => {
						event.preventDefault();
						this.addInventory();
					}}
				>
					<input
						placeholder="Image Url"
						onChange={(event) =>
							this.setState({ imageUrl: [event.target.value] })
						}
						value={imageUrl}
					/>
					<input
						placeholder="Product name"
						onChange={(event) =>
							this.setState({ productName: [event.target.value] })
						}
						value={productName}
					/>
					<input
						placeholder="Price"
						onChange={(event) => this.setState({ price: [event.target.value] })}
						value={price}
					/>
					<div>
						<button>{this.addedInv}Add to Inventory</button>
					</div>
					<div>
						<button>Cancle</button>
					</div>
				</form>
			</div>
		);
	}
}
