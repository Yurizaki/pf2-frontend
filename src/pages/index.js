import * as React from "react";
import PageCmp from "../components/pageCmp";

const sideChil = (<>side bar child her</>)




export default function index() {
    return (
        <PageCmp hasSidebar={true} pageTitle="Alex" sideChil={sideChil}>
            World
        </PageCmp>
    )
}