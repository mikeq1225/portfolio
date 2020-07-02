import React from "react"
import { NavLink } from "react-router-dom"
import "../styles/NavBar.scss"

export default (props) => {
	return (
		<div id="navBar">
			<div className="container">
				<nav>
					<img
						id="logo"
						src="/assets/MichaelQuarneLogo.png"
						alt="Michael Quarne logo"
					/>
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
								Work
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
