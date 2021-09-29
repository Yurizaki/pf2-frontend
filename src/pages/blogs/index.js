import * as React from "react";
import { graphql } from "gatsby";
import { Link } from "gatsby";
import PageCmp from "../../components/pageCmp";
import SEO from "../../components/Seo";

const sideChil = <>BLOG side here</>;
export const query = graphql`
	query {
		allContentfulBlog {
			edges {
				node {
					slug
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

	return (
		<div>
			<SEO title="Blogs Home" />
			<PageCmp hasSidebar={true} pageTitle="About" sideChil={sideChil}>
				<nav>
					<ul>
						{slugs.map((slug) => (
							<>
								{
									<li>
										<Link to={slug}>{slug}</Link>
									</li>
								}
							</>
						))}
					</ul>
				</nav>
			</PageCmp>
		</div>
	);
}

//ni yao zhu zai ying guo ma