import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Form from "./components/Form/Form";
import Dashboard from "./components/Dashboard/Dashboard";

function App() {
	return (
		<div className="App">
			<Header />
			<Dashboard />
			<Form />
		</div>
	);
}

export default App;
