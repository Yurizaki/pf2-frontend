import * as React from "react";
import PageCmp from "../components/pageCmp";

const sideChil = (<div>side bar child her</div>)


export default function index() {
    return (
        <PageCmp hasSidebar={true} pageTitle="Alex" sideChil={sideChil}>
            HELLOW
        </PageCmp>
    )
}