import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { Link } from "gatsby";
import PageCmp from "../../components/pageCmp";
import Seo from "../../components/Seo";
import { getBgCol } from "../../utils/colors";
import ColorToggleCmp from "../../components/colorToggleCmp";
import CardCmp from "../../components/cardCmp";
import SearchCmp from "../../components/searchCmp";

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
					media {
						file {
							url
						}
					}
				}
			}
		}
		allContentfulTag {
			nodes {
				name
				id
				contentful_id
			}
		}
	}
`;

export default class BlogPage extends React.Component {

	constructor(props) {
		super(props)

		this.state = {
			tag : ""
		};


		this.onChange = this.onChange.bind(this)
	}

	onChange(v) {
		this.setState({
			tag: v
		})
	}

	render() {
		let data = this.props.data

		let slugs = [];
		if (data.allContentfulBlog) {
			data.allContentfulBlog.edges.forEach((edge) => {
				slugs.push(edge.node.slug);
			});
		}

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

		let tagData = [];

		if (data) {
			if (data) {
				tagData = data.allContentfulTag.nodes;
			}
		}

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

					<SearchCmp
						tagData={tagData}
						onChange={(v) => this.onChange(v)}
					/>

					<p className="subtitle is-4">
						{this.state.tag === ""
							? <>Showing all content.</>
							: <>Showing content for tag: {this.state.tag}</>}

					</p>

					{topExcerpts.map((element) => (
							this.state.tag === ""
								? <CardCmp element={element} />
								: this.state.tag === element.node.metadata.tags[0].name
									? <CardCmp element={element} />
									: <></>
							))}
				</PageCmp>
			</div>
		);
	}
}
