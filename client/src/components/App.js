import React, { Suspense } from "react"
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom"
import NavBar from "./NavBar"
import Header from "./homePage/Header"
import Specialize from "./homePage/Specialize"
import Stats from "./homePage/Stats"
// import Process from "./homePage/Process"
import Process2 from "./homePage/Process2"
import AboutMe from "./about/AboutMe"
import AboutMeProgress from "./about/AboutMeProgress"
import AboutMeLogos from "./about/AboutMeLogos"
import AboutMeTestimonials from "./about/AboutMeTestimonials"
import WorkFeature from "./work/WorkFeature"
import WorkProjects from "./work/WorkProjects"
import ResumeHeader from "./resume/ResumeHeader"
import Footer from "./Footer"

export default (props) => {
	return (
		<Router>
			<div>
				<Suspense fallback={<div>Loading...</div>}>
					<Route exact path="/" render={() => <Redirect to="/Home" />} />
					<Route path="/" component={NavBar}></Route>
					<Route exact path="/Home" component={Header}></Route>
					<Route exact path="/Home" component={Specialize}></Route>
					<Route exact path="/Home" component={Stats}></Route>
					{/* <Route exact path="/" component={Process}></Route> */}
					<Route exact path="/Home" component={Process2}></Route>
					<Route exact path="/About" component={AboutMe}></Route>
					<Route exact path="/About" component={AboutMeProgress}></Route>
					<Route exact path="/About" component={AboutMeLogos}></Route>
					<Route exact path="/About" component={AboutMeTestimonials}></Route>
					<Route path="/Work" component={WorkFeature}></Route>
					<Route path="/Work" component={WorkProjects}></Route>
					<Route path="/Resume" component={ResumeHeader}></Route>
					<Route path="/" component={Footer}></Route>
				</Suspense>
			</div>
		</Router>
	)
}
