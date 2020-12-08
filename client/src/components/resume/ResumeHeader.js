import React from "react"
import {
	FaEnvelope,
	FaFacebookF,
	FaLinkedinIn,
	FaPhoneAlt,
	FaGithub,
} from "react-icons/fa"
import { GiEarthAmerica } from "react-icons/gi"
import { MdLocationOn } from "react-icons/md"
import "../../styles/resume/ResumeHeader.scss"

export default (props) => {
	return (
		<div id="resumeHeader">
			<div className="container">
				<header className="resHeader">
					<div>
						<h1>
							Michael <span>Quarne</span>
						</h1>
						<h3>React.js Developer</h3>
					</div>
					<div>
						<ul>
							<li>
								<FaEnvelope />
								<a href="mailto:mikedq1225@gmail.com">mikedq1225@gmail.com</a>
							</li>
							<li>
								<FaFacebookF />
								<a
									href="https://www.facebook.com/mikequarne"
									target="_blank"
									rel="noopener noreferrer"
								>
									mikequarne
								</a>
							</li>
							<li>
								<GiEarthAmerica />
								<a
									href="http://michaelquarne.com"
									target="_blank"
									rel="noopener noreferrer"
								>
									michaelquarne.com
								</a>
							</li>
							<li>
								<FaLinkedinIn />
								<a
									href="https://www.linkedin.com/in/michaelquarne/"
									target="_blank"
									rel="noopener noreferrer"
								>
									michaelquarne/
								</a>
							</li>
							<li>
								<FaPhoneAlt /> 262-339-0755
							</li>
							<li>
								<FaGithub />
								<a
									href="https://github.com/mikeq1225"
									target="_blank"
									rel="noopener noreferrer"
								>
									mikeq1225
								</a>
							</li>
							<li>
								<MdLocationOn /> Las Vegas, NV
							</li>
						</ul>
					</div>
				</header>
			</div>
		</div>
	)
}
