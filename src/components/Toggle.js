import React, { useState } from "react";

const Toggle = () => {
	const [toggle, setToggle] = useState("on");
	const [isHappy, setIsHappy] = useState(true);

	const toggleIsHappy = () => {
		setIsHappy(!isHappy);
	};
	return (
		<div>
			<h1>Toggle: {toggle}</h1>
			<button onClick={() => setToggle("on")}>On</button>
			<button onClick={() => setToggle("off")}>Off</button>
			<button onClick={toggleIsHappy}>{isHappy ? ":)" : ":("}</button>
		</div>
	);
};

export default Toggle;
