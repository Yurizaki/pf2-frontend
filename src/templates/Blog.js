import React from "react";
import { graphql, Link } from "gatsby";
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
					createdAt
					title
					slug
					updatedAt
					metadata {
						tags {
							name
						}
					}
					vocabulary {
						data {
							chinese
							pinyin
						}
					}
					grammar {
						data {
							desc
							rule
						}
					}
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
	let title = props.data.allContentfulBlog.edges[0].node.title;
	let slug = props.data.allContentfulBlog.edges[0].node.slug;
	let tag = props.data.allContentfulBlog.edges[0].node.metadata.tags[0].name;
	let updatedAt = new Date(
		props.data.allContentfulBlog.edges[0].node.updatedAt
	);
	let createdAt = new Date(
		props.data.allContentfulBlog.edges[0].node.createdAt
	);
	let vocabulary = props.data.allContentfulBlog.edges[0].node.vocabulary.data;
	let grammar = props.data.allContentfulBlog.edges[0].node.grammar.data;

	updatedAt =
		updatedAt.getDate() +
		"-" +
		updatedAt.getMonth() +
		"-" +
		updatedAt.getFullYear();

	createdAt =
		createdAt.getDate() +
		"-" +
		createdAt.getMonth() +
		"-" +
		createdAt.getFullYear();

	console.log(vocabulary);
	const col = getBgCol();
	return (
		<div className={col}>
			<Seo title={title} />
			<PageCmp hasSidebar={true} pageTitle="Alex">
				<ColorToggleCmp url={"/blogs/" + slug}></ColorToggleCmp>
				<div className="columns">
					<div className="column">
						<p className="title is-size-1 pb-1 mb-1">{title}</p>
						<span className="tag date-tag mr-2">Created: {createdAt}</span>
						<span className="tag date-tag mr-2">Updated: {updatedAt}</span>
						<span className="tag tag-tag">Tag: {tag}</span>
					</div>
				</div>

				<hr />

				<div className="columns">
					<div className="column content">
						<p className="is-size-4">
							New Vocabulary used in this article
						</p>

						<div class="columns is-flex-mobile is-flex-wrap-wrap ">
							{vocabulary.map((vocab) => (
								<div class="column is-one-fifth-tablet is-two-fifths-mobile box m-2 cards">
									<p class="title is-size-5 mb-5">
										{vocab.chinese}
									</p>
									<p class="subtitle is-size-6">
										{vocab.pinyin}
									</p>
								</div>
							))}
						</div>
					</div>
				</div>

				<hr />

				<div className="columns">
					<div className="column content">
						<p className="is-size-4">New Grammar rules</p>
						<div class="columns">
							<div className="column">
								{grammar.map((grammar) => (
									<div class="columns">
										<div class="column is-11 box m-4 cards">
											<p class="title is-size-5 mb-5">
												{grammar.rule}
											</p>
											<p class="subtitle is-size-6 ">
												{grammar.desc}
											</p>
										</div>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>

				<hr />

				<div className="columns">
					<div className="column content">
						<p className="is-size-4">Grammar Explained</p>
						{documentToReactComponents(JSON.parse(renderedHtml))}
					</div>
				</div>


				<hr />

				<div className="section p-0 pt-3 has-text-right">
					<Link to="../">
						<button className="button">Back to Blogs</button>
					</Link>
				</div>
			</PageCmp>
		</div>
	);
};
export default Blog;
