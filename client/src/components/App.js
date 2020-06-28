import React, { Suspense } from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import Header from "./homePage/Header"
import NavBar from "./NavBar"
import Specialize from "./homePage/Specialize"
import Stats from "./homePage/Stats"

export default (props) => {
	return (
		<Router>
			<div>
				<Suspense fallback={<div>Loading...</div>}>
					<Route path="/" component={NavBar}></Route>
					<Route path="/" component={Header}></Route>
					<Route path="/" component={Specialize}></Route>
					<Route path="/" component={Stats}></Route>
				</Suspense>
			</div>
		</Router>
	)
}
