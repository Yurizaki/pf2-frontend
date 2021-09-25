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
			navMenu: "navbar-menu" + " " + this.setBurg(),
			burgerIcon: "navbar-burger" + " " + this.setBurg(),
		});
	};

	render() {
        let propsList =  constants.getPropsList()
        let contactList = constants.getExternalList();

		return (
			<nav class="navbar" role="navigation" aria-label="main navigation">
				<div class="navbar-brand">
					<a class="navbar-item" href="https://bulma.io"></a>

					<a
						role="button"
						class={this.state.burgerIcon}
						aria-label="menu"
						aria-expanded="false"
						data-target="navbarBasicExample"
						onClick={this.toggleBurger}
					>
						<span aria-hidden="true"></span>
						<span aria-hidden="true"></span>
						<span aria-hidden="true"></span>
					</a>
				</div>
				<div id="navbarBasicExample" class={this.state.navMenu}>
					<div className="navbar-start">
                        <ul>
                            {
                                propsList.map((tag) => (
                                    <>
                                        {(
                                            <li className="navbar-item">
                                                <Link to={tag.url}>{tag.text}</Link>
                                            </li>
                                        )}
                                    </>
                                ))
                            }
                        </ul>
					</div>
				</div>
			</nav>
		);
	}
}

export default BurgerBar;

// let burgerIcon = "navbar-burger";
// let isActive = "is-active"
// function toggleBurger() {
//     burgerIcon = burgerIcon.includes(isActive) ? "navbar-burger" : "navbar-burger is-active";
//     console.log(burgerIcon)
// }

// // export default function BurgerBar ()  {
// };
