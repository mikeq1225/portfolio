import React, { Suspense } from "react"
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom"
import NavBar from "./NavBar"
import Header from "./homePage/Header"
import Specialize from "./homePage/Specialize"
import Stats from "./homePage/Stats"
import Process2 from "./homePage/Process2"
import AboutMe from "./about/AboutMe"
import AboutMeProgress from "./about/AboutMeProgress"
import AboutMeLogos from "./about/AboutMeLogos"
import AboutMeTestimonials from "./about/AboutMeTestimonials"
import WorkFeature from "./work/WorkFeature"
import WorkProjects from "./work/WorkProjects"
import ResumeHeader from "./resume/ResumeHeader"
import ResumeBody from "./resume/ResumeBody"
import Footer from "./Footer"
import ScrollToTop from "./ScrollToTop"

export default (props) => {
	return (
		<Router>
			<div>
				<Suspense fallback={<div>Loading...</div>}>
					{/* ScrollToTop is imported to call the function in the component to scroll to top of page on route change */}
					<ScrollToTop />
					<Route exact path="/" render={() => <Redirect to="/Home" />} />
					<Route path="/" component={NavBar}></Route>
					<Route path="/Home" component={Header}></Route>
					<Route path="/Home" component={Specialize}></Route>
					<Route path="/Home" component={Stats}></Route>
					<Route path="/Home" component={Process2}></Route>
					<Route path="/About" component={AboutMe}></Route>
					<Route path="/About" component={AboutMeProgress}></Route>
					<Route path="/About" component={AboutMeLogos}></Route>
					<Route path="/About" component={AboutMeTestimonials}></Route>
					<Route path="/Work" component={WorkFeature}></Route>
					<Route path="/Work" component={WorkProjects}></Route>
					<Route path="/Resume" component={ResumeHeader}></Route>
					<Route path="/Resume" component={ResumeBody}></Route>
					<Route path="/" component={Footer}></Route>
				</Suspense>
			</div>
		</Router>
	)
}
