import React from "react";

import "./Pricing.css";
import PricingButton from "../../components/PricingButton";
import PricingCard from "../../components/PricingCard";

function Pricing() {
	const plans = [
		{
			planName: "Basic",
			storage: "500 GB",
			email: "2 Email",
			domain: "1 Domain",
			support: "24/7 Support",
			price: 19.99,
		},
		{
			planName: "Premium",
			storage: "1 TB",
			email: "5 Email",
			domain: "3 Domain",
			support: "24/7 Support",
			price: 29.99,
		},
		{
			planName: "Advanced",
			storage: "2 TB",
			email: "10 Email",
			domain: "5 Domain",
			support: "24/7 Support",
			price: 39.99,
		},
	];

	return (
		<div className='pricing'>
			{plans.map((plan, index) => (
				<PricingCard key={index} {...plan} />
			))}
		</div>
	);
}

export default Pricing;
