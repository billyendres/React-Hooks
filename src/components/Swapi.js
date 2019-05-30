import React, { useState, useEffect } from "react";
import axios from "axios";
const Swapi = () => {
	const [number, setNumber] = useState(1);
	const [movie, setMovie] = useState("");

	useEffect(() => {
		async function getData() {
			const result = await axios.get(`https://swapi.co/api/films/${number}/`);
			setMovie(result.data);
		}
		getData();
	}, [number]);

	return (
		<div>
			<h1>Pick A Star Wars Movie Movie</h1>
			<h1>{movie.opening_crawl}</h1>
			<h4>{movie.title}</h4>
			<select value={number} onChange={evt => setNumber(evt.target.value)}>
				<option value="1">1</option>
				<option value="2">2</option>
				<option value="3">3</option>
				<option value="4">4</option>
				<option value="5">5</option>
				<option value="6">6</option>
				<option value="7">7</option>
			</select>
		</div>
	);
};

export default Swapi;
