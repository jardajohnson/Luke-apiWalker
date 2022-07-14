import { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { useParams, useNavigate } from 'react-router';
import Search from './components/Search';
import Results from './components/Results';

function App() {
	const [resource, setResource] = useState('');
	const [resourceId, setResourceId] = useState(0);
	const navigate = useNavigate();
	

	return (
		<div>
			<Routes>
				<Route
					path='/'
					element={
						<Search
						resource={resource}

							navigate={navigate}
							resourceId={resourceId}
							setResourceId={setResourceId}
							setResource={setResource}
						/>
					}
				/>
				<Route
					path='/:resource/:id'
					element={
						<>
							<Search
								resource={resource}

								navigate={navigate}
								resourceId={resourceId}
								setResourceId={setResourceId}
								setResource={setResource}
							/>
							<Results
								resource={resource}
								resourceId={resourceId}
							/>
						</>
					}
				/>
			</Routes>
		</div>
	);
}

export default App;
