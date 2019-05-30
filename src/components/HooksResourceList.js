import React from "react";
import useResources from "./hooks/useResources";

const HooksResourceList = ({ resource }) => {
	const resources = useResources(resource);
	return (
		<ul>
			{resources.map(record => (
				<li key={record.id}>{record.title}</li>
			))}
		</ul>
	);
};

export default HooksResourceList;
