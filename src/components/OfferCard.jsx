import React from "react";

import "./OfferCard.css";

function OfferCard({ title, icon, description }) {
	return (
		<div className='feature'>
			<img src={icon} alt='Icon' />
			<div className='content'>
				<h3>{title}</h3>
				<p>{description}</p>
			</div>
		</div>
	);
}

export default OfferCard;
