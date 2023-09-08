import React from "react";
import ReactDOM from "react-dom/client";
import { restaurantList } from "./data";

const Header = () => {
	return (
		<div className="header">
			<img
				src="https://img.freepik.com/free-vector/delivery-service-illustrated_23-2148505081.jpg?w=1060&t=st=1693995177~exp=1693995777~hmac=7fe32b4daa696eb6bfd9bf788df42e839fdea9943a739ae742ccd07f9fdbb75a"
				className="logo"
			/>
			<nav className="nav-bar">
				<ul>
					<li>Home</li>
					<li>About</li>
					<li>Contact</li>
					<li>Cart</li>
				</ul>
			</nav>
		</div>
	);
};
const SearchBar = () => (
	<div className="search-container">
		<form className="search-form">
			<input className="search-input" type="search" />
			<button className="search-button" type="submit">
				Search
			</button>
		</form>
	</div>
);
const Dashboard = () => (
	<div className="dashboard">
		<SearchBar />
		<RestaurantContainer />
	</div>
);
const RestaurantContainer = () => {
	return (
		<div className="res-container">
			{restaurantList?.map((restaurant) => (
				<RestaurantCard key={restaurant.data.id} restaurant={restaurant} />
			))}
		</div>
	);
};

const RestaurantCard = (props) => {
	const { name, cuisines, costForTwo, cloudinaryImageId } =
		props.restaurant.data;
	return (
		<div className="res-card">
			<img
				className="res-logo"
				src={`https://media-assets.swiggy.com/swiggy/image/upload/${cloudinaryImageId}`}
			/>
			<h4>{name}</h4>
			<h5>{cuisines.join(", ")}</h5>
			<h6>₹{costForTwo / 100} for two</h6>
			<div className="res-card-footer">
				<span>4.5 stars</span>
				<span>30 minutes</span>
			</div>
		</div>
	);
};

const App = () => (
	<div className="container">
		<Header />
		<Dashboard />
	</div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
