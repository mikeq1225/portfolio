import React from "react"
import { NavLink, Link } from "react-router-dom"
import "../styles/NavBar.scss"

export default (props) => {
	return (
		<div id="navBar">
			<div className="container">
				<nav>
					<Link to="/Home">
						<img
							id="logo"
							src="/assets/MichaelQuarneLogoBlack.svg"
							alt="Michael Quarne logo"
							className="filterColor1"
						/>
					</Link>
					<ul>
						<li>
							<NavLink to="/Home" activeClassName="selected">
								Home
							</NavLink>
						</li>
						<li>
							<NavLink to="/About" activeClassName="selected">
								About Me
							</NavLink>
						</li>
						<li>
							<NavLink to="/Work" activeClassName="selected">
								My Work
							</NavLink>
						</li>
						<li>
							<NavLink to="/Resume" activeClassName="selected">
								Resume
							</NavLink>
						</li>
					</ul>
				</nav>
			</div>
		</div>
	)
}
