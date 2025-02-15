import React from "react";

import "./Button.css";

function Button({ text, icon }) {
	return (
		<button className='buttonFeatures'>
			{text}
			{icon && <img src={icon} alt='->' />}
		</button>
	);
}

export default Button;
