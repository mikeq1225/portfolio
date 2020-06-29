import React from "react"
import "../../styles/homePage/Process.scss"
import {
	FaFileAlt,
	FaObjectUngroup,
	FaDesktop,
	FaThumbsUp,
} from "react-icons/fa"

export default (props) => {
	return (
		<div id="process">
			<section className="textCenter padY2 container">
				<h2 className="sectionTitle">My Creative Process</h2>
				<div className="bottomLine"></div>
				<p className="lead">
					I start with figuring out what the customer wants their applications
					to do and how they want it to look
				</p>
				<div className="processBox">
					<div>
						<FaFileAlt />
						<div className="step">1</div>
						<h3>Discuss the project</h3>
						<p>Talk with customer to find out their needs and desires</p>
					</div>
					<div>
						<FaDesktop />
						<div className="step">2</div>
						<h3>Design the Wireframes</h3>
						<p>
							Create wireframes to the customer can see what the project could
							look like in the end
						</p>
					</div>
					<div>
						<FaObjectUngroup />
						<div className="step">3</div>
						<h3>Code the project</h3>
						<p>
							Write the code for the project and stay in communication with
							customer along the way
						</p>
					</div>
					<div>
						<FaThumbsUp />
						<div className="step">4</div>
						<h3>Make responsive</h3>
						<p>
							Make sure the site or application is responsive on all screens it
							will be used on
						</p>
					</div>
				</div>
			</section>
		</div>
	)
}
