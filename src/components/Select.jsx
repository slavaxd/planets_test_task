import React from 'react'

function Select({ sortArray }) {
	return (
		<>
			<label htmlFor="selectSort">Sort by:</label>
			<select id="selectSort" name="selectSort" onChange={(e) => sortArray(e.target.value)}>
				<option value="">None</option>
				<option value="distanceFromSunDesc">Distance from Sun(Desc)</option>
				<option value="equatorialRadiusDesc">Equatorial radius(Desc)</option>
				<option value="moonsDesc">Number of moons(Desc)</option>
				<option value="distanceFromSunAsc">Distance from Sun(Asc)</option>
				<option value="equatorialRadiusAsc">Equatorial radius(Asc)</option>
				<option value="moonsAsc">Number of moons(Asc)</option>
			</select>
		</>
	)
}

export default Select