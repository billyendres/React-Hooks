import React, { useState } from "react";
import ResourceList from "./ResourceList";
import HooksResourceList from "./HooksResourceList";
import UserList from "./UserList";
import CounterHook from "./CounterHook";
import Toggle from "./Toggle";
import FormHook from "./FormHook";
import CustomFormHook from "./CustomFormHook";
import Swapi from "./Swapi";

const App = () => {
	const [resource, setResource] = useState("posts");

	return (
		<div>
			<Swapi />
			<CustomFormHook />
			<FormHook />
			<Toggle />
			<CounterHook />
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
