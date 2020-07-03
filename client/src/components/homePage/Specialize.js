import React from "react"
// import { NavLink, Link } from "react-router-dom"
import "../../styles/homePage/Specialize.scss"
import {
	FaFileAlt,
	FaDesktop,
	FaObjectUngroup,
	FaMobileAlt,
} from "react-icons/fa"
import { IconContext } from "react-icons/lib"

export default (props) => {
	return (
		<div id="specialize">
			<section className="textCenter padY2">
				<div className="container">
					<h2 className="sectionTitle">I Specialize In</h2>
					<div className="bottomLine"></div>
					<p className="lead">
						Allowing the customer's needs to dictate design while keeping
						responsive design at the forefront
					</p>
					<div className="specials">
						<IconContext.Provider value={{ size: "4rem" }}>
							<div>
								<FaFileAlt />
								<h3>Conceptualize</h3>
								<p>Describe how I do the thing above.</p>
							</div>
							<div>
								<FaDesktop />
								<h3>Design</h3>
								<p>Describe how I do the thing above.</p>
							</div>
							<div>
								<FaObjectUngroup />
								<h3>Develop</h3>
								<p>Describe how I do the thing above.</p>
							</div>
							<div>
								<FaMobileAlt />
								<h3>Responsive</h3>
								<p>Describe how I do the thing above.</p>
							</div>
						</IconContext.Provider>
					</div>
				</div>
			</section>
		</div>
	)
}
