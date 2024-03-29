import React from "react"
import "../../styles/about/AboutMeProgress.scss"

export default (props) => {
	return (
		<div id="aboutProgress">
			<section className=" py3">
				<div className="container">
					<h2 className="sectionTitle">Technical Skills</h2>
					<div className="bottomLine"></div>
					<h4>HTML &amp; CSS / Sass</h4>
					<div className="progress">
						<div style={{ width: "95%" }}></div>
					</div>
					<h4>JavaScript</h4>
					<div className="progress">
						<div style={{ width: "87%" }}></div>
					</div>
					<h4>React &amp; Redux</h4>
					<div className="progress">
						<div style={{ width: "83%" }}></div>
					</div>
					<h4>Express</h4>
					<div className="progress">
						<div style={{ width: "65%" }}></div>
					</div>
					<h4>MySQL</h4>
					<div className="progress">
						<div style={{ width: "70%" }}></div>
					</div>
					<h4>Node.js</h4>
					<div className="progress">
						<div style={{ width: "60%" }}></div>
					</div>
				</div>
			</section>
		</div>
	)
}
