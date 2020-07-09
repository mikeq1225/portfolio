import React from "react"
import "../../styles/resume/ResumeBody.scss"
import { FaChevronRight } from "react-icons/fa"

export default (props) => {
	function display(e) {
		e.preventDefault()
		let para = e.target.closest("div").nextElementSibling

		if (para.classList.contains("hide")) {
			para.classList.remove("hide")
			para.classList.add("show")
		} else if (para.classList.contains("show")) {
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
						<li className="skills">
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
						<li>
							<div className="title" onClick={(e) => display(e)}>
								<FaChevronRight />
								<h2>Education</h2>
							</div>
							<p className="panel hide">
								Creative, technical, design-savvy recent coding program graduate
								fluent in JavaScript, HTML, and CSS. Excited to blend
								professional experience with hands-on technical training in a
								junior-level software engineering role.
							</p>
						</li>
						<li>
							<div className="title" onClick={(e) => display(e)}>
								<FaChevronRight />
								<h2>Employment</h2>
							</div>
							<p className="panel hide">
								Creative, technical, design-savvy recent coding program graduate
								fluent in JavaScript, HTML, and CSS. Excited to blend
								professional experience with hands-on technical training in a
								junior-level software engineering role.
							</p>
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
