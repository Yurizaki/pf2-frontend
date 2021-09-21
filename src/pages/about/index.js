import * as React from "react";
import SidebarCmp from "../../components/sidebarCmp";

import "./about.scss"

export default function AboutPage ()  {
	return (
		<main className="container">
			<title>About</title>
			<div className="columns">
				<div className="column">
					<SidebarCmp pageTitle="ALEX" secProp="BLAH">
						<p>HELOW</p>
					</SidebarCmp>
				</div>
				<div className="column">
					<h1>
						HELLOW WORLD
					</h1>
				</div>
			</div>
		</main>
	);
};
