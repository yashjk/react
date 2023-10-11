import { LOGO_URL } from "../utils/constants";

const Header = () => {
	return (
		<div className="header">
			<img
				src={LOGO_URL}
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

export default Header;
