import React from "react";

import "./Features.css";
import Button from "../../components/Button";

import rightArrow from "../../assets/arrow.svg";
import cloud from "../../assets/cloud.svg";
import FeatureCard from "../../components/FeatureCard";
import time from "../../assets/time.svg";
import question from "../../assets/question.svg";
import layer from "../../assets/layer.svg";
import cursor from "../../assets/cursor.svg";
import love from "../../assets/love.svg";
import arrowup from "../../assets/arrowup.svg";

function Features() {
	return (
		<section className='features'>
			<h2>Your user research Swis Army Knife</h2>
			<Button text='See all features' icon={rightArrow} />

			<div className='featureCards'>
				<FeatureCard
					title='Feature Title'
					description='Feature description goes here. This is a brief explanation of the feature.'
					icon={arrowup}
					color='skyblue'
				/>
				<FeatureCard
					title='Feature Title'
					description='Feature description goes here. This is a brief explanation of the feature.'
					icon={time}
					color='lightgreen'
				/>
				<FeatureCard
					title='Feature Title'
					description='Feature description goes here. This is a brief explanation of the feature.'
					icon={question}
					color='lightpink'
				/>
				<FeatureCard
					title='Feature Title'
					description='Feature description goes here. This is a brief explanation of the feature.'
					icon={layer}
					color='purple'
				/>
				<FeatureCard
					title='Feature Title'
					description='Feature description goes here. This is a brief explanation of the feature.'
					icon={cursor}
					color='lightblue'
				/>
				<FeatureCard
					title='Feature Title'
					description='Feature description goes here. This is a brief explanation of the feature.'
					icon={love}
					color='lightcoral'
				/>
			</div>
		</section>
	);
}

export default Features;
