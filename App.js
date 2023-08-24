const heading1 = React.createElement("h1", { id: "heading1" }, "Heading 1");
const heading2 = React.createElement("h1", { id: "heading2" }, "Heading 2");
import React from "react";
import ReactDOM from "react-dom/client";

const title = React.createElement("div", { id: "title" }, [heading1, heading2]);
const container = React.createElement("div", { id: "container" }, [
	title,
	title,
]);

const container2 = React.createElement("div", { id: "container" }, [
	title,
	title,
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render([container, container2]);
