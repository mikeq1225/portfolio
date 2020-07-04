import React, { useEffect } from "react"
import { useProjects } from "../../hooks"
import "../../styles/work/WorkProjects.scss"

export default (props) => {
	const { projects, fetchProjects } = useProjects()

	useEffect(() => {
		fetchProjects()
	}, [])

	return (
		<div id="workProjects" className="padY3">
			<div className="container">
				<h2 className="sectionTitle">More Work</h2>
				<div className="bottomLine"></div>
				<p className="textCenter">Check out some of my other projects</p>
				<p className="lead textCenter">
					Click project to go to application or website
				</p>
				<div className="projects">
					{projects.map((project, i) => (
						<a
							key={"project" + project.id + i}
							href={project.link}
							target="_blank"
							rel="noopener noreferrer"
						>
							<div className="project">
								<div className="projectImage">
									<img src={project.image} alt={project.title + " replica"} />
								</div>
								<div className="projectText">
									<div className="projectTextWrap">
										<p className="textCategory">{project.category}</p>
										<h2 className="textTitle">{project.title}</h2>
										<p>{project.brief}</p>
									</div>
								</div>
							</div>
						</a>
					))}
				</div>
			</div>
		</div>
	)
}
