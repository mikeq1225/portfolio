import React, { useEffect } from "react"
import { useProjects } from "../../hooks"
// import { FaShopify } from "react-icons/fa"
import "../../styles/work/WorkProjects.scss"

export default (props) => {
	const { projects, openSource, fetchProjects } = useProjects()

	useEffect(() => {
		fetchProjects()
	}, [])

	return (
		<div id="workProjects">
			<div className="container">
				<h2 className="sectionTitle">More Work</h2>
				<div className="bottomLine"></div>
				<div className="openSource">
					<h3 className="openTitle">Open Source Contribution</h3>
					<img src={openSource.image} alt="Shopify Logo" />
					<div>
						<p>{openSource.problem}</p>
						<h4>My Solution</h4>
						<p>{openSource.solution}</p>
						<h4>Why I contributed</h4>
						<p>{openSource.lessons}</p>
						<a
							href={openSource.link2}
							rel="noopener noreferrer"
							target="_blank"
						>
							Github Repo
						</a>
					</div>
				</div>
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
										<p className="textTitle">{project.title}</p>
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
