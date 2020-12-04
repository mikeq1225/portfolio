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
				{/* <h1 className="textCenter">{feature.title}</h1> */}
				<a href={feature.link} target="_blank" rel="noopener noreferrer">
					<img src={feature.image} alt={feature.title + " replica"} />
				</a>
				<h1 className="textCenter">My work at TruLocal</h1>
				{/* <p className="textCenter">
					Click "Jurn(ease) Live" to check out the application. Register a made
					up account to look around inside.
				</p> */}
				<div className="featureContainer">
					{/* <div className="fButtons"> */}
					{/* <a href={feature.link} target="_blank" rel="noopener noreferrer">
							{feature.title} Live
						</a> */}
					{/* <a href={feature.link2} target="_blank" rel="noopener noreferrer">
							{feature.title} Presentation
						</a>
						<a href={feature.link3} target="_blank" rel="noopener noreferrer">
							{feature.title} Demonstration
						</a> */}
					{/* </div> */}
					{/* <img src={feature.image} alt={feature.title + " replica"} /> */}
					<div>
						<p>{feature.description}</p>
						<h2>What challenges did I face?</h2>
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
