import React, { useEffect } from "react"
import { Link } from "react-router-dom"
import "../../styles/homePage/Header.scss"

export default (props) => {
	class TypeWriter {
		constructor(txtElement, words, wait = 3000) {
			this.txtElement = txtElement
			this.words = words
			this.txt = ""
			this.wordIndex = 0
			this.wait = parseInt(wait, 10)
			this.type()
			this.isDeleting = false
		}

		type() {
			// Current index of word
			const current = this.wordIndex % this.words.length
			// Get full text of current word
			const fullTxt = this.words[current]

			// Check if deleting
			if (this.isDeleting) {
				// Remove char
				this.txt = fullTxt.substring(0, this.txt.length - 1)
			} else {
				// Add char
				this.txt = fullTxt.substring(0, this.txt.length + 1)
			}

			// Insert txt into element
			this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`

			// Initial Type Speed
			let typeSpeed = 300

			if (this.isDeleting) {
				typeSpeed /= 2
			}

			// If word is complete
			if (!this.isDeleting && this.txt === fullTxt) {
				// Make pause at end
				typeSpeed = this.wait
				// Set delete to true
				this.isDeleting = true
			} else if (this.isDeleting && this.txt === "") {
				this.isDeleting = false
				// Move to next word
				this.wordIndex++
				// Pause before start typing
				typeSpeed = 500
			}

			setTimeout(() => this.type(), typeSpeed)
		}
	}

	// Init On DOM Load
	document.addEventListener("DOMContentLoaded", init)

	// Init App
	function init() {
		const txtElement = document.querySelector(".txt")
		const words = JSON.parse(txtElement.getAttribute("datawords"))
		const wait = txtElement.getAttribute("datawait")
		// Init TypeWriter
		new TypeWriter(txtElement, words, wait)
	}

	useEffect(() => {
		init()
	})

	return (
		<div id="showcase">
			<header>
				<div className="container">
					<div className="headerContent">
						<h1>
							I am Michael, The{" "}
							<span
								className="txt"
								datawait="3000"
								datawords='["UI/UX Enthusiast", "Application Developer"]'
							></span>
						</h1>
						<p className="lead">
							I build web applications with a focus on UX/UI Design
						</p>
						<Link to="/Work" className="buttonMain">
							View My Work
						</Link>
					</div>
				</div>
			</header>
		</div>
	)
}
