import { useLocation, useParams } from 'react-router-dom';

//    /about   => AboutPage
export default function AboutPage() {
	const location = useLocation();
	// { dogName: 'piglet' }
	const pathParams = useParams();
	
	return (
		<h1>
			Hello im in the about page {location.search} {pathParams.dogName}
		</h1>
	)
}