import React from "react";

import "./YouTubeButton.css";

function YouTubeButton({ text, background, color }) {
	return (
		<button
			className='youtube-button'
			style={{ background: background, color: color }}>
			{text}
		</button>
	);
}

export default YouTubeButton;
