
const name1 = 'Yariv';


// <header style="background-color: red" >
// HeaderDomElement
// { id: '', style: { backgroundColor: 'red'}  }
function Header() {	
	
	function calculateId() {
		const hello = 'world';
		return hello;
	}
	
	function calculateNamne() {
		return true;
	}
	
	return (
		<header id={calculateId()} style={ { backgroundColor: 'red' } }>
			<h1> hello { claculateName() } </h1>
			
			<h1> hello { <span>world</span> } </h1>
			
			<h1> hello { [10, 20, true, false, <span>foo bar</span>] } </h1>
		</header>
	)
}

// 1. between tags
// 2. as an attribute

/**

as an attribute

javascript expression that returns what the attribute suppose to get

 */
 
 
 /**
 
 between tags
 
 number
 string
 null / undefined
 false
 true
 jsx - React.createElement
 array - [10, "hello", false, false, true, <li></li>]
 
 
  */