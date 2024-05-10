import logo from '../assets/logo.png';

export default function Header() {
	return (
		<nav>
			<div className="logo">
				<img src={logo} alt="logo" />
			</div>
			<div className="header-text">
				<p className="header-text--primary">Memory Game</p>
				<p className="header-text--secondary">Click on an image once!</p>
			</div>
		</nav>
	);
}
