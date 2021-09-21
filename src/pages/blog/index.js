// Step 1: Import React
import * as React from "react";
import SidebarCmp from "../../components/sidebarCmp";
import { Link } from "gatsby";

// Step 2: Define your component
const BlogPage = () => {
	return (
		<main>
			<SidebarCmp>

			</SidebarCmp>

			<Link to="/about">About</Link>
			<title>About Me</title>
			<h1>About Me</h1>
			<p>
				Hi there! I'm the proud creator of this site, which I built with
				Gatsby.
			</p>
		</main>
	);
};

// Step 3: Export your component
export default BlogPage;
