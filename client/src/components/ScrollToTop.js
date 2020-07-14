import { useEffect } from "react"
import { withRouter } from "react-router-dom"

// This component is used to make window scroll to top of page on route change

function ScrollToTop({ history }) {
	useEffect(() => {
		const unlisten = history.listen(() => {
			window.scrollTo({
				top: 0,
				left: 0,
				behavior: "smooth",
			})
		})
		return () => {
			unlisten()
		}
	}, [])

	return null
}

export default withRouter(ScrollToTop)
