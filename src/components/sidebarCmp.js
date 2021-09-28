import * as React from "react";
import { Link } from "gatsby";
import Constants from "../utils/constants";

const constants = new Constants();
const SidebarCmp = ({ pageTitle, children }) => {
	let propsList =  constants.getPropsList()
	let contactList = constants.getExternalList();

	console.log(propsList)

	propsList.forEach(e => {
		console.log(e.url)
	})

	return (
		<div>
			<div className="rows ">
				<div className="row">
					<div className="section">
						<section class="hero">
							<p class="title has-text-right mb-0">
								Alex
							</p>
							<p class="subtitle has-text-right mt-0">
								Computing enthusiast
							</p>
							<figure class="image is-fullwidth">
								<img src="https://bulma.io/images/placeholders/256x256.png" alt="Me :)"/>
							</figure>
						</section>
					</div>
				</div>
				<div className = "row">
					<div className="section has-text-right">
						<p className="is-underlined	">Site Links</p>
						<nav>
							<ul>
								{
									propsList.map((tag) => (
										<>
											{(
												<li>
													<Link to={tag.url}>{tag.text}</Link>
												</li>
											)}
										</>
									))
								}
							</ul>
						</nav>
					</div>
				</div>
				<div className = "row">
					<div class="section has-text-right">
						<p className="is-underlined	">Contact</p>
						<ul>
							{
								contactList.map((tag) => (
									<>
										{(
											<li>
												<Link to={tag.url}>{tag.text}</Link>
											</li>
										)}
									</>
								))
							}
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SidebarCmp;
