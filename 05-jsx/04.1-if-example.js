/**

if inside a component

 */
 
 function Header() {
	 // random < 0.5 'yariv', random >=0.5 'alex'
	 const random = Math.random();
	 
	 return (
		 <header>
		 	<h1>
			 	Hello { random >= 0.5 ? 'alex' : 'yariv' }
				 
				Hello { random >= 0.5 && 'alex' }
				
				Hello { random >= 0.5 || 'alex' }
				
				Hello { (() => {
					if (random >= 0.5) {
						return 'alex'
					} else {
						return 'yariv'
					}
				})() }
				 
				{/* Hello { if(random >= 0.5) {} } */}
			 </h1>
		 </header>
	 )
 }