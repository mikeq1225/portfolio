import React from "react"
import "../../styles/about/AboutMeTestimonials.scss"

export default (props) => {
	return (
		<div id="aboutTest">
			<section className="py4">
				<div className="container">
					<h2 className="sectionTitle">Testimonials</h2>
					<div className="bottomLine"></div>
					<p className="lead textCenter">
						Take a look at what my clients say...
					</p>
					<div className="testimonials">
						<div>
							<p>
								"Mike is the best person to work with. He took the time to
								listen to what I wanted and came up with a plan of how to
								execute that plan. Couldn't be happier."
							</p>
							<ul>
								<li>
									<img
										src="assets/testimonials/person1.jpg"
										alt="person 1"
									></img>
								</li>
								<li>
									<div>
										<p>Frank Jones</p>
										<p>From: Los Angeles, California</p>
									</div>
								</li>
							</ul>
						</div>
						<div>
							<p>
								"Mike is the best person to work with. He took the time to
								listen to what I wanted and came up with a plan of how to
								execute that plan. Couldn't be happier."
							</p>
							<ul>
								<li>
									<img
										src="assets/testimonials/person2.jpg"
										alt="person 2"
									></img>
								</li>
								<li>
									<div>
										<p>Alicia Smith</p>
										<p>From: Las Vegas, Nevada</p>
									</div>
								</li>
							</ul>
						</div>
						<div>
							<p>
								"Mike is the best person to work with. He took the time to
								listen to what I wanted and came up with a plan of how to
								execute that plan. Couldn't be happier."
							</p>
							<ul>
								<li>
									<img
										src="assets/testimonials/person3.jpg"
										alt="person 3"
									></img>
								</li>
								<li>
									<div>
										<p>Matt Walters</p>
										<p>From: Henderson, Nevada</p>
									</div>
								</li>
							</ul>
						</div>
						<div>
							<p>
								"Mike is the best person to work with. He took the time to
								listen to what I wanted and came up with a plan of how to
								execute that plan. Couldn't be happier."
							</p>
							<ul>
								<li>
									<img
										src="assets/testimonials/person4.jpg"
										alt="person 4"
									></img>
								</li>
								<li>
									<div>
										<p>Samantha Case</p>
										<p>From: San Francisco, California</p>
									</div>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}
