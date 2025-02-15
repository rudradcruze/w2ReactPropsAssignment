import React from "react";

import "./PricingCard.css";
import PricingButton from "./PricingButton";

function PricingCard({ planName, storage, email, domain, support, price }) {
	return (
		<div className='pricing-card'>
			<div className='plan'>
				<h2>{planName}</h2>
			</div>
			<ul>
				<li>{storage} Storage</li>
				<li>{email} Email</li>
				<li>{domain} Domain</li>
				<li>{support} Support</li>
			</ul>
			<div className='price'>
				<h2>${price}</h2>
				<p>per month</p>
			</div>
			<div className='signup'>
				<PricingButton text='Sign Up' />
			</div>
		</div>
	);
}

export default PricingCard;
