
import PropTypes from 'prop-types';


// props = { firstName: "Pigletshvily", age: 8, lastName: "Chaitovski" }
// export default function Hello(props) {
export default function HelloProps( { 
	firstName, 
	lastName ,
	age = 5
} ) {
	return (
		<h1>Hello { firstName } { lastName } my age is {age} </h1>
	)
}

// https://reactjs.org/docs/typechecking-with-proptypes.html
Hello.propTypes = {
	firstName: PropTypes.string.isRequired,
	lastName: PropTypes.string.isRequired,
	age: PropTypes.number,
}