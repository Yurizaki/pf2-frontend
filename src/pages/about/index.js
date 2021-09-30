import * as React from "react";
import PageCmp from "../../components/pageCmp";
import Seo from "../../components/Seo";
import { getBgCol } from "../../utils/colors";
import ColorToggleCmp from "../../components/colorToggleCmp";

const sideChil = <>About side here</>;
export default function AboutPage() {
	const col = getBgCol();
	return (
		<div className={col}>
			<Seo title="About Me" />
			<PageCmp hasSidebar={true} pageTitle="About" sideChil={sideChil}>
				<ColorToggleCmp url="/about"></ColorToggleCmp>
				ABOUT PAGE
			</PageCmp>
		</div>
	);
}
