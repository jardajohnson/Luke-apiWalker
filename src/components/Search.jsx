import React from 'react';

const Search = ({
	resource,
	setResource,
	setResourceId,
	resourceId,
	navigate,
}) => {
	const handleSubmit = (e) => {
		e.preventDefault();
		// const formResource = e.target.resource.value;
		// const formResourceId = e.target.resourceId.value;
		// setResource(formResource);
		// setResourceId(formResourceId);
		navigate(`/${resource}/${resourceId}`);
	};

	return (
		<form onSubmit={handleSubmit}>
			<div>
				<label htmlFor='resource'>Search For: </label>
				<select
					name='resource'
					id='resource'
					value={resource}
					onChange={(e) => setResource(e.target.value)}
				>
					<option value={null}>Select a table...</option>
					<option value='people'>People</option>
					<option value='planets'>Planets</option>
				</select>
			</div>
			<div>
				<label htmlFor='resourceId'>ID: </label>
				<input
					name='resourceId'
					type='number'
					onChange={(e) => setResourceId(e.target.value)}
					value={resourceId}
				/>
			</div>
			<button>Search</button>
		</form>
	);
};

export default Search;
