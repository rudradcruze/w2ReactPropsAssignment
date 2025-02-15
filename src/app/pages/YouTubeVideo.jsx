import React from "react";

import "./YouTubeVideo.css";
import YouTubeVideoCard from "../../components/YouTubeVideoCard";
import YouTubeButton from "../../components/YouTubeButton";

function YouTubeVideo() {
	const videoList = [
		{
			title: "M4 Mac Mini vs Intel and AMD Flagships – It's Not Even Close!",
			src: "https://www.youtube.com/embed/8Uuu046EE28?si=L7jjIucmaqYbB6E1&amp;controls=0",
			views: "593K views",
			date: "3 months ago",
		},
		{
			src: "https://www.youtube.com/embed/pxhkDaKzBaY?si=taeuIJZrNjtxgk7C&amp;controls=0",
			title: "The EASIEST Way to Fine-Tune a LLM and Use It With Ollama",
			views: "308K views",
			date: "5 months ago",
		},
		{
			title: "I spent 400+ hours in Cursor, here’s what I learned",
			src: "https://www.youtube.com/embed/gYLNxUxVomY?si=F_T9E88JVE_CCkyH&amp;controls=0",
			views: "80K views",
			date: "4 weeks ago",
		},
		{
			title: "Free Unlimited Custom Domain Email Addresses with Gmail and Cloudflare.",
			src: "https://www.youtube.com/embed/NmXWA08ly_s?si=1qvS8CWFOv3k4mFT&amp;controls=0",
			views: "123K views",
			date: "5 months ago",
		},
		{
			title: "How to use Cursor AI build & deploy production app in 20 mins",
			src: "https://www.youtube.com/embed/bAAbrhb3QoM?si=0lUkSEqKlaUucINU&amp;controls=0",
			views: "171K views",
			date: "5 months ago",
		},
		{
			title: "Deepseek R1 671b Running LOCAL AI LLM is a ChatGPT Killer!",
			src: "https://www.youtube.com/embed/yFKOOK6qqT8?si=0EBnI9lyDyo7vFh9&amp;controls=0",
			views: "515K views",
			date: "2 weeks ago",
		},
		{
			title: "GitHub Student Pack: 10 Best Free Offers You Must Use! (2025)",
			src: "https://www.youtube.com/embed/tCY-pD8Q1x8?si=aqxakWVzhUMONu6F&amp;controls=0",
			views: "4.8K views",
			date: "9 days ago",
		},
		{
			title: "Cool Tech you Won't Regret Buying",
			src: "https://www.youtube.com/embed/Pptfy37jBN4?si=CO_ZauAW8f7x9W8u&amp;controls=0",
			views: "545K views",
			date: "1 month ago",
		},
		{
			title: "I Turned my Linux into MacOS",
			src: "https://www.youtube.com/embed/dsOZIO3iZmc?si=mTyei2YwzujIHJzW&amp;controls=0",
			views: "53K views",
			date: "1 month ago",
		},
	];

	return (
		<section className='youtube-video'>
			<div className='buttons'>
				<YouTubeButton
					text='Recently Updated'
					background='#000'
					color='#fff'
				/>
				<YouTubeButton
					text='Popular'
					background='lightgray'
					color='#000'
				/>
			</div>
			<div className='video-list'>
				{videoList.map((video) => (
					<YouTubeVideoCard key={video.src} {...video} />
				))}
			</div>
		</section>
	);
}

export default YouTubeVideo;
