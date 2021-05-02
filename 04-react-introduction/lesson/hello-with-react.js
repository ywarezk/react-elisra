/**

create h1 with react with the hello world on screen

                          ReactDOM
javascript -----> React -----------> DOM

 */
 
/*
const h1 = React.createElement(
	'h1',
	undefined,
	React.createElement(
		'strong',
		undefined,
		React.createElement(
			'u',
			undefined,
			'Hello world with React and underline'
		)
	)
)
*/

// JSX - javascript as XML
/*
const h1 = (
	<h1>
		<strong>
			<u>
				Hello world with jsx
			</u>
		</strong>
	</h1> 
)
*/

// react component
function HelloWorld() {
	return (
		<h1>
			<strong>
				<u>
					Hello world with jsx in a function that runs with jsx
				</u>
			</strong>
		</h1> 
	)
}

/**

               <App />
			   
			   
	<Header />       <Login>     <Footer />


 */

ReactDOM.render(
	<HelloWorld />,
	// React.createElement(HelloWorld),
	// React.createElement('h1' ...),
	document.getElementById('container')
)

 
 