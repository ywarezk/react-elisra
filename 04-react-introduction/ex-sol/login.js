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
 
 function Login() {
	 return (
		<form>
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
			 
			 <Login />
			 
			 <Footer />
		 </div>
	 )
 }
 
 ReactDOM.render(
	 <App />,
	 document.getElementById('container')
 )