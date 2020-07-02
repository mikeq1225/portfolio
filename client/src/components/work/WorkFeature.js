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
				<p className="lead textCenter">
					Feel free to check out {`Jurn(ease)`}. Register a made up account and
					look around inside the site
				</p>
				<img src={feature.image} alt={feature.title + " replica"} />
				<div>
					<h1>{feature.title}</h1>
					<p>Description:</p>
					<h2>{feature.description}</h2>
					<p>Issues Faced:</p>
					<h2>{feature.problem}</h2>
					<p>Lessons Learned:</p>
					<h2>{feature.lessons}</h2>
					<p>Languages/Technologies Used:</p>
					<h2>{feature.tech}</h2>
					<div>
						<a
							className="buttonMain"
							href={feature.link}
							target="_blank"
							rel="noopener noreferrer"
						>
							<h2>{feature.title} Live Application</h2>
						</a>
						<a
							className="buttonMain"
							href={feature.link2}
							target="_blank"
							rel="noopener noreferrer"
						>
							<h2>{feature.title} Presentation</h2>
						</a>
						<a
							className="buttonMain"
							href={feature.link3}
							target="_blank"
							rel="noopener noreferrer"
						>
							<h2>{feature.title} Demonstration</h2>
						</a>
					</div>
				</div>
			</div>
		</div>
	)
}
