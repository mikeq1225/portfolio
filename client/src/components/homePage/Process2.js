import React from "react"
import "../../styles/homePage/Process2.scss"
import { FaCode } from "react-icons/fa"
import { GiTalk } from "react-icons/gi"
import { MdPhotoSizeSelectSmall } from "react-icons/md"
import { MdDevices } from "react-icons/md"
import { AiOutlineFileDone } from "react-icons/ai"
import ScrollAnimation from "react-animate-on-scroll"
import "animate.css/animate.min.css"

export default (props) => {
	return (
		<div id="process">
			<section className="textCenter padY2 container">
				<h2 className="sectionTitle">My Creative Process</h2>
				<div className="bottomLine"></div>
				<p className="lead">
					I start with figuring out what the customer wants their applications
					to do and how they want it to look
				</p>
				<div id="timeline">
					<ul>
						<li>
							<ScrollAnimation
								animateIn="animate__fadeInRightBig"
								offset={150}
								duration={1.5}
								animateOnce={true}
							>
								<div>
									<h3>
										<GiTalk />
									</h3>
									<h2>Discuss the project</h2>
									<p>
										I talk with the customer to find out what their needs and
										desires are for the project
									</p>
								</div>
							</ScrollAnimation>
						</li>
						<li>
							<ScrollAnimation
								animateIn="animate__fadeInLeftBig"
								offset={150}
								duration={1.5}
								animateOnce={true}
							>
								<div>
									<h3>
										<MdPhotoSizeSelectSmall />
									</h3>
									<h2>Design the Wireframes</h2>
									<p>
										Create wireframes based on previous conversations so the
										customer can see what the project would look like when
										finished
									</p>
								</div>
							</ScrollAnimation>
						</li>
						<li>
							<ScrollAnimation
								animateIn="animate__fadeInRightBig"
								offset={150}
								duration={1.5}
								animateOnce={true}
							>
								<div>
									<h3>
										<FaCode />
									</h3>
									<h2>Write Code</h2>
									<p>
										Write the code for the project and stay in communication
										with the customer along the way to make sure their needs
										haven't changed
									</p>
								</div>
							</ScrollAnimation>
						</li>
						<li>
							<ScrollAnimation
								animateIn="animate__fadeInLeftBig"
								offset={150}
								duration={1.5}
								animateOnce={true}
							>
								<div>
									<h3>
										<MdDevices />
									</h3>
									<h2>Make responsive</h2>
									<p>
										Make sure the website or application is responsive on all
										devices that it is intended to be used on
									</p>
								</div>
							</ScrollAnimation>
						</li>
						<li>
							<ScrollAnimation
								animateIn="animate__fadeInRightBig"
								offset={150}
								duration={1.5}
								animateOnce={true}
							>
								<div>
									<h3>
										<AiOutlineFileDone />
									</h3>
									<h2>Deliver Project</h2>
									<p>
										Deliver the final project on time and with the approval of
										the customer
									</p>
								</div>
							</ScrollAnimation>
						</li>
					</ul>
				</div>
			</section>
		</div>
	)
}
