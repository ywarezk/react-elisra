
// link -> map -> [ <a href="..."></a>,  ]
const links = [
	{ id: 1, name: 'google', link: 'https://google.com' },
	{ id: 2, name: 'facebook', link: 'https://facebook.com' }
]

function Header() {
	
	
	return (
		<header>
			<nav>
				<a href="https://google.com">google</a>
				<a href="https://facebook.com">facebook</a>
				
				{/*  [1, 2] */}
				{ links.map(function(linkObj) {
					
					return (
						<a key={linkObj.id} href={linkObj.link}> {linkObj.name} </a>
					)
					
				}) }
			</nav>		
		</header>
	)
}