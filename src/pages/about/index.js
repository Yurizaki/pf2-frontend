import * as React from "react";
import PageCmp from "../../components/pageCmp";
import Seo from "../../components/Seo";

const sideChil = <>About side here</>;
export default function AboutPage() {
	return (
		<div>
			<Seo title="About Me" />
			<PageCmp hasSidebar={true} pageTitle="About" sideChil={sideChil}>
				ABOUT PAGE
			</PageCmp>
		</div>
	);
}
