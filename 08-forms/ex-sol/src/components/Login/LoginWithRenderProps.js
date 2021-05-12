/**

login created with material design

 */
 
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './Login.css';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { useState } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';



 
 export default function Login() {
	 const [isSubmitting, setIsSubmitting] = useState(false);
	 
	 /**
	  * This function will run when submitting the form
	  */
	 const handleLogin = async (event) => {
		event.preventDefault();
		console.log('before fetch'); 
		
		// validate the values
		// display error if validation fails
		// return
		
		setIsSubmitting(true);
		 
		// Promise<Response>
		const loginResponse = await fetch(
			'https://academeez-login-ex.herokuapp.com/api/users/login',
			{
				method: 'POST',
				body: JSON.stringify(values),	
				headers: {
					'Content-Type': 'application/json'
				}
			}
		)
		
		const token = await loginResponse.json();
		console.log(token);
		
		setIsSubmitting(false);
	 }
	 
	 return (
		<Card>
		
			<CardContent>
				<MyForm 
					initialFormValues={ {email: 'yariv@nerdeez.com', password: ''} }
					
				>
				
					{ (values, handleInputChange) => {
						
						return (
							<div>
								<div>
									<TextField 
										value={values.email}
										onChange={handleInputChange}
										type="email" 
										name="email" 
										placeholder="Enter your email" 
									/>
								</div>
								<div>
									<TextField 
										value={values.password}
										onChange={handleInputChange}
										type="password" 
										name="password" 
										placeholder="Enter your password" 
									/>
								</div>
								<div>
									<Button
										type="submit" 
										variant="contained" 
										color="primary"
										disabled={isSubmitting}
									>
										Login
									</Button>
									
									{ isSubmitting && <CircularProgress /> }
								</div>
							</div>
						)
						
						
					} }
				
				</MyForm>
				
			</CardContent>
		</Card>
		
	 )
 }