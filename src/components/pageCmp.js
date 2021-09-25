import * as React from "react";
import BurgerBar from "./burgerbarCmp";
import FooterCmp from "./footerCmp";
import SidebarCmp from "./sidebarCmp";

const PageCmp = ({ hasSidebar, pageTitle, sideChil, children }) => {
	return (
		<div className="container is-fluid pl-0 pr-0">
			<div className="rows">
				<div className="row is-hidden-tablet">
					<BurgerBar></BurgerBar>
				</div>
				<div className="row ">
					<div className="columns">
						{hasSidebar === true && (
							<div
								className="column
									is-2-widescreen
									is-3-desktop
									is-4-tablet
									is-hidden-mobile
									pb-0
									pl-0
									pr-0
									has-background-info"
							>
								<SidebarCmp pageTitle={pageTitle}>
									{sideChil}
								</SidebarCmp>
							</div>
						)}

						<div className="column has-background-link pl-0 pr-0">
							<div className="section">Hello {children}</div>
						</div>
					</div>
				</div>
				<div className="row ">
					<FooterCmp></FooterCmp>
				</div>
			</div>
		</div>
	);
};

export default PageCmp;
