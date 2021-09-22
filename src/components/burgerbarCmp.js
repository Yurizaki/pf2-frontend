import * as React from "react";
import { Link } from "gatsby";

export default function BurgerBar ()  {
	return (
		<a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
        </a>
	);
};
