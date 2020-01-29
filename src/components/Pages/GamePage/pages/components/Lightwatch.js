import React, { Fragment } from 'react';
import cn from 'classnames';
import { isMobile } from 'react-device-detect';

import TitleInfo from '../../components/TitleInfo/TitleInfo';
import Video from '../../components/Video/Video';
import BigImage from '../../components/BigImage/BigImage';
import Thumbnails from '../../components/Thumbnails/Thumbnails';
import styles from './styles.module.css';

const Lightwatch = (props) => {

	const thumbnails = [
		{image: '10w7IlzF8MjYWJk-s49SxM-8EpI_7v6GU', text: 'Enemies charging'}, //0
		{image: '1Sb8jQrBQjhEaMvBUXBF8EwIrAYVUzuy0', text: 'Rainbownus!'}, //1
		{image: '13bWqMEGZjubTFPSRQVyp0HMhQguCRLDt', text: 'A space narwhal upgrade'}, //2
		{image: '1LKu8ieI6Y184StZhXCbm8_fpgokSUVTS', text: 'The menu screen'}, //3
		{image: '1v7-xC-ggS4FKI18mzOnnhi7k2gNvlkh5', text: 'The high score screen'}, //4
		{image: '1nEIhoIQDR7a9GuliXVByv8M3ruS9O-f_', text: 'A glimpse of the final boss'} //5
	];

	const RESKIN_ALLNIGHTER = <a href="/games/allnighter" target="_blank">reskin the game for their cartoon ‘Regular Show’</a>;
	const DUTCH_GAME_GARDEN = <a href="https://www.dutchgamegarden.nl/" target="_blank" rel="noopener noreferrer">Dutch Game Garden</a>;

  return (
		<Fragment>
			{/* <Banner googleId={"1_aY98Lk6FHivqEKBSv92O42_9QT4LgGT"} /> */}
			<div className={cn(styles.mainContent, { [styles.mobileContent]: isMobile })}>
				<TitleInfo title={"Indie game: Lightwatch (2011)"} />
				<p>
					Lightwatch is a game developed by current members of Team Reptile and myself. Most content, including my art, was created in 2011.
					<br />
					The game went up for sale on FGL early 2012 and was later bought and distributed later by Armor Games.
				</p>
				<Video videoId={"sNJWeE3Fh0U"} />
				<p>
					In <em>Lightwatch</em>, you play a captain sailing out to sea at night. By shooting stars with a harpoon, you gather stardust to fuel the lighthouse on shore.
					<br />While doing this sailing, enemies such as seagulls, sharks, crabs and more aim for the poor captain and his stardust.
				</p>
				<BigImage googleId={"1PdNk7HnwEzB0ncBRBgvPTyfkH9Br7_8D"} text={"The tutorial screen"} />
				<p>
				If the lighthouse is filled, Rainbownus time grants the player higher scores.
				<br />During daytime, the player enters an upgrade screen. There, players can trade their score for boosts in playing sessions.
				</p>
				<Thumbnails thumbnails={thumbnails} positions={[0,1,2]} height={197} marginBottom={33} />
				<p>
					I visually designed <em>Lightwatch</em> entirely, creating all art assets in the process. Together with creating its structure and gameplay content,
					I also helped with testing and tweaking the game.
				</p>
				<Thumbnails thumbnails={thumbnails} positions={[3,4,5]} height={197} marginBottom={33} />
				<p>
					<em>Lightwatch</em> featured at the {DUTCH_GAME_GARDEN} network lunch of March 7th, 2012.
					<br />We were also asked by Cartoon Network to {RESKIN_ALLNIGHTER}.
				</p>
				<BigImage googleId={"19kADXJv81bJzJXukfgJ-k5FCtGAltHct"} />
			</div>
		</Fragment>
		)
	}

  export default Lightwatch;
