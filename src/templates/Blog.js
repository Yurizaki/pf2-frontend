import React from "react";
import { graphql } from "gatsby";
import "./../pages/index.scss";
import PageCmp from "../components/pageCmp";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Seo from "../components/Seo";
import { getBgCol } from "../utils/colors";
import ColorToggleCmp from "../components/colorToggleCmp";

export const query = graphql`
	query ($slug: String!) {
		allContentfulBlog(filter: { slug: { eq: $slug } }) {
			edges {
				node {
					title
					slug
					updatedAt
					createdAt
					paragraph1 {
						raw
					}
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

const Blog = (props) => {
	let renderedHtml =
		props.data.allContentfulBlog.edges[0].node.paragraph1.raw;
	let title = props.data.allContentfulBlog.edges[0].node.title;
	let tag = props.data.allContentfulBlog.edges[0].node.metadata.tags[0].name;
	let updatedAt = new Date(
		props.data.allContentfulBlog.edges[0].node.updatedAt
	);
	updatedAt =
		updatedAt.getDate() +
		"-" +
		updatedAt.getMonth() +
		"-" +
		updatedAt.getFullYear();

	let createdAt = new Date(
		props.data.allContentfulBlog.edges[0].node.createdAt
	);
	createdAt =
		createdAt.getDate() +
		"-" +
		createdAt.getMonth() +
		"-" +
		createdAt.getFullYear();

	let slug = props.data.allContentfulBlog.edges[0].node.slug;

	const col = getBgCol();
		return (
			<div className={col}>
			<Seo title={title} />
			<PageCmp hasSidebar={true} pageTitle="Alex">
				<ColorToggleCmp url={"/blogs/" + slug}></ColorToggleCmp>
				<divs className="columns">
					<divs className="column">
						<p className="title">{title}</p>
					</divs>
				</divs>
				<divs className="columns is-1">
					<divs className="column is-narrow">
						<span class="tag is-success">
							Created At: {createdAt}
						</span>
					</divs>
					<divs className="column is-narrow">
						<span class="tag is-info">Updated At: {updatedAt}</span>
					</divs>
					<divs className="column is-narrow">
						<span class="tag is-danger">Tags: {tag}</span>
					</divs>
				</divs>
				<divs className="columns">
					<div className="content">
						<divs className="column">
							{documentToReactComponents(
								JSON.parse(renderedHtml)
							)}
						</divs>
					</div>
				</divs>
			</PageCmp>
		</div>
	);
};
export default Blog;
