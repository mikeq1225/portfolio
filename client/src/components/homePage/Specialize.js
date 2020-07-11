import React from "react"
import "../../styles/homePage/Specialize.scss"
import { FaFileAlt, FaDesktop, FaObjectUngroup } from "react-icons/fa"
import { RiUserFollowLine } from "react-icons/ri"
import { IconContext } from "react-icons/lib"

export default (props) => {
	return (
		<div id="specialize">
			<section className="textCenter padY2">
				<div className="container">
					<h2 className="sectionTitle">I Specialize In</h2>
					<div className="bottomLine"></div>
					<p className="lead">
						Allowing the customer's needs to dictate design while keeping
						responsiveness at the forefront
					</p>
					<div className="specials">
						<IconContext.Provider value={{ size: "4rem" }}>
							<div>
								<FaFileAlt />
								<h3>Conceptualize</h3>
								<p>Developing creative solutions to everyday problems</p>
							</div>
							<div>
								<FaDesktop />
								<h3>Design</h3>
								<p>Making the project look as good as it functions</p>
							</div>
							<div>
								<FaObjectUngroup />
								<h3>Development</h3>
								<p>
									Continuing to learn modern technologies while maintaining core
									fundamentals
								</p>
							</div>
							<div>
								<RiUserFollowLine />
								<h3>UI/UX</h3>
								<p>
									Making sure the user experience is as good as the code that
									drives it
								</p>
							</div>
						</IconContext.Provider>
					</div>
				</div>
			</section>
		</div>
	)
}
