import * as React from "react";
import PageCmp from "../../components/pageCmp";
import SEO from "../../components/Seo";

const sideChil = <>About side here</>;
export default function AboutPage() {
	return (
		<div>
			<SEO title="About Me" />
			<PageCmp hasSidebar={true} pageTitle="About" sideChil={sideChil}>
				ABOUT PAGE
			</PageCmp>
		</div>
	);
}
