import React from "react";
import ReactDOM from "react-dom/client";

const HeadingComponentOne = () => {
	return (
		<h1 id="heading1" className="heading1">
			Heading 1
		</h1>
	);
};
const HeadingComponentTwo = () => (
	<h1 id="heading2" className="heading2">
		Heading 2
	</h1>
);

const Title = () => (
	<div id="title">
		<HeadingComponentOne />
		<HeadingComponentTwo />
	</div>
);
const Container = () => {
	return (
		<div id="container">
			<Title />
		</div>
	);
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Container />);
