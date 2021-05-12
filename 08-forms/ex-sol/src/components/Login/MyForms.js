

// useForms( {email: '', password: ''} )

export default function MyForm( {
	initialFormValues,
	children
} ) {
	
	const [values, setValues] = useState(initialFormValues);
	
	const handleInputChange = (event) => {
		const value = event.target.value;
			
		setValues(
				{
				...values,
				[event.target.name]: value
			}
		)
	}
	
	// return [ values, handleInputChange ]
	return (
		<form noValidate>
			{
				children(values, handleInputChange)
			}
		</form>
	)
	
}