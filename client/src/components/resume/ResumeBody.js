import React, { useEffect } from "react"
import { useProjects } from "../../hooks"
import "../../styles/resume/ResumeBody.scss"
import { FaChevronRight } from "react-icons/fa"

export default (props) => {
	const { feature, projects, openSource, fetchProjects } = useProjects()
	const mustang = projects.find(
		(project) => project.title === "Mustang Photo Album"
	)
	const vethead = projects.find((project) => project.title === "Vethead Brand")
	// const superman = projects.find(
	// 	(project) => project.title === "Superman Memory Game"
	// )

	document.addEventListener("DOMContentLoaded", start)

	function start() {
		setTimeout(() => {
			let panels = document.getElementsByClassName("panel")
			panels = Array.from(panels)
			panels.forEach(function (panel, index) {
				setTimeout(function () {
					let arrow = panel.previousSibling.firstChild
					arrow.classList.add("rotate")
					panel.classList.add("show")
					panel.classList.remove("hide")
				}, index * 150)
			})
		})
	}

	function display(e) {
		e.preventDefault()
		const para = e.target.closest("div").nextElementSibling
		let arrow = e.target.nodeName
		if (arrow === "DIV") {
			arrow = e.target.firstChild
		} else if (arrow === "H2") {
			arrow = e.target.previousSibling
		} else if (arrow === "svg") {
			arrow = e.target
		} else if (arrow === "path") {
			arrow = e.target.parentNode
		}

		if (para.classList.contains("hide")) {
			arrow.classList.toggle("rotate")
			para.classList.remove("hide")
			para.classList.add("show")
		} else if (para.classList.contains("show")) {
			arrow.classList.toggle("rotate")
			para.classList.remove("show")
			para.classList.add("hide")
		}
	}

	useEffect(() => {
		start()
		fetchProjects()
	}, [])

	return (
		<div id="resumeBody">
			<div className="container">
				<a
					href="https://resume.creddle.io/resume/1lftdzw84g6"
					target="_blank"
					rel="noopener noreferrer"
				>
					Printable resume
				</a>
				<section className="resBody">
					<ul id="accordion">
						<li id="summary">
							<div className="title" onClick={(e) => display(e)}>
								<FaChevronRight />
								<h2>Summary</h2>
							</div>
							<p className="panel hide">
								Creative, technical, design-savvy developer fluent in
								JavaScript, React, HTML, and CSS. Excited to blend professional
								experience with hands-on technical training in a junior-level
								software engineering role.
							</p>
						</li>
						<li id="skills">
							<div className="title" onClick={(e) => display(e)}>
								<FaChevronRight />
								<h2>Key Skills</h2>
							</div>
							<ul className="panel hide">
								<li>JavaScript</li>
								<li>React</li>
								<li>Redux</li>
								<li>HTML</li>
								<li>CSS</li>
								<li>Sass</li>
								<li>jQuery</li>
								<li>Semantic UI</li>
								<li>REST API</li>
								<li>Node.js</li>
								<li>Express</li>
								<li>MySQL</li>
								<li>JSON-Server</li>
								<li>AWS-RDS</li>
								<li>Shopify Storefront API</li>
								<li>Heroku / Netlify</li>
								<li>NginX</li>
								<li>Git</li>
								<li>Agile &amp; Scrum Processes</li>
								<li>GitHub Version Control</li>
								{/* <li>Visual Studio Code</li>
								<li>Mac iOS</li>
								<li>Windows 7/8/10</li>
								<li>Microsoft Office</li>
								<li>Office 365</li>
								<li>Google Drive</li> */}
								{/* <li>Zoom video conferencing</li> */}
								{/* <li>Slack messaging</li> */}
							</ul>
						</li>
						<li id="experience">
							<div className="title" onClick={(e) => display(e)}>
								<FaChevronRight />
								<h2>Experience</h2>
							</div>
							<ul className="panel hide">
								<li>
									<div>
										<div>
											<a
												href="https://punchcode.org/"
												target="_blank"
												rel="noopener noreferrer"
											>
												PunchCode
											</a>
											<p>Jan. 2020 - Apr. 2020</p>
										</div>
										<h3>Full-Stack Web Developer Bootcamp</h3>
										<ul>
											<li>
												A 720 hour, fully immersive, fast paced program working
												with a team of developers
											</li>
											<li>Quickly built prototypes for websites and apps</li>
											<li>Built production-quality web applications</li>
											<li>Developed functional, beautiful interfaces</li>
											<li>
												Learned in-depth JavaScript functions, objects, and
												frameworks
											</li>
											<li>Created responsive design for web and mobile</li>
											<li>Learned how to think and learn like a programmer</li>
										</ul>
									</div>
								</li>
							</ul>
						</li>
						<li id="projects">
							<div className="title" onClick={(e) => display(e)}>
								<FaChevronRight />
								<h2>Projects</h2>
							</div>
							<ul className="panel hide">
								<li>
									<a
										href={openSource.link}
										target="_blank"
										rel="noopener noreferrer"
									>
										<h2>Shopify StoreFront API Examples</h2>
									</a>
									<h4>Open Source Contribution</h4>
									<p>
										Created{" "}
										<a
											href={openSource.link2}
											target="_blank"
											rel="noopener noreferrer"
										>
											reactHooks-redux-js-buy
										</a>{" "}
										folder to add to Shopify Storefront API's open source
										examples of how to build custom e-commerce websites.
										Refactored legacy React class based components into
										functional components and added Redux for predictable state
										management that is accessible everywhere in the app.
									</p>
								</li>
								<li>
									<a
										href={feature.link}
										target="_blank"
										rel="noopener noreferrer"
									>
										<h2>Jurn(ease) vacation planning app</h2>
									</a>
									<p>
										Worked with a team remotely to plan, design, and build a
										vacation planning web application using GitHub for version
										control. Utilized JavaScript, React, Redux, HTML, Sass CSS
										to build the front-end. Used Express and JSON web tokens to
										authenticate to a AWS-RDS MySQL database for the back-end.
									</p>
								</li>
								<li>
									<a
										href={vethead && vethead.link}
										target="_blank"
										rel="noopener noreferrer"
									>
										<h2>vethead brand</h2>
									</a>
									<p>
										A custom e-commerce website built with React, and styled
										using Sass. It integrates Shopify's Storefront API into the
										custom website to handle authentication to client's Shopify
										store and is hosted on Netlify.
									</p>
								</li>
								<li>
									<a
										href={mustang && mustang.link}
										target="_blank"
										rel="noopener noreferrer"
									>
										<h2>mustang photo album</h2>
									</a>
									<p>
										Photo album using functional components in React to create a
										stand alone app that can also easily be reused in another
										React application where a photo album is needed. Used a
										JSON-server database to present images tied to specific
										Mustang Models in their own folders.
									</p>
								</li>
								{/* <li>
									<a
										href={superman && superman.link}
										target="_blank"
										rel="noopener noreferrer"
									>
										<h2>Superman memory game</h2>
									</a>
									<p>
										A Superman memory game using JavaScript and jQuery to try to
										prevent Lex Luthor from taking over the world.
									</p>
								</li> */}
							</ul>
						</li>
						<li id="education">
							<div className="title" onClick={(e) => display(e)}>
								<FaChevronRight />
								<h2>Education</h2>
							</div>
							<ul className="panel hide">
								<li>
									<div>
										<div>
											<a
												href="https://www.snhu.edu/"
												target="_blank"
												rel="noopener noreferrer"
											>
												Southern New Hampshire University
											</a>
											<p>Jan. 2018 - Aug. 2019</p>
										</div>
										<h3>Associate in Science in Information Technologies</h3>
										<p>
											Courses include: Intro to Scripting, Applied Statistics
											for STEM, and Project Management in Info Tech
										</p>
									</div>
								</li>
							</ul>
						</li>
						<li id="employment">
							<div className="title" onClick={(e) => display(e)}>
								<FaChevronRight />
								<h2>Employment</h2>
							</div>
							<ul className="panel hide">
								<li>
									<div>
										<div>
											<h2>Breakthru Beverage</h2>
											<p>North Las Vegas, NV</p>
										</div>
										<div>
											<h4>Merchandiser</h4>
											<p>Sept. 2017 - Jan. 2020</p>
										</div>
										<p>
											Organized record keeping using Google Drive making them
											user friendly, easy to search, and easily accessed by
											several people at once
										</p>
									</div>
								</li>
								<li>
									<div>
										<div>
											<h2>Guaranty bank</h2>
											<p>Sheboygan, WI</p>
										</div>
										<div>
											<h4>Assistant Branch Manager</h4>
											<p>Jan. 2017 - May. 2017</p>
										</div>
										<p>
											Boosted branch results by 9% by strengthening
											relationships with the client base and identifying sales
											and service solutions tailored to client needs.
										</p>
										<p>
											Increased transparency for executive management by
											identifying trends and creating reports to monitor
											deviations from targets for improved account and employee
											management.
										</p>
									</div>
								</li>
								<li>
									<div>
										<div>
											<h2>General Beverage</h2>
											<p>New Berlin, WI</p>
										</div>
										<div>
											<h4>Merchandising Department Manager</h4>
											<p>Jan. 2004 - Sept. 2016</p>
										</div>
										<p>
											Developed mentoring program to create a culture of upward
											mobility within the company.
										</p>
										<p>
											Steered daily operations and business development
											initiatives by successfully managing 12 fulltime
											merchandisers and 6 part-time merchandisers across 7
											counties.
										</p>
										<p>
											Facilitated a collaborative work environment where
											problems were managed immediately by having open lines of
											communication with entire team.
										</p>
									</div>
								</li>
							</ul>
						</li>
					</ul>
				</section>
			</div>
		</div>
	)
}
