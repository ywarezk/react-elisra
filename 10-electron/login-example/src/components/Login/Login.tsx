import MuiTextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './Login.css';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import React, { useContext, useRef, useState } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { ipcRenderer } from 'electron';
import { readFile } from 'fs';
import { resolve } from 'path';


const LoginSchema = Yup.object().shape({
   email: Yup.string()
     .required('This field is required')
	 .email('Please enter a valid email format'),
   password: Yup.string()
     .required('This field is required')
	 .min(5, 'enter more characters')
 });


 export default function LoginWithFormik() {
	 const [isSubmitting, setIsSubmitting] = useState(false);

	 /**
	  * This function will run when submitting the form
	  // {email: 'sfda', password: 'sadf'}
	  */
	 const handleLogin = async (values) => {
		console.log('before fetch');
    console.log(readFile);

    console.log(__dirname);
    // /Users/yarivkatz/Development/lectures/react/react-elisra/10-electron/login-example/src/package.json
    readFile(resolve(__dirname, 'package.json'), (err, data) => {
      console.log(data.toString());
    })

    // ipcRenderer.invoke('send-hello', 'hello pigletshvily');

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
				<Formik
					initialValues={ {email: 'yariv@nerdeez.com', password: ''} }
					onSubmit={handleLogin}
					validationSchema={ LoginSchema }
				>
					{
						({errors}) => {
							console.log(errors);
							return (
								<Form className="login-form" noValidate>
									<div>
										<Field
											type="email"
											name="email"
											error={!!errors.email}
											label={!!errors.email && 'Error'}
											helperText={errors.email}
											placeholder="Enter your email"
											as={MuiTextField}
										/>

									</div>
									<div>
										<Field
											type="password"
											name="password"
											placeholder="Enter your password"
											as={MuiTextField}
										/>
										<ErrorMessage name="password" />
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
								</Form>
							)
						}
					}

				</Formik>
			</CardContent>
		</Card>

	 )
 }
