import * as React from "react";
import PageCmp from "../components/pageCmp";
import "./index.scss";
import { graphql } from "gatsby";
import Seo from "../components/Seo";
import { Link } from "gatsby";
import { getBgCol, toggleScheme, getSchemeName } from "../utils/colors";

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

	const col = getBgCol();
	return (
		<div className={col}>
			<Seo title="Home" />
			<PageCmp hasSidebar={true} pageTitle="Alex" sideChil={sideChil} col={col}>
				<div className="section p-0 pb-3 has-text-right">
					<Link to="/"><button className="button" onClick={toggleScheme}>Toggle Color: {getSchemeName()}</button></Link>
					<div className="card-separator mb-3 mt-3"></div>
					<p className="title is-3 is-spaced mb-1">Latest Blog Content</p>
					<p className="subtitle is-6">Feel free to click and read any conent you may find on this site. The following are some of the latest articles I've written.</p>
				</div>

				<div id="rich-text-body" className="content">
					{
						topExcerpts.map((element) => (
							<div>
								<div class="card">
									<div class="card-content">
										<p class="title is-size-5 pb-3">{element.node.title}</p>
										<p class="subtitle is-size-6">{element.node.excerpt}</p>
									</div>
									<Link to={"/blogs/"+element.node.slug} >
										<footer class="card-footer">
											<p class="card-footer-item ">
												<span>Read more...</span>
											</p>
										</footer>
									</Link>
								</div>
								<div className="card-separator"></div>
							</div>
						))
					}
				</div>

				<div className="section p-0 pt-3 has-text-right">
					<Link to="/blogs"><button className="button">More Blogs...</button></Link>
				</div>
			</PageCmp>
		</div>
	);
};

export default IndexPage;
