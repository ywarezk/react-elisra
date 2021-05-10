/**

login created with material design

 */
 
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './Login.css';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';


 
 export default function Login() {
	 
	 /**
	  * This function will run when submitting the form
	  */
	 const handleLogin = async (event) => {
		event.preventDefault();
		console.log('before fetch'); 
		 
		// Promise<Response>
		const loginResponse = await fetch(
			'http://localhost:3333/api/users/login',
			{
				method: 'POST',
				body: JSON.stringify({
					email: 'yariv@nerdeez.com',
					password: '12345678'
				}),	
				headers: {
					'Content-Type': 'application/json'
				}
			}
		)
		
		const token = await loginResponse.json();
		console.log(token);
	 }
	 
	 return (
		<Card>
		
			<CardContent>
				<form onSubmit={handleLogin} className="login-form">
					<div>
						<TextField 
							type="email" 
							name="user-email" 
							placeholder="Enter your email" 
						/>
					</div>
					<div>
						<TextField 
							type="password" 
							name="user-password" 
							placeholder="Enter your email" 
						/>
					</div>
					<div>
						<Button
							type="submit" 
							variant="contained" 
							color="primary"
						>
							Login
						</Button>
					</div>
				</form>
			</CardContent>
		</Card>
		
	 )
 }