import * as React from "react";
import PageCmp from "../components/pageCmp";
import "./index.scss";
import { graphql } from "gatsby";
import Seo from "../components/Seo";
import { Link } from "gatsby";
import { getBgCol } from "../utils/colors";
import ColorToggleCmp from "../components/colorToggleCmp";

const sideChil = <>side bar child her</>;
export const query = graphql`
	query {
		allContentfulBlog(sort: { order: DESC, fields: createdAt }, limit: 5) {
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
	let topExcerpts = [];
	if (props) {
		if (props.data.allContentfulBlog) {
			topExcerpts = props.data.allContentfulBlog.edges;
		}
	}

	let createdAt = new Date(
		props.data.allContentfulBlog.edges[0].node.createdAt
	);

	createdAt =
		createdAt.getDate() +
		"-" +
		createdAt.getMonth() +
		"-" +
		createdAt.getFullYear();

	const col = getBgCol();
	return (
		<div className={col}>
			<Seo title="Home" />
			<PageCmp
				hasSidebar={true}
				pageTitle="Alex"
				sideChil={sideChil}
				col={col}
			>
				<ColorToggleCmp url="/"></ColorToggleCmp>
				<div className="section p-0 pb-3 has-text-right">
					<p className="title is-3 is-spaced mb-1">
						Latest Blog Content
					</p>
					<p className="subtitle is-6">
						Feel free to click and read any conent you may find on
						this site. The following are some of the latest articles
						I've written.
					</p>
				</div>

				{topExcerpts.map((element) => (
					<div>
						<div class="card">
							<div className="columns p-0 m-0 is-mobile">
								<div className="column is-one-fifth-desktop p-0 m-0 is-hidden-mobile">
									<figure class="image is-4by3">
										<img
											src="https://bulma.io/images/placeholders/1280x960.png"
											alt="Placeholder image"
										/>
									</figure>
								</div>

								<div className="column is-three-fifths-desktop p-0 m-0">
									<div class="card-content p-2 m-0">
										<div class="content">
											<p class="title is-size-5 p-0 m-0">
												{element.node.title}
											</p>
											<p class="subtitle is-size-7 p-0 m-0 mt-3">
												{element.node.excerpt}
											</p>
											<div className="columns mt-3 p-0 m-0 ">
												<span className="tag tag-tag m-0 p-0 pl-2 pr-2">
													Created
													: { new Date(element.node.createdAt).getDate() }
													-{ new Date(element.node.createdAt).getMonth() }
													-{ new Date(element.node.createdAt).getFullYear() }
												</span>
												<Link
													className="p-0 m-0 ml-2"
													to={
														"/blogs/" +
														element.node.slug
													}
												>
													Read Arcticle...
												</Link>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div className="card-separator mb-3"></div>
					</div>
				))}


				<div className="section p-0 pt-3 has-text-right">
					<Link to="/blogs">
						<button className="button">More Blogs...</button>
					</Link>
				</div>
			</PageCmp>
		</div>
	);
};

export default IndexPage;
