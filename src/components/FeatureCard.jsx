import React from "react";

import rightArrow from "../assets/arrow.svg";

import "./FeatureCard.css";
import Button from "./Button";

function FeatureCard({ title, description, icon, color }) {
	return (
		<div className='featureCard'>
			<div className='icon' style={{ backgroundColor: color }}>
				<img src={icon} alt='icon' />
			</div>
			<h3>{title}</h3>
			<p>{description}</p>

			<Button text='Learn more' icon={rightArrow} />
		</div>
	);
}

export default FeatureCard;
