import React    from "react";
import { Link } from "react-router-dom";

import {
	Sun,
} from "react-feather";

import "./Nav.scss";

function Nav() {
	return (
		<nav id="Nav">
			<div className="container-nav">

				<div className="logo">
					<Link to="/">Clima</Link>
				</div>

				<div className="my-account">
					<div>
						<Sun size={16} color="#7A7A7A" />
					</div>
				</div>

			</div>
		</nav>
	);
}

export default Nav;
