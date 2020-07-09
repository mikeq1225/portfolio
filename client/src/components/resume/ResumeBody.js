import React from "react"
import "../../styles/resume/ResumeBody.scss"
import { FaChevronRight } from "react-icons/fa"

export default (props) => {
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

	return (
		<div id="resumeBody">
			<div className="container">
				<section className="resBody">
					<ul id="accordion">
						<li>
							<div className="title" onClick={(e) => display(e)}>
								<FaChevronRight />
								<h2>Summary</h2>
							</div>
							<p className="panel hide">
								Creative, technical, design-savvy recent coding program graduate
								fluent in JavaScript, HTML, and CSS. Excited to blend
								professional experience with hands-on technical training in a
								junior-level software engineering role.
							</p>
						</li>
						<li id="skills">
							<div className="title" onClick={(e) => display(e)}>
								<FaChevronRight />
								<h2>Skills</h2>
							</div>
							<ul className="panel hide">
								<li>
									Programming languages:
									<ul>
										<li>JavaScript,</li>
										<li>React,</li>
										<li>Redux,</li>
										<li>HTML,</li>
										<li>CSS,</li>
										<li>Node.js,</li>
										<li>Express,</li>
										<li>Semantic UI,</li>
										<li>Sass,</li>
										<li>jQuery,</li>
										<li>Socket.IO,</li>
										<li>MySQL,</li>
										<li>JSON-Server,</li>
										<li>AWS-RDS,</li>
										<li>Git</li>
									</ul>
								</li>
								<li>
									Software:
									<ul>
										<li>Visual Studio Code,</li>
										<li>Mac iOS</li>
										<li>Windows 7/8/10,</li>
										<li>Microsoft Office,</li>
										<li>Office 365,</li>
										<li>Google Drive</li>
									</ul>
								</li>
								<li>
									Remote work:
									<ul>
										<li>Agile & Scrum Project Management,</li>
										<li>GitHub Version Control,</li>
										<li>Zoom video conferencing,</li>
										<li>Slack messaging</li>
									</ul>
								</li>
							</ul>
						</li>
						<li>
							<div className="title" onClick={(e) => display(e)}>
								<FaChevronRight />
								<h2>Projects</h2>
							</div>
							<p className="panel hide">
								Creative, technical, design-savvy recent coding program graduate
								fluent in JavaScript, HTML, and CSS. Excited to blend
								professional experience with hands-on technical training in a
								junior-level software engineering role.
							</p>
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
												href="https://punchcode.org/"
												target="_blank"
												rel="noopener noreferrer"
											>
												PunchCode
											</a>
											<p>Jan. 2020 - Apr. 2020</p>
										</div>
										<h3>Full-Stack Web Developer Bootcamp</h3>
										<p>
											Intense 3 month full-time boot-camp program in which I
											learned to build complete web applications
										</p>
									</div>
								</li>
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
							</ul>
						</li>
					</ul>
					<a
						href="https://resume.creddle.io/resume/1lftdzw84g6"
						target="_blank"
						rel="noopener noreferrer"
					>
						Printable resume
					</a>
				</section>
			</div>
		</div>
	)
}
