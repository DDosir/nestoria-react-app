import React from "react";
import {Link} from "react-router-dom";

export const Header = () => {
	return (
		<header className={"header"}>
			<Link className={"header__link"} to={"/"}><h1 className={"header__link__text"}>Rick and Morty App</h1></Link>
			<nav>
				<ul className={"NavBar"}>
					<li><Link className={"NavBar__Link"} to={'/character'}>Characters</Link></li>
					<li><Link className={"NavBar__Link"} to={'/location'}>Locations</Link></li>
					<li><Link className={"NavBar__Link"} to={'/episode'}>Episodes</Link></li>
				</ul>
			</nav>
		</header>
	)
}
