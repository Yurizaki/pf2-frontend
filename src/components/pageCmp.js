import * as React from "react";
import BurgerBar from "./burgerbarCmp";
import FooterCmp from "./footerCmp";
import SidebarCmp from "./sidebarCmp";

const PageCmp = ({ hasSidebar, pageTitle, sideChil, col, children }) => {
	return (
		<div className="container is-fluid pl-0 pr-0">
			<BurgerBar></BurgerBar>
			<div className="columns mr-0">
				{hasSidebar === true && (
					<SidebarCmp pageTitle={pageTitle}>{sideChil}</SidebarCmp>
				)}
				<div className={"column pl-0 pr-0 "}>
					<div className="columns mr-0">
						<div className="column is-full-desktop is-11-widescreen pr-0">
							<div className="section pr-3">{children}</div>
						</div>
					</div>
				</div>
			</div>
			<div className="columns mr-0">
				<div className="column p-0">
					<FooterCmp></FooterCmp>
				</div>
			</div>
		</div>
	);
};

export default PageCmp;
