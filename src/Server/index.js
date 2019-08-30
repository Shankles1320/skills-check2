const express = require("express");
const app = express();
const massive = require("massive");
require("dotenv").config();
app.use(express.json());
const controller = require("./controller");

const { CONNECTION_STRING, SERVER_PORT } = process.env;

massive(CONNECTION_STRING, SERVER_PORT)
	.then((dbInstance) => {
		app.set("db", dbInstance);
		console.log("connected");
	})
	.catch((err) => console.log(err));

app.post("/api/products", controller.create);
app.get("/api/products", controller.getAll);
app.get("/api/products/:id", controller.getOne);
app.put("/api/products/:id", controller.update);
app.delete("/api/products/:id", controller.delete);

const port = 4000;
app.listen(port, () => {
	console.log(`Gettin Schwifty on ${port}`);
});
