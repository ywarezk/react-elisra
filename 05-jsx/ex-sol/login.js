/**
 * Place the code for the todo/login excercise here.
 */
 
 function Header() {
	 return (
		 <header>
			<div>
		
				<img src="logo.png" />
		
				<nav>
					<div>
						<a href="https://ynet.co.il">
							YNET
						</a>
					</div>
					<div>
						<a href="https://github.com/ywarezk/react-elisra">
							Course Github
						</a>
					</div>
				</nav>
		
			</div>
		</header>
	 )
 }
 
 function TodoList() {
	 const todoTasks = [{"id":1,"title":"Congratulations!!!","description":"You","createdAt":"2021-03-17T20:42:13.029Z","updatedAt":"2021-03-17T20:42:13.029Z"},{"id":2,"title":"Have","description":"Successfully","createdAt":"2021-03-17T20:42:18.326Z","updatedAt":"2021-03-17T20:42:18.326Z"},{"id":3,"title":"completed","description":"the","createdAt":"2021-03-17T20:42:18.330Z","updatedAt":"2021-03-17T20:42:18.330Z"},{"id":4,"title":"login","description":"exercise","createdAt":"2021-03-17T20:42:18.333Z","updatedAt":"2021-03-17T20:42:18.333Z"}];
	 
	 const deleteTaskFromList = (id) => {
		 console.log(`deleting element number ${id}`);
	 }
	 
	 return (
		 <ul>
		 	{
				 todoTasks.map((task) => {
					 return (
						 <li key={task.id}>
						 	<h1>
								{task.title} 
							</h1>
							<p>
								{task.description}
							</p>
							
							<button onClick={() => deleteTaskFromList(task.id) }>X</button>
						 </li>
					 )
				 })
			 }
		 </ul>
	 )
 }
 
 function Login() {
	 
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
		<form onSubmit={handleLogin}>
			<div>
				<input type="email" name="user-email" placeholder="Enter your email" />
			</div>
			<div>
				<input type="password" name="user-password" placeholder="Enter your email" />
			</div>
			<div>
				<button type="submit">
					Login
				</button>
			</div>
		</form>
	 )
 }
 
 function Footer() {
	 return (
		<footer>
			<h1> Im a footer </h1>
		</footer>
	 )
 }
 
 function App() {
	 return (
		 <div>
		 	<Header />
			 
			 <TodoList />
			 
			 <Login />
			 
			 <Footer />
		 </div>
	 )
 }
 
 ReactDOM.render(
	 <App />,
	 document.getElementById('container')
 )