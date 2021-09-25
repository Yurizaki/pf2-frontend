import * as React from "react";
import PageCmp from "../../components/pageCmp";

const sideChil = (<>BLOG side here</>)
export default function BlogPage ()  {
	return (
		<PageCmp hasSidebar={true} pageTitle="About" sideChil={sideChil}>
            BLOGH PAGE
        </PageCmp>
	);
};
