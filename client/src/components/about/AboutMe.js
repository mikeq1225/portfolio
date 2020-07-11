import React from "react"
import { FaUserTie, FaHiking, FaCocktail } from "react-icons/fa"
import "../../styles/about/AboutMe.scss"

export default (props) => {
	return (
		<div id="about">
			<section className="textCenter py3">
				<div className="container">
					<p className="lead">
						Let me tell you a little about myself and what I like to do...
					</p>
					<div className="bottomLine"></div>
					<div className="info">
						<div className="bioImage">
							<img src="/assets/michael1.jpg" alt="Michael Quarne" />
							<img src="/assets/michael2.jpg" alt="Michael Quarne" />
							<img src="/assets/michael3.jpg" alt="Michael Quarne" />
							<img src="/assets/michael6.jpg" alt="Michael Quarne" />
						</div>
						<div className="bio bgLight">
							<h4>What makes me who I am...</h4>
							<p>
								I am a full-stack web developer from Las Vegas and a graduate
								from PunchCode’s Full-Stack Software Engineer boot camp. Skilled
								at building web applications from the ground up – from concept,
								to design, to writing well-designed, testable and efficient code
								while focusing on UX/UI. The completion of my capstone project,
								a vacation planning web application called Jurn(ease), showcases
								all of my current skills. I am continuing to learn new languages
								and techniques to improve my overall coding skills.
							</p>
							<p>
								My coding philosophy starts with strategic planning, designing,
								and developing applications to help reach desired objectives and
								goals. I try to surround myself with technical people,
								activities, hobbies, and endeavors that push me to keep learning
								through experience.
							</p>
							<p>
								Originally from Milwaukee, WI, my wife and I relocated to Las
								Vegas a few years ago after our children joined the military and
								informed us that they would not be moving back to Wisconsin. We
								decided it was a good time to move somewhere warm to begin an
								exciting new chapter in our lives. Las Vegas has not let us
								down. It has so much to offer and we have meet many amazing new
								friends.
							</p>
						</div>
						<div className="award1">
							<FaHiking />
							<h3>Hiking</h3>
							<p>Vegas is a great place to hike in some awesome scenery</p>
						</div>
						<div className="award2">
							<FaUserTie />
							<h3>Fashion</h3>
							<p>Looking good always makes me feel good</p>
						</div>
						<div className="award3">
							<FaCocktail />
							<h3>Happy Hour</h3>
							<p>
								Friday date night at some of the best 'Happy Hours' anywhere
							</p>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}
