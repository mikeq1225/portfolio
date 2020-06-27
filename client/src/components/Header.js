import React from "react"
import { NavLink, Link } from "react-router-dom"
import "../styles/Header.scss"

export default (props) => {
	return (
		<div>
			<header id="headerHome">
				<div className="container">
					<nav>
						<img
							id="logo"
							src="/assets/MichaelQuarneLogo.png"
							alt="Michael Quarne logo"
						/>
						<ul>
							<li>
								<NavLink to="/" activeClassName="selected">
									Home
								</NavLink>
							</li>
							<li>
								<NavLink to="/About" activeClassName="selected">
									About Me
								</NavLink>
							</li>
							<li>
								<NavLink to="/Projects" activeClassName="selected">
									Projects
								</NavLink>
							</li>
							<li>
								<NavLink to="/Resume" activeClassName="selected">
									Resume
								</NavLink>
							</li>
						</ul>
					</nav>
					<div className="headerContent">
						<h1>
							I am Michael the{" "}
							<span
								className="txtType"
								data-wait="3000"
								data-words='["UI/UX Enthusiast", "Application Developer"]'
							></span>
						</h1>
						<p className="lead">
							I specialize in web applications with a focus on UX/UI Design
						</p>
						<Link to="/Projects" className="btnLight">
							View My Work
						</Link>
					</div>
				</div>
			</header>
		</div>
	)
}
