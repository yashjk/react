import SearchBar from "./SearchBar";
import RestaurantCard from "./RestaurantCard";
import { restaurantList } from "../utils/data";

const Dashboard = () => (
	<div className="dashboard">
		<SearchBar />
		<div className="res-container">
			{restaurantList?.map((restaurant) => (
				<RestaurantCard key={restaurant.data.id} restaurant={restaurant} />
			))}
		</div>
	</div>
);

export default Dashboard;
