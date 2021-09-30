import * as React from "react";
import { toggleScheme, getSchemeName } from "../utils/colors";
import { Link } from "gatsby";

const ColorToggleCmp = ({ url }) => {
    return (
        <div className="section p-0 pb-3 has-text-right">
            <Link to={url}><button className="button" onClick={toggleScheme}>Toggle Color Scheme: {getSchemeName()}</button></Link>
            <div className="card-separator mb-3 mt-3"></div>
        </div>
    );
}

export default ColorToggleCmp;
