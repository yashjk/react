import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
	const {
		name,
		cuisines,
		costForTwo,
		cloudinaryImageId,
		deliveryTime,
		avgRating,
	} = props?.restaurant?.data;

	return (
		<div className="res-card">
			<img className="res-logo" src={CDN_URL + cloudinaryImageId} />
			<h4>{name}</h4>
			<h5>{cuisines.join(", ")}</h5>
			<h6>₹{costForTwo / 100} for two</h6>
			<div className="res-card-footer">
				<span>{avgRating} stars</span>
				<span>{deliveryTime} minutes</span>
			</div>
		</div>
	);
};

export default RestaurantCard;
