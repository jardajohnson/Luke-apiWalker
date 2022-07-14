import { Routes, Route, Link } from 'react-router-dom';
import { useParams, useNavigate } from 'react-router';

function App() {
	return (
		<div>
			<Routes>
				<Route path='/' element={<Search />} />
				<Route
					path='/:collection/:id'
					element={
						<>
							<Search />
							<Collection />
						</>
					}
				/>
			</Routes>
		</div>
	);
}

export default App;
