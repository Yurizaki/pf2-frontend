import * as React from "react";
import PageCmp from "../components/pageCmp";
import "./index.scss";
import { graphql } from "gatsby";
import Seo from "../components/Seo";
import { Link } from "gatsby";
import { getBgCol } from "../utils/colors";
import ColorToggleCmp from "../components/colorToggleCmp";
import CardCmp from "../components/cardCmp";

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
					media {
						file {
						  url
						}
					}
				}
			}
		}
	}
`;

const IndexPage = (props) => {
	console.log(props)
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
					 <CardCmp element={element} />
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
