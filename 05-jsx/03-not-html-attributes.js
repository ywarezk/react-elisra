

// HeaderDomElement - object js represents the header
// { id: 'hello', className: 'hello', htmlFor: '' }

// class => className
// for => htmlFor
function Header() {
	return (
		<header id="my-header" className="hello">
			<h1>
				hello header
			</h1>
			
			<form>
				<label htmlFor="my-input">
					Description of the input
				</label>
				<input id="my-input" />
			</form>
		</header>
	)
}