module.exports = {
	create: (req, res, next) => {
		const dbInstance = req.app.get("db");
		const { imageUrl, productName, price } = req.body;

		dbInstance
			.create_product([imageUrl, productName, price])

			.then(() => res.sendStatus(200))
			.catch((err) => {
				res.status(500).send({
					errorMessage: "product unavailable"
				});
				console.log(err);
			});
	},
	getOne: (req, res, next) => {
		const dbInstance = req.app.get("db");
		const { id } = req.params;

		dbInstance
			.read_Product(parseInt(id))
			.then((product) => res.status(200).send(product))
			.catch((err) => {
				res.status(500).send({
					errorMessage: "product unavailable"
				});
				console.log(err);
			});
	},
	getAll: (req, res, next) => {
		const dbInstance = req.app.get("db");

		dbInstance
			.read_products()
			.then((products) => res.status(200).send(products))
			.catch((err) => {
				res.status(500).send({
					errorMessage: "product unavailable"
				});
				console.log(err);
			});
	},
	update: (req, res, next) => {
		const dbInstance = req.app.get("db");
		const { params, query } = req;

		dbInstance
			.update_product([params.id, query.desc])
			.then(() => res.sendStatus(200))
			.catch((err) => {
				res.status(500).send({
					errorMessage: "product unavailable"
				});
				console.log(err);
			});
	},
	delete: (req, res, next) => {
		const dbInstance = req.app.get("db");
		const { id } = req.params;

		dbInstance
			.delete_product(id)
			.then(() => res.sendStatus(200))
			.catch((err) => {
				res.status(500).send({
					errorMessage: "product unavailable"
				});
				console.log(err);
			});
	}
};
