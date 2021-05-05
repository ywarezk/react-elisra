

function Header() {
	const clickMe = function() {
		console.log('button is clicked');
	}
	
	
	// event = {  } 
	// describe the event that just happened 
	const formIsSubmitting = (event) => {
		event.preventDefault()
	}
	
	return (
		<header>
			<button onClick={ clickMe } >
				Click me
			</button>
			
			<form onSubmit={ formIsSubmitting }>
				<input type="text" />
				<button type="submit">
					Send the form
				</button>
			</form>
		</header>
	)
}