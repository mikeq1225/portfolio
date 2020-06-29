import React, { Suspense } from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import NavBar from "./NavBar"
import Header from "./homePage/Header"
import Specialize from "./homePage/Specialize"
import Stats from "./homePage/Stats"
import Process from "./homePage/Process"
import Footer from "./Footer"

export default (props) => {
	return (
		<Router>
			<div>
				<Suspense fallback={<div>Loading...</div>}>
					<Route path="/" component={NavBar}></Route>
					<Route path="/" component={Header}></Route>
					<Route path="/" component={Specialize}></Route>
					<Route path="/" component={Stats}></Route>
					<Route path="/" component={Process}></Route>
					<Route path="/" component={Footer}></Route>
				</Suspense>
			</div>
		</Router>
	)
}
