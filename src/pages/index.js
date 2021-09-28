import * as React from "react";
import PageCmp from "../components/pageCmp";
import "./index.scss";
import { useStaticQuery, graphql } from "gatsby";
import SEO from "../components/Seo";

const sideChil = <>side bar child her</>;

const IndexPage = () => {
	return (
		<div>
			<SEO title="Home" />
			<PageCmp hasSidebar={true} pageTitle="Alex" sideChil={sideChil}>
				<div id="rich-text-body" className="content"></div>
			</PageCmp>
		</div>
	);
};

export default IndexPage;
