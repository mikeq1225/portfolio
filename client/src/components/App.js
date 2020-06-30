import React, { Suspense } from "react"
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom"
import NavBar from "./NavBar"
import Header from "./homePage/Header"
import Specialize from "./homePage/Specialize"
import Stats from "./homePage/Stats"
// import Process from "./homePage/Process"
import Process2 from "./homePage/Process2"
import Footer from "./Footer"
import AboutMe from "./AboutMe"

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
					<Route exact path="/Home" component={Footer}></Route>
					<Route exact path="/About" component={AboutMe}></Route>
				</Suspense>
			</div>
		</Router>
	)
}
