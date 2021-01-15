const express = require("express")
const path = require("path")
const app = express()
const workItems = require("./workItems")

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

// Serve static files from the React app
app.use(express.static(path.join(__dirname, "public")))

// Gets all the work items and takes the project with id = 1 and makes it a featured item
app.get("/api/projects", (req, res) => {
	const projects = {
		projects: [],
		feature: [],
		openSource: [],
	}
	workItems.map((project) => {
		if (project.id === 1) {
			projects.feature.push(project)
		} else if (project.id === 11) {
			projects.openSource.push(project)
		} else {
			projects.projects.push(project)
		}
	})

	res.json({ projects: projects })
})

// The "catchall" handler: for any request that doesn't match one above, send back React's index.html file.
app.get("*", function (req, res) {
	res.sendFile(path.join(__dirname + "/public/index.html"))
})

const port = process.env.PORT || 5001
app.listen(port, () => {
	console.log(`LISTENING ON PORT ${port}`)
})
