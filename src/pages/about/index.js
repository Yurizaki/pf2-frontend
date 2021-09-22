import * as React from "react";
import PageCmp from "../../components/pageCmp";

const sideChil = (<>About side here</>)
export default function AboutPage ()  {
	return (
		<PageCmp hasSidebar={true} pageTitle="About" sideChil={sideChil}>
            ABOUT PAGE
        </PageCmp>
	);
};
