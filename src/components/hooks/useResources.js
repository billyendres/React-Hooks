import { useState, useEffect } from "react";
import axios from "axios";

const useResources = resource => {
	const [resources, setResources] = useState([]);

	//Similar to componentDidUpdate, stops rerender if state is the same
	useEffect(() => {
		(async resource => {
			const response = await axios.get(
				`https://jsonplaceholder.typicode.com/${resource}`
			);

			setResources(response.data);
		})(resource);
	}, [resource]);
	return resources;
};

export default useResources;
