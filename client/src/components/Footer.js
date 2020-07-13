import React from "react"
import { FaFacebook, FaInstagram, FaGithub, FaLinkedinIn } from "react-icons/fa"
import "../styles/Footer.scss"

export default (props) => {
	return (
		<div id="footer">
			<footer>
				<div className="content container">
					<div>
						<p>Copyright © 2020. All rights reserved</p>
						<p>Designed &amp; created by Michael Quarne</p>
					</div>
					<div className="social">
						<a
							href="https://github.com/mikeq1225"
							target="_blank"
							rel="noopener noreferrer"
						>
							<FaGithub />
						</a>
						<a
							href="https://www.linkedin.com/in/michaelquarne/"
							target="_blank"
							rel="noopener noreferrer"
						>
							<FaLinkedinIn />
						</a>
						<a
							href="https://www.facebook.com/mikequarne"
							target="_blank"
							rel="noopener noreferrer"
						>
							<FaFacebook />
						</a>
						<a
							href="https://www.instagram.com/trulyqsstyle/"
							target="_blank"
							rel="noopener noreferrer"
						>
							<FaInstagram />
						</a>
					</div>
				</div>
			</footer>
		</div>
	)
}
