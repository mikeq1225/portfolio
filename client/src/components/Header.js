import React from "react"
import { Link } from "react-router-dom"
import "../styles/Header.scss"
import "../typewriter"

export default (props) => {
	return (
		<div id="showcase">
			<header>
				<div className="container">
					<div className="headerContent">
						<h1>
							I am Michael, The{" "}
							<span
								className="txtType"
								datawait="3000"
								datawords='["UI/UX Enthusiast", "Application Developer"]'
							></span>
						</h1>
						<p className="lead">
							I specialize in web applications with a focus on UX/UI Design
						</p>
						<Link to="/Projects" className="buttonDark">
							View My Work
						</Link>
					</div>
				</div>
			</header>
		</div>
	)
}
