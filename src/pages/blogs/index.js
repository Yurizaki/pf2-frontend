import * as React from "react";
import { graphql } from "gatsby";
import { Link } from "gatsby";
import PageCmp from "../../components/pageCmp";
import Seo from "../../components/Seo";
import { getBgCol } from "../../utils/colors";
import ColorToggleCmp from "../../components/colorToggleCmp";

const sideChil = <>BLOG side here</>;
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

export default function BlogPage({ data }) {
	let slugs = [];
	if (data.allContentfulBlog) {
		data.allContentfulBlog.edges.forEach((edge) => {
			slugs.push(edge.node.slug);
		});
	}

	console.log(data)

	let topExcerpts = [];
	if (data) {
		if (data.allContentfulBlog) {
			topExcerpts = data.allContentfulBlog.edges;
		}
	}


	let createdAt = new Date(
		data.allContentfulBlog.edges[0].node.createdAt
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
			<Seo title="Blogs Home" />
			<PageCmp
				hasSidebar={true}
				pageTitle="About"
				col={getBgCol()}
				sideChil={sideChil}
			>
				<ColorToggleCmp url="/blogs"></ColorToggleCmp>

				{topExcerpts.map((element) => (
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
												Created: {createdAt}
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
				))}

				<div className="card-separator"></div>
			</PageCmp>
		</div>
	);
}

//ni yao zhu zai ying guo ma
