import React from "react"
import "../../styles/homePage/Stats.scss"
import {
	FaUsers,
	FaAward,
	FaHourglassStart,
	FaCodeBranch,
} from "react-icons/fa"
import { IconContext } from "react-icons/lib"

export default (props) => {
	return (
		<div id="statSection">
			<section className="stats textCenter padY2">
				<IconContext.Provider value={{ size: "3rem" }}>
					<div>
						<ul>
							<li>
								<FaUsers />
							</li>
							<li className="title">Clients</li>
							<li className="number">100</li>
						</ul>
					</div>
					<div>
						<ul>
							<li>
								<FaAward />
							</li>
							<li className="title">Awards</li>
							<li className="number">4</li>
						</ul>
					</div>
					<div>
						<ul>
							<li>
								<FaHourglassStart />
							</li>
							<li className="title">Hours Worked</li>
							<li className="number">2300</li>
						</ul>
					</div>
					<div>
						<ul>
							<li>
								<FaCodeBranch />
							</li>
							<li className="title">Projects Completed</li>
							<li className="number">15</li>
						</ul>
					</div>
				</IconContext.Provider>
			</section>
		</div>
	)
}
