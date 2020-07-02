import axios from "axios"
import { useSelector, useDispatch } from "react-redux"

const GET_PROJECTS = "projects/GET_PROJECTS"
const GET_PROJECT = "projects/GET_PROJECT"

const initialState = {
	projects: [],
	project: [],
	feature: [],
}

export default (state = initialState, action) => {
	switch (action.type) {
		case GET_PROJECTS:
			return { ...state, ...action.payload }
		case GET_PROJECT:
			return { ...state, project: action.payload }
		default:
			return state
	}
}

function getProjects() {
	return (dispatch) => {
		axios.get("/api/projects").then((resp) => {
			dispatch({
				type: GET_PROJECTS,
				payload: {
					projects: resp.data.projects.projects,
					feature: resp.data.projects.feature[0],
				},
			})
		})
	}
}

function getProject(id) {
	return (dispatch) => {
		axios.get(`/api/projects/${id}`).then((resp) => {
			dispatch({
				type: GET_PROJECT,
				payload: resp.data,
			})
		})
	}
}

function getLinks(id) {
	return new Promise((resolve, reject) => {
		axios.get(`/api/projects`).then((resp) => {
			const projects = resp.data
			let left = 0
			let right = 0
			let length = projects.length

			projects.forEach((proj, i) => {
				if (proj.id == id) {
					if (i === projects.length - 1) {
						right = projects[0].id
						left = projects[i - 1].id
					} else if (i === 0) {
						right = projects[i + 1].id
						left = projects[length - 1].id
					} else {
						right = projects[i + 1].id
						left = projects[i - 1].id
					}
				}
			})
			resolve({
				left: left,
				right: right,
			})
		})
	})
}

export function useProjects() {
	const dispatch = useDispatch()
	const projects = useSelector((appState) => appState.projectState.projects)
	const project = useSelector((appState) => appState.projectState.project)
	const feature = useSelector((appState) => appState.projectState.feature)
	const fetchProjects = () => dispatch(getProjects())
	const fetchProject = (id) => dispatch(getProject(id))
	const fetchLinks = (id) => getLinks(id)

	return { projects, project, feature, fetchProject, fetchProjects, fetchLinks }
}
