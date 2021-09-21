import * as React from "react";
import { Link } from "gatsby";

const homeProps = {
	url: "/",
	text: "Home"
}


const aboutProps = {
	url: "/about",
	text: "About Me"
}

const blogProps = {
	url: "/blog",
	text: "Blog"
}

const SidebarCmp = ({ pageTitle, children }) => {
	var propsList = [homeProps, aboutProps, blogProps];
	console.log(propsList)

	propsList.forEach(e => {
		console.log(e.url)
	})

	return (
		<div>
			<div className="rows">
				<div className="row">
					<div className="section has-background-success">
						{children}
					</div>
				</div>
				<div className = "row">
					<div className="section has-text-right has-background-warning">
						<nav>
							<ul>
								{
									propsList.map((tag) => (
										<>
											{ (
												<li>
												{console.log("gekki")}
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
				<div class="content has-text-centered">
					<ul>
						<li>
							HELO
						</li>
					</ul>
				</div>
			</footer>
		</div>
	);
};

export default SidebarCmp;
