import React, { Suspense } from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import Header from "./Header"
import NavBar from "./NavBar"
import About from "./About"

export default (props) => {
	return (
		<Router>
			<div>
				<Suspense fallback={<div>Loading...</div>}>
					<Route path="/" component={NavBar}></Route>
					<Route path="/" component={Header}></Route>
					<Route path="/" component={About}></Route>
				</Suspense>
			</div>
		</Router>
	)
}
