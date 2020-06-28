import React from "react"
// import { NavLink, Link } from "react-router-dom"
import "../styles/About.scss"
import {
	FaFileAlt,
	FaDesktop,
	FaObjectUngroup,
	FaMobileAlt,
	FaUsers,
	FaAward,
	FaHourglassStart,
	FaCodeBranch,
} from "react-icons/fa"
import { IconContext } from "react-icons/lib"

export default (props) => {
	return (
		<div id="specialize">
			<section className="textCenter padY2">
				<div className="container">
					<h2>I Specialize In</h2>
					<div className="bottomLine"></div>
					<p className="lead">
						Making the customer's needs dictate design and making responsive
						websites
					</p>
					<div className="specials">
						<IconContext.Provider value={{ size: "3rem" }}>
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
			<section className="stats textCenter padY2">
				<IconContext.Provider value={{ size: "3rem" }}>
					<div>
						<ul>
							<li>
								<FaUsers />
							</li>
							<li className="title">Clients</li>
							<li className="number">100</li>
						</ul>
					</div>
					<div>
						<ul>
							<li>
								<FaAward />
							</li>
							<li className="title">Awards</li>
							<li className="number">4</li>
						</ul>
					</div>
					<div>
						<ul>
							<li>
								<FaHourglassStart />
							</li>
							<li className="title">Hours Worked</li>
							<li className="number">2300</li>
						</ul>
					</div>
					<div>
						<ul>
							<li>
								<FaCodeBranch />
							</li>
							<li className="title">Projects Completed</li>
							<li className="number">15</li>
						</ul>
					</div>
				</IconContext.Provider>
			</section>
		</div>
	)
}
