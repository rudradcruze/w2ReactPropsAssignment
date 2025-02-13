import React from "react";

import "./ProfileCard.css";

function ProfileCard({ imageUrl, name, position, bio, contactNumber }) {
	return (
		<div className='card'>
			<div className='card-header'>
				<img src={imageUrl} alt={name} />
			</div>
			<div className='card-body'>
				<h2>{name}</h2>
				<p className='designation'>{position}</p>
				<p>{bio}</p>
			</div>
			<div className='card-footer'>
				<a href={"tel:" + contactNumber}>Contact</a>
			</div>
		</div>
	);
}

export default ProfileCard;
