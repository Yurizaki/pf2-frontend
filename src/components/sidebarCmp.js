import * as React from "react";
import { Link } from "gatsby";
import Constants from "../utils/constants";

const constants = new Constants();
const SidebarCmp = ({ pageTitle, children }) => {
	let propsList = constants.getPropsList();
	let contactList = constants.getExternalList();

	return (
		<div
			className="column
				is-2-widescreen
				is-3-desktop
				is-4-tablet
				is-hidden-mobile
				pb-0
				pl-0
				pr-0
				sidebar"
		>
			<div className="section">
					<section className="hero">
						<p className="title has-text-right mb-0">Alex</p>
						<p className="subtitle has-text-right mt-0">
							Computing & Cybersecurity enthusiast
						</p>
						<figure className="image is-fullwidth">
							<img
								src="https://bulma.io/images/placeholders/256x256.png"
								alt="Me :)"
							/>
						</figure>
					</section>
				</div>
			<div className="section has-text-right sidebar-section">
					<p className="is-underlined	">Site Links</p>
					<nav>
						<ul>
							{propsList.map((tag) => (
								<>
									{
										<li>
											<Link to={tag.url}>{tag.text}</Link>
										</li>
									}
								</>
							))}
						</ul>
					</nav>
				</div>
			<div className="section has-text-right sidebar-section">
					<p className="is-underlined	">Contact</p>
					<ul>
						{contactList.map((tag) => (
							<>
								{
									<li>
										<Link to={tag.url}>{tag.text}</Link>
									</li>
								}
							</>
						))}
					</ul>
				</div>
		</div>
	);
};

export default SidebarCmp;
