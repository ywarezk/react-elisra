import { useState } from "react"
import useForms from "../../hooks/forms.hook"


export default function ContactUs() {
	useForms({
		email: '',
		message: ''
	})
	
	
	return (
		<form onSubmit={handleLogin} className="login-form">
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
					value={values.message}
					onChange={handleInputChange}
					type="text" 
					name="message" 
					placeholder="Enter your password" 
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
	)
}