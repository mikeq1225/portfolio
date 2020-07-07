import React, { useEffect } from "react"
import { useProjects } from "../../hooks"
import "../../styles/work/WorkFeature.scss"

export default (props) => {
	const { feature, fetchProjects } = useProjects()

	useEffect(() => {
		fetchProjects()
	}, [])

	return (
		<div id="workFeature">
			<div className="container">
				<h2 className="sectionTitle">Featured Project</h2>
				<div className="bottomLine"></div>
				<p className="textCenter">
					Click "Live Application" to check out the application. Register a made
					up account and look around inside the application.
				</p>
				<h1 className="textCenter">{feature.title}</h1>
				<div>
					<a
						className="buttonFeatured"
						href={feature.link}
						target="_blank"
						rel="noopener noreferrer"
					>
						{feature.title} Live Application
					</a>
					<a
						className="buttonFeatured"
						href={feature.link2}
						target="_blank"
						rel="noopener noreferrer"
					>
						{feature.title} Presentation
					</a>
					<a
						className="buttonFeatured"
						href={feature.link3}
						target="_blank"
						rel="noopener noreferrer"
					>
						{feature.title} Demonstration
					</a>
				</div>

				<div className="featureContainer">
					<img src={feature.image} alt={feature.title + " replica"} />
					<div>
						{/* <h2>Description:</h2> */}
						<p>{feature.description}</p>
						<h2>Where did the idea come from?</h2>
						<p>{feature.problem}</p>
						<h2>What did I learn from this?</h2>
						<p>{feature.lessons}</p>
						<h2>Languages/Technologies Used:</h2>
						<p>{feature.tech}</p>
					</div>
				</div>
			</div>
		</div>
	)
}
