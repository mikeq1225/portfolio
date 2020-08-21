import React from "react"
import "../../styles/homePage/Stats.scss"
import { FaUsers } from "react-icons/fa"
import { GiWorld } from "react-icons/gi"
import { DiGitBranch, DiGitPullRequest } from "react-icons/di"
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
							<li className="number">4</li>
						</ul>
					</div>
					<div>
						<ul>
							<li>
								<GiWorld />
							</li>
							<li className="title">Deployed Projects</li>
							<li className="number">12</li>
						</ul>
					</div>
					<div>
						<ul>
							<li>
								<DiGitPullRequest />
							</li>
							<li className="title">GitHub Contributions</li>
							<li className="number">1100+</li>
						</ul>
					</div>
					<div>
						<ul>
							<li>
								<DiGitBranch />
							</li>
							<li className="title">Small Projects</li>
							<li className="number">22</li>
						</ul>
					</div>
				</IconContext.Provider>
			</section>
		</div>
	)
}
