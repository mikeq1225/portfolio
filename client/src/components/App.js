import React, { Suspense } from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import Header from "./Header"

export default (props) => {
	return (
		<Router>
			<div>
				<Suspense fallback={<div>Loading...</div>}>
					<Route exact path="/" component={Header}></Route>
					<h1>Hello World</h1>
					<button>GET</button>
					<a href="#0">Click Me</a>
				</Suspense>
			</div>
		</Router>
	)
}
