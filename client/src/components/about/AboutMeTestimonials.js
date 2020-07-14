import React from "react"
import "../../styles/about/AboutMeTestimonials.scss"

export default (props) => {
	return (
		<div id="aboutTest">
			<section className="py4">
				<div className="container">
					<h2 className="sectionTitle">Testimonials</h2>
					<div className="bottomLine"></div>
					<div className="testimonials">
						<div>
							<p>
								"Michael is an extremely hard worker and a fantastic problem
								solver. He's self motivated and gets things done and he's
								extremely easy to get along with. He'd be a great asset to any
								team."
							</p>
							<ul>
								<li>
									<img
										src="assets/testimonials/mSweeney.jpeg"
										alt="person 1"
									></img>
								</li>
								<li>
									<div>
										<p>Michael Sweeney</p>
										<p>
											<span>From:</span> Las Vegas, Nevada
										</p>
									</div>
								</li>
							</ul>
						</div>
						<div>
							<p>
								"Mike was always a good example for how to work effectively and
								efficiently. He would show others how to do the job by executing
								it to a high level and demonstrating a strong work ethic."
							</p>
							<ul>
								<li>
									<img
										src="assets/testimonials/jLemke.jpeg"
										alt="person 2"
									></img>
								</li>
								<li>
									<div>
										<p>Joshua Lemke</p>
										<p>
											<span>From:</span> Germantown, Wisconsin
										</p>
									</div>
								</li>
							</ul>
						</div>
						<div>
							<p>
								"Mike was the best to work with. Very easy going but diligent.
								He took the time to listen to what I wanted and came up with a
								plan of how to execute that idea. Couldn't be happier."
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
										<p>
											<span>From:</span> Henderson, Nevada
										</p>
									</div>
								</li>
							</ul>
						</div>
						<div>
							<p>
								"Mike was very easy to work with. He took the time to listen and
								fully understand my needs. Although we weren't sure about the
								direction of our project, he did what he could along the way and
								was able to adapt as our idea changed."
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
										<p>
											<span>From:</span> Las Vegas, Nevada
										</p>
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
