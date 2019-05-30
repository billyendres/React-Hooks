import React from "react";
import initialVal from "./hooks/useFormState";

const CustomFormHook = () => {
	const [email, updateEmail, resetEmail] = initialVal("");
	const [password, updatePassword, resetPassword] = initialVal("");
	return (
		<div>
			<h1 style={{ color: "blue" }}>Reuseable Custom Hook</h1>
			<h1>
				email is: {email} <br />
				Password is: {password}
			</h1>
			<input type="text" value={email} onChange={updateEmail} />
			<input type="text" value={password} onChange={updatePassword} />
			<br />
			<button onClick={resetEmail}>Reset Email</button>
			<button onClick={resetPassword}>Reset Password</button>
		</div>
	);
};

export default CustomFormHook;
