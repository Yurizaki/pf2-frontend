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
			<div className="rows">
				<div className="row">
					<div className="section has-background-success">
						<section class="hero">
							<p class="title has-text-right">
								Title
							</p>
							<figure class="image is-fullwidth">
								<img src="https://bulma.io/images/placeholders/256x256.png" alt="Me :)"/>
							</figure>
							<p class="subtitle has-text-right mt-1">
								Title
							</p>
						</section>
					</div>
				</div>
				<div className = "row">
					<div className="section has-text-right has-background-warning">
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
			</div>
			<footer class="footer">
				<div class="section has-text-right">
					<p>Contact details & links</p>
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
			</footer>
		</div>
	);
};

export default SidebarCmp;
