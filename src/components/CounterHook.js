import React, { useState } from "react";

const CounterHook = () => {
	const [count, setCount] = useState(0);
	return (
		<div>
			<h1>Count is: {count} </h1>
			<button onClick={() => setCount(count + 1)}>Add 1</button>
		</div>
	);
};

export default CounterHook;
