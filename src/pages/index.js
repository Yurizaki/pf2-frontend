import * as React from "react";
import PageCmp from "../components/pageCmp";
import "./index.scss"
import fetch from "node-fetch";
const sideChil = (<>side bar child her</>)

export default function index() {
    let url = "";

    if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
        console.log("DEV")
        url = "/api/cms"
    } else {
        url = "https://alexholmes.me/api/cms"
    }

    	fetch(url)
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