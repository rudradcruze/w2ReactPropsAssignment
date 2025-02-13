import React from "react";
import OfferCard from "../../components/OfferCard";
import starIcon from "../../assets/star.svg";
import accessibility from "../../assets/accessibility.svg";
import cloud from "../../assets/cloud.svg";
import blocks from "../../assets/blocks.svg";

import "./Offer.css";

function Offer() {
	return (
		<section className='offer-section'>
			<OfferCard
				icon={starIcon}
				title='The Latest and Greatest'
				description='Kits auto-update to the newest version of Font Awesome, so you can stop managing files and pushing code.'
			/>
			<OfferCard
				icon={accessibility}
				title='Auto-Accessibility & More'
				description='Automate your icons’ accessibility, control load timing, ensure Font Awesome Version 4 compatibility, and more.'
			/>
			<OfferCard
				icon={blocks}
				title='Super Simple Subsetting'
				description='Speed up your site with a super-lean, ultra-fast version of Font Awesome!'
			/>
			<OfferCard
				icon={cloud}
				title='Powered by Cloudflare'
				description='Font Awesome Kits are served using Cloudflare, so you know they’re secure, private, fast, and reliable.'
			/>
		</section>
	);
}

export default Offer;
