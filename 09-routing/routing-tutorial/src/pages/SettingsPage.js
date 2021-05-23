import { Route, Switch, useLocation, useParams } from 'react-router-dom';

//    /about   => AboutPage
export default function SettingsPage() {
	return (
		<div>
			<h1>
				this is common for all settings
			</h1>
			
{/* 			
			<Switch>
				<Route path="/settings/user">
					<SettingsUserPage />
				</Route>
			</Switch> */}
		</div>
		
		
	)
}