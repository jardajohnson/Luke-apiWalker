import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Results = ({ resource, resourceId }) => {
	const [response, setResponse] = useState([]);

	useEffect(() => {
		axios
			.get(`https://swapi.dev/api/${resource}/${resourceId}`)
			.then((res) => setResponse(res.data))
			.catch((error) => {
				console.log(error);
			});
	}, [resourceId, resource]);
	
	return resource === 'people' ? (
		<div>
			<h1>--{resource}--</h1>
			<h1>{response.name}</h1>
			<ul>
				<li>Height: {response.height}</li>
				<li>Mass: {response.mass}</li>
				<li>Hair color: {response['hair_color']}</li>
				<li>Skin color: {response['skin_color']}</li>
			</ul>
		</div>
	) : (
		<div>
			<h1>--{resource}--</h1>
			<h1>{response.name}</h1>
			<ul>
				<li>Height: {response.climate}</li>
				<li>Mass: {response.terrain}</li>
				<li>Hair color: {response['surface_water']}</li>
				<li>Skin color: {response.population}</li>
			</ul>
		</div>
	);
};

export default Results;
