import React from "react"
import "../../styles/homePage/Process2.scss"
import { FaCode } from "react-icons/fa"
import { GrNotes } from "react-icons/gr"
import { MdPhotoSizeSelectSmall } from "react-icons/md"
import { FcSmartphoneTablet } from "react-icons/fc"
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
							>
								<div>
									<h3>
										<GrNotes /> First
									</h3>
									<h2>Discuss the project</h2>
									<p>Talk with customer to find out their needs and desires</p>
								</div>
							</ScrollAnimation>
						</li>
						<li>
							<ScrollAnimation
								animateIn="animate__fadeInLeftBig"
								offset={150}
								duration={1.5}
							>
								<div>
									<h3>
										<MdPhotoSizeSelectSmall /> Second
									</h3>
									<h2>Design the Wireframes</h2>
									<p>
										Create wireframes to the customer can see what the project
										could look like in the end
									</p>
								</div>
							</ScrollAnimation>
						</li>
						<li>
							<ScrollAnimation
								animateIn="animate__fadeInRightBig"
								offset={150}
								duration={1.5}
							>
								<div>
									<h3>
										<FaCode /> Third
									</h3>
									<h2>Write Code</h2>
									<p>
										Write the code for the project and stay in communication
										with customer along the way
									</p>
								</div>
							</ScrollAnimation>
						</li>
						<li>
							<ScrollAnimation
								animateIn="animate__fadeInLeftBig"
								offset={150}
								duration={1.5}
							>
								<div>
									<h3>
										<FcSmartphoneTablet /> Fourth
									</h3>
									<h2>Make responsive</h2>
									<p>
										Make sure the site or application is responsive on all
										screens it will be used on
									</p>
								</div>
							</ScrollAnimation>
						</li>
						<li>
							<ScrollAnimation
								animateIn="animate__fadeInRightBig"
								offset={150}
								duration={1.5}
							>
								<div>
									<h3>
										<AiOutlineFileDone /> Lastly
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
