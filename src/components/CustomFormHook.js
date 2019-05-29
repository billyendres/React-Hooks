import React from "react";
import initialVal from "./useFormState";

const CustomFormHook = () => {
	const [email, updateEmail, resetEmail] = initialVal("");
	return (
		<div>
			<h1>The Value is...{email}</h1>
			<input type="text" value={email} onChange={updateEmail} />
			<button onClick={resetEmail}>Reset</button>
		</div>
	);
};

export default CustomFormHook;
