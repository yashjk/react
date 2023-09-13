import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Dashboard from "./src/components/Dashboard";

const App = () => (
	<div className="container">
		<Header />
		<Dashboard />
	</div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
