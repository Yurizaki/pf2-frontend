import React from "react";
import { graphql } from "gatsby";

import PageCmp from "../components/pageCmp";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

export const query = graphql`
	query ($slug: String!) {
		allContentfulBlog(filter: { slug: { eq: $slug } }) {
			edges {
				node {
					title
					paragraph1 {
						raw
					}
				}
			}
		}
	}
`;

const Blog = (props) => {
	let renderedHtml =
		props.data.allContentfulBlog.edges[0].node.paragraph1.raw;

	return (
		<PageCmp hasSidebar={true} pageTitle="Alex">
			<div className="content">
				{documentToReactComponents(JSON.parse(renderedHtml))}
			</div>
		</PageCmp>
	);
};
export default Blog;
