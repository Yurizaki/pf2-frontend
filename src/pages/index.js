import * as React from "react";
import PageCmp from "../components/pageCmp";
import "./index.scss";
import { useStaticQuery, graphql } from "gatsby";
import SEO from "../components/Seo";
import { Link } from "gatsby";

const sideChil = <>side bar child her</>;
export const query = graphql`
	query {
		allContentfulBlog(sort: {order: DESC, fields: createdAt}, limit: 5) {
			edges {
				node {
					title
					slug
					excerpt
					updatedAt
					createdAt
					metadata {
						tags {
							name
						}
					}
				}
			}
		}
	}
`;

const IndexPage = (props) => {
	let topExcerpts = []
	if(props) {
		if(props.data.allContentfulBlog) {
			topExcerpts = props.data.allContentfulBlog.edges;
		}
	}
	console.log("props")
	console.log(topExcerpts)

	return (
		<div>
			<SEO title="Home" />
			<PageCmp hasSidebar={true} pageTitle="Alex" sideChil={sideChil}>
				<div className="section p-0 pb-3 has-text-centered">
					<p class="title is-3 is-spaced mb-1">Latest Blog Content</p>
					<p class="subtitle is-6">Feel free to click and read any conent you may find on this site. The following are some of the latest articles I've written.</p>
				</div>

				<div id="rich-text-body" className="content">
					{
						topExcerpts.map((element) => (
							<Link to={"/blogs/"+element.node.slug}>
								<div className="message is-info">
									<p class="message-header mb-0">{element.node.title}</p>
									<p class="message-body">{element.node.excerpt}</p>
								</div>
							</Link>
						))
					}
				</div>

				<div className="section p-0 pt-3 has-text-right">
					<Link to="/blogs"><button class="button">More Blogs</button></Link>
				</div>
			</PageCmp>
		</div>
	);
};

export default IndexPage;
