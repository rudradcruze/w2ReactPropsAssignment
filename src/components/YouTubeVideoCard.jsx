import React from "react";

import "./YouTubeVideoCard.css";

function YouTubeVideoCard({ title, src, views, date }) {
	return (
		<div className='youtube-card'>
			<iframe
				src={src}
				title='YouTube video player'
				allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
				referrerPolicy='strict-origin-when-cross-origin'
				allowFullScreen></iframe>
			<div className='youtube-card-info'>
				<h3>{title}</h3>
				<p>
					{views} • {date}
				</p>
			</div>
		</div>
	);
}

export default YouTubeVideoCard;
