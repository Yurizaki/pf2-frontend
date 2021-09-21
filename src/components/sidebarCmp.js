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

const github = {
	url: "https://github.com/Yurizaki",
	text: "Github"
}

const linkedin = {
	url: "https://www.linkedin.com/in/alex-holmes-296435128",
	text: "LinkedIn"
}


const SidebarCmp = ({ pageTitle, children }) => {
	var propsList = [homeProps, aboutProps, blogProps];
	var contactList = [github, linkedin];

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
								<img src="https://bulma.io/images/placeholders/256x256.png"/>
							</figure>
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
