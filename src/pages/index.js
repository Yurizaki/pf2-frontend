import * as React from "react";
import PageCmp from "../components/pageCmp";
import "./index.scss"
import fetch from "node-fetch";
const sideChil = (<>side bar child her</>)

export default function index() {

    	fetch(document.location.href+"/api/cms")
		.then((res) => res.json())
		.then((result) => {
			console.log(result)
		});




    return (
        <PageCmp hasSidebar={true} pageTitle="Alex" sideChil={sideChil}>
            World
        </PageCmp>
    )
}