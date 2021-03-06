const workItems = [
	{
		id: 11,
		title: "Shopify StoreFront API Examples",
		subtitle: "",
		brief: "Contributed to Shopify's StoreFront API",
		category: "Open Source Contribution",
		problem:
			"I was working on a client's project to create a custom e-commerce website that can utilize the security features built into Shopify. How was I going to incorporate Shopify StoreFront API with my website? I found examples of how to integrate the StoreFront API, but the React version didn't have a scalable solution with predictable state management.",
		solution:
			"I created the reactHooks-redux-js-buy folder in Shopify's Storefront API Examples Github repository.  I refactored legacy React class based components into functional components and added Redux for predictable state management that is accessible everywhere in the app.",
		lessons:
			"At first I just wanted to see if I could do it for my project. Then I thought there might be others who could benefit from this. So I turned the code from my client's project into a working example like in the Storefront examples repository and sent a pull request to Shopify.  Now it has been merged into the master and available for everyone. To see the code, click the Github Repo button. To see the deployed code in action, visit my client's site by clicking the Vethead Project below.",
		tech: "React, Redux",
		image: "/assets/logos/shopifyLogo.png",
		image2: "",
		link: "https://github.com/Shopify/storefront-api-examples",
		link2:
			"https://github.com/Shopify/storefront-api-examples/tree/master/reactHooks-redux-js-buy",
	},
	{
		id: 13,
		title: "Jurn(ease)",
		subtitle: "Capstone project",
		brief: "Complete web application",
		category: "Web Application",
		description:
			"Jurn(ease) is a travel planning application that allows multiple users to plan group vacations in the same place.  They can create Jurn(e)s, or trips, and invite others to join.  Then everyone on the Jurn(e) can decide where to go, what do to, and where to stay.",
		problem:
			"My co-creator and I wanted to learn the lifecycle process of building an application.  We came up with the concept, wrote the code, tested the code and application, and finally deployed it on the internet.",
		lessons:
			"I learned how to plan and execute a large project, how to take all the languages and tools that I've learned and apply them to one project, how to use AWS as a remote MySQL database for our project, and I learned how to accomplish all of this while working in a remote environment.",
		tech:
			"HTML, CSS, Sass, Semantic UI, JavaScript, React, Redux, Node.js, Express, REST APIs, MySQL, AWS-RDS, Slack, Zoom",
		image: "/assets/JurnEase3.png",
		image2: "/assets/JurnEaseScreenShot.png",
		link: "https://aqueous-refuge-23431.herokuapp.com",
		link2: "https://www.youtube.com/watch?v=pT18Us8sayw&feature=youtu.be",
		link3: "https://www.youtube.com/watch?v=IgaI8lv1QOQ&feature=youtu.be",
	},
	{
		id: 1,
		title: "TruLocal",
		subtitle: "My time at TruLocal",
		brief: "Enterprise level E-Commerce Web App",
		category: "E-Commerce Website",
		description:
			"TruLocal is an e-commerce marketplace that provides an efficient bridge between consumers and their local retailers across all product categories in various unique neighborhoods.",
		problem:
			"The development team needed to create and maintain clean, customizable components to leverage Algolia's Instant Search widgets to power the product search page quickly and efficiently while working in the same repo.",
		lessons:
			"I was responsible for developing and maintaining the search route of the application.  I learned how to use Algolia's Instant Search widgets to filter and and search for products as well as setting up Algolia's Indices so the front-end would receive better data. I integrated Material UI components into the project to maintain the style that was laid out in the Figma designs.  I worked in a team of 5 developers and regularly did code reviews to maintain consistency while practicing Agile development.",
		tech:
			"JavaScript, React, React Router, Redux, Algolia, Jira, Figma, JSS, Material UI, i18next, clsx",
		image: "/assets/TruLocal.jpg",
		image2: "",
		link: "https://www.trulocal.com/",
	},
	{
		id: 12,
		title: "Vethead Brand",
		subtitle: "Client Project",
		brief: "Custom Shopify Storefront",
		category: "E-Commerce Website",
		description:
			"A React E-Commerce website created from scratch that integrates with Shopify.",
		problem:
			"Creating a custom Shopify website that has all the safety and security associated with Shopify.",
		lessons:
			"I learned how to integrate Shopify's Storefront API into a custom e-commerce website.",
		tech:
			"HTML, CSS, JavaScript, React, React Router, Shopify's Storefront API",
		image: "/assets/VetheadReflection1.jpg",
		image2: "",
		link: "https://www.vetheadbrand.com/",
	},
	{
		id: 4,
		title: "Mustang Photo Album",
		subtitle: "5th project",
		brief: "Project with React",
		category: "React & Redux",
		description:
			"A photo album based an a topic of our choosing. We were given the wireframe layout of each page and we had to replicate it.  We also had to create our own data set in a JSON file and be able to dynamically display that data.",
		problem:
			"How to create different routes within a single page application to make it appear as though the user was navigating to a new page.",
		lessons:
			"I learned how to use React Router to create the routes for each component and make it possible to switch between those routes without reloading the page.",
		tech: "HTML, CSS, JavaScript, React, React Router, JSON-Server",
		image: "/assets/mustang.jpg",
		image2: "/assets/photoAlbum2.png",
		link: "https://cryptic-dusk-52003.herokuapp.com/",
	},
	// {
	// 	id: 2,
	// 	title: "RyansList",
	// 	subtitle: "7th project",
	// 	brief: "Front & backend clone of CraigsList",
	// 	category: "Web Application",
	// 	description:
	// 		"We were tasked with making a replica CraigsList website where users could search and add postings using React components and a MySQL database.",
	// 	problem:
	// 		"Using React and Redux to keep track of several different pieces of state on differenet components while integrating a MySQL database.",
	// 	lessons:
	// 		"I learned how to construct useful and concise MySQL queries to retrieve date from and add data to the database.",
	// 	tech: "HTML, CSS, JavaScript, React, Redux, Node.js, Express, MySQL",
	// 	image: "/assets/ryanList.jpg",
	// 	image2: "/assets/ryanList2.png",
	// 	link: "https://mighty-garden-83965.herokuapp.com/",
	// },
	{
		id: 3,
		title: "Shopping Cart",
		subtitle: "6th project",
		brief: "Project with React & Redux",
		category: "React & Redux",
		description:
			"Our first steps in React. We had to recreate a T-shirt website with the ability to add and delete in a cart as well as simulating a checkout/receipt screen.",
		problem:
			"How to use React and Redux to control the state of items in the cart.",
		lessons:
			"I learned how to effectively use components to make my code more manageable as well as creating a seamless experience for the user. I also learned how to use Redux to monitor the state of items in the cart as well as some new CSS properties.",
		tech: "HTML, CSS, JavaScript, React, Redux, Node.js, JSON-Server",
		image: "/assets/shoppingCart.jpg",
		image2: "/assets/ReactShoppingCart2.png",
		link: "https://mikeq1225.github.io/react-shopping-cart/",
	},

	{
		id: 5,
		title: "Superman Memory Game",
		subtitle: "4th project",
		brief: "DOM manipulation with jQuery",
		category: "jQuery",
		description:
			"A simple memory game like we used to play as a child.  There is a deck of cards face down. Flip them over and try to match all the pairs before you run out of turns.",
		problem:
			"How to keep track of what the user is doing on each turn and how that turn effects the entire game.",
		lessons:
			"I learned how to use jQuery to manipulate the DOM based on the winning or losing as well as using CSS animations for the card flips.",
		tech: "HTML, CSS, JavaScript, jQuery",
		image: "/assets/supermanVSluthor.jpg",
		image2: "/assets/memory2.png",
		link: "https://mikeq1225.github.io/Memory/",
	},
	{
		id: 9,
		title: "Edge Ledger",
		subtitle: "Responsive Design",
		brief: "Responsive Web Design",
		category: "Website",
		description: "A fictional website used to practice responsive web design.",
		problem: "How to make a website responsive no matter the layout.",
		lessons:
			"I learned how to use modern HTML and CSS to make a clean responsive website.",
		tech: "HTML, CSS, JavaScript",
		image: "/assets/edgeLedger.jpg",
		image2: "/assets/edgeLedger.jpg",
		link: "https://mikeq1225.github.io/Edge_Ledger/",
	},
	{
		id: 10,
		title: "News Grid",
		subtitle: "8th project",
		brief: "Responsive Web Design",
		category: "Website",
		description:
			"A fictional website used to practice responsive web design specifically using grid.",
		problem: "How to make a website responsive no matter the layout.",
		lessons:
			"I learned how to use modern HTML and CSS to make a clean responsive website.",
		tech: "HTML, CSS, JavaScript",
		image: "/assets/newsGrid.jpg",
		image2: "/assets/newsGrid.jpg",
		link: "https://mikeq1225.github.io/NewsGrid/index.html",
	},
	{
		id: 7,
		title: "Etsy Search Page",
		subtitle: "2nd project",
		brief: "HTML recreation with JavaScript",
		category: "Website",
		description:
			"Given a mock-up of an Etsy page, we had to recreate the page. We were also given a file with dummy data to be used for the search.",
		problem: "How to dynamically import the data without typing all of it out.",
		lessons:
			"This was our first step into JavaScript. I also learned how to use jQuery to create a template to map through and display the data.",
		tech: "HTML, CSS, JavaScript, jQuery",
		image: "/assets/etsy.jpg",
		image2: "/assets/etsy.jpg",
		link: "https://mikeq1225.github.io/Create-Etsy-Search-Page/",
	},
	{
		id: 8,
		title: "Ska8er Site",
		subtitle: "1st project",
		brief: "HTML recreation",
		category: "Website",
		description:
			"Our first project in class. We were given an image of a website and we had to recreate the site. It was meant to teach us principles of HTML and CSS.",
		problem:
			"Trying to figure out how to position things in the correct space and order.",
		lessons:
			"I learned how to use CSS Grid and Flexbox quite well. Also learned how to use pseudo elements.",
		tech: "HTML, CSS",
		image: "/assets/skaterSite.jpg",
		image2: "/assets/skaterSite.png",
		link: "https://mikeq1225.github.io/Sk8er-Site/",
	},
]

module.exports = workItems
