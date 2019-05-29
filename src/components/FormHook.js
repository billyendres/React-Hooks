import React, { useState } from "react";

const FormHook = () => {
	const [email, setEmail] = useState("");
	return (
		<div>
			<h1>The Value of the state is...{email}</h1>
			<input
				type="text"
				value={email}
				onChange={evt => setEmail(evt.target.value)}
			/>
			<button onClick={() => setEmail("")}>Reset State</button>
		</div>
	);
};

export default FormHook;
