import React, { useState } from "react";
import ResourceList from "./ResourceList";
import HooksResourceList from "./HooksResourceList";
import UserList from "./UserList";

const App = () => {
	const [resource, setResource] = useState("posts");

	return (
		<div>
			<UserList />
			<div>
				<button onClick={() => setResource("posts")}>Posts</button>
				<button onClick={() => setResource("todos")}>Todos</button>
			</div>
			<h1>Class Based Component Level State</h1>
			<ResourceList resource={resource} />
			<h1>Hooks Functional State Management</h1>
			<HooksResourceList resource={resource} />
		</div>
	);
};

export default App;
