import React, { useEffect } from "react"
import { useProjects } from "../../hooks"
import "../../styles/resume/ResumeBody.scss"
import { FaChevronRight } from "react-icons/fa"

export default (props) => {
	const { feature, projects, openSource, fetchProjects } = useProjects()
	// const mustang = projects.find(
	// 	(project) => project.title === "Mustang Photo Album"
	// )
	const vethead = projects.find((project) => project.title === "Vethead Brand")
	const jurnease = projects.find((project) => project.title === "Jurn(ease)")

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
								Creative, technical, design-savvy React developer experienced in
								implementing highly responsive user interface components through
								JavaScript and React concepts. Proficient in translating designs
								and wireframes into high quality code. Passionate about learning
								new languages and technologies, turning ideas into reality, and
								working with dedicated teams to efficiently build applications
								based on customer needs.
							</p>
						</li>
						<li id="skills">
							<div className="title" onClick={(e) => display(e)}>
								<FaChevronRight />
								<h2>Skills</h2>
							</div>
							<ul className="panel hide">
								<li>JavaScript</li>
								<li>Algolia</li>
								<li>GitHub / BitBucket</li>
								<li>Node.js</li>
								<li>React</li>
								<li>Material UI</li>
								<li>Heroku / Netlify</li>
								<li>Express</li>
								<li>Redux</li>
								<li>Figma</li>
								<li>Shopify Storefront API</li>
								<li>REST API</li>
								<li>HTML</li>
								<li>Sass</li>
								<li>Agile &amp; Scrum Processes</li>
								<li>MySQL</li>
								<li>CSS</li>
								<li>Jira</li>
								<li>Git</li>
								<li>NginX</li>
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
											<h2>TruLocal</h2>
											<p>San Francisco, CA</p>
										</div>
										<div>
											<h4>React.js Developer</h4>
											<p>Sept. 2020 - Current</p>
										</div>
										<p>
											Turned Figma designs into high quality, easily maintained
											reusable React components using ES6 conventions that make
											up the Search route.
										</p>
										<p>
											Communicated with QA via Slack and Jira tickets to quickly
											fix bugs.
										</p>
										<p>
											Worked with the Director of Development, the VP of
											Product, the CTO, and the UX/UI Designer to develop and
											implement new ideas for the application.
										</p>
										<p>
											Became the subject matter expert (SME) for the
											implementation of Algolia's Instant Search and conducted
											educational sessions for the team.
										</p>
										<p>
											Exceptional problem solving, debugging, and decision
											making capabilities.
										</p>
										<p>
											Review the quality of code for mission-critical code and
											design consistency across different team members.
										</p>
									</div>
								</li>
								{/* <li>
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
								</li> */}
								{/* <li>
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
								</li> */}
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
						<li id="projects">
							<div className="title" onClick={(e) => display(e)}>
								<FaChevronRight />
								<h2>Projects</h2>
							</div>
							<ul className="panel hide">
								<li>
									<a
										href={feature && feature.link}
										target="_blank"
										rel="noopener noreferrer"
									>
										<h2>TruLocal</h2>
									</a>
									<p>
										TruLocal is an e-commerce marketplace that provides an
										efficient bridge between consumers and their local retailers
										across all product categories. I was responsible for writing
										reusable and easily maintained React components for the
										product search page. Assisted with writing the JavaScript
										code to capture a user's geolocation or IP address location
										when entering the application based on their preferences.
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
										A custom e-commerce website built with React and JavaScript,
										and is styled using Sass. It integrates Shopify's Storefront
										API into the custom website to handle authentication to
										client's Shopify store and is hosted on Netlify.
									</p>
								</li>
								<li>
									<a
										href={openSource && openSource.link}
										target="_blank"
										rel="noopener noreferrer"
									>
										<h2>Shopify StoreFront API Examples</h2>
									</a>
									<h4>Open-Source Contribution</h4>
									<p>
										Created{" "}
										<a
											href={openSource && openSource.link2}
											target="_blank"
											rel="noopener noreferrer"
										>
											reactHooks-redux-js-buy
										</a>{" "}
										folder to add to Shopify Storefront API's open-source
										examples of how to build custom e-commerce websites.
										Refactored legacy React class based components into
										functional components and added Redux for predictable state
										management that is accessible everywhere in the app.
									</p>
								</li>
								<li>
									<a
										href={jurnease && jurnease.link}
										target="_blank"
										rel="noopener noreferrer"
									>
										<h2>Jurn(ease) vacation planning app</h2>
									</a>
									<p>
										Worked with a team remotely to plan, design, and build a
										vacation planning web application using GitHub for version
										control. Utilized JavaScript, React, Redux, HTML, Sass CSS
										to build the front end. Used Express and JSON web tokens to
										authenticate to a AWS-RDS MySQL database for the back end.
									</p>
								</li>
								{/* <li>
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
								</li> */}
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
											<li>
												Quickly built prototypes for websites and apps following
												the newest JavaScript ES6 conventions
											</li>
											<li>
												Built production-quality web applications using React,
												JavaScript, HTML, and CSS
											</li>
											<li>
												Learned in-depth JavaScript functions, objects, and
												frameworks
											</li>
											<li>
												Created responsive design for web and mobile using CSS
												and Sass breakpoints
											</li>
											<li>
												Learned how to think like a developer using the DRY and
												KISS design methods
											</li>
										</ul>
									</div>
								</li>
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
					</ul>
				</section>
			</div>
		</div>
	)
}
