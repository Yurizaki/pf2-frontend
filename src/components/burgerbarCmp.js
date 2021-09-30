import * as React from "react";
import { Link } from "gatsby";
import Constants from "../utils/constants";

const constants = new Constants();
class BurgerBar extends React.Component {
	state = {
		burgerIcon: "navbar-burger",
		navMenu: "navbar-menu",
		active: false,
	};

	setBurg = () => {
		return this.state.active ? "" : "is-active";
	};

	toggleBurger = () => {
		this.setState({
			active: !this.state.active,
			navMenu: "navbar-menu " + this.setBurg(),
			burgerIcon: "navbar-burger " + this.setBurg(),
		});

	};

	render() {
		let propsList = constants.getPropsList();

		return (
			<div className="columns mr-0 is-hidden-tablet">
				<div className="column pr-0">
					<nav
						className="navbar burger-nav"
						role="navigation"
						aria-label="main navigation"
					>
						<div className="navbar-brand">
							<span
								role="button"
								className={this.state.burgerIcon}
								aria-label="menu"
								aria-expanded="false"
								data-target="navbarBasicExample"
								onClick={this.toggleBurger}
							>
								<span aria-hidden="true"></span>
								<span aria-hidden="true"></span>
								<span aria-hidden="true"></span>
							</span>
						</div>
						<div id="navbarBasicExample" className={this.state.navMenu}>
							<div className="navbar-start">
								<ul>
									{propsList.map((tag) => (
										<>
											{
												<Link to={tag.url}>
													<li className="navbar-item">
														{tag.text}
													</li>
												</Link>
											}
										</>
									))}
								</ul>
							</div>
						</div>
					</nav>
				</div>
			</div>
		);
	}
}

export default BurgerBar;