/**

custom hook 
to prevent repeating code in forms

 */
 
 // { email: '', password: '' }
 export default function useForms(initialFormValues) {
	 
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
	
	return [values, handleInputChange]
	 
 }