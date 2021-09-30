import * as React from "react";
import PageCmp from "../../components/pageCmp";
import Seo from "../../components/Seo";
import { getBgCol, toggleScheme, getSchemeName } from "../../utils/colors";

const sideChil = <>About side here</>;
export default function AboutPage() {
	const col = getBgCol();
	return (
		<div className={col}>
			<Seo title="About Me" />
			<PageCmp hasSidebar={true} pageTitle="About" sideChil={sideChil}>
				ABOUT PAGE
			</PageCmp>
		</div>
	);
}
