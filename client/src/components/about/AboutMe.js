import React from "react"
import { FaAward } from "react-icons/fa"
import "../../styles/about/AboutMe.scss"

export default (props) => {
	return (
		<div id="about">
			<section className="textCenter py3">
				<div className="container">
					<h2 className="title">About Me</h2>
					<div className="bottomLine"></div>
					<p className="lead">
						Let me tell you a little about myself and what I do...
					</p>
					<div className="info">
						<img
							className="bioImage"
							src="/assets/michaelQ.jpg"
							alt="Michael Quarne"
						/>
						<div className="bio bgLight">
							<h4>Your project is in safe hands</h4>
							<p>
								I know there are an overwhelming number of choices that have to
								be made in order for you idea to get off the ground. I make the
								decisions about your website or application easy.
							</p>
						</div>
						<div className="award1">
							<FaAward />
							<h3>Award One</h3>
							<p>Describe the awards</p>
						</div>
						<div className="award2">
							<FaAward />
							<h3>Award Two</h3>
							<p>Describe the awards</p>
						</div>
						<div className="award3">
							<FaAward />
							<h3>Award Three</h3>
							<p>Describe the awards</p>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}
