/**

using material design

 */
 
import logo from './logo.png';
import { AppBar, Toolbar } from '@material-ui/core';
import './Header.css';

 
export default function Header() {
	 return (
		 <AppBar position="static">
			<Toolbar className="header">
				<div className="flex">
					<img src={logo} height="100" />
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
			</Toolbar>
		</AppBar>
	 )
 }