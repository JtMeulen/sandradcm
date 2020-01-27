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
		{image: '15umXCjeAqxMNvb-9c5eQuhdblUf3bVYJ', text: ''}, //0
		{image: '1WVH_7N1jFcnzk2gUUuzn8CgqmGoPUdW-', text: ''}, //1
		{image: '1l8DTcNZfK4_pj_H-298_WZTgS4OPnuni', text: ''}, //2
		{image: '1cnz0nEGUQIZEGNj8FiKaHA28Nj2HmToe', text: ''}, //3
		{image: '1BnMhcDAh03aBYu3RVIGDVOhuIodhiLMN', text: ''}, //4
		{image: '14j3kwd9Keg7d6J6uxQEm7sa1w4sGlUIU', text: ''}, //5
		{image: '1-CW0XOuFIhXhSmFmrAml46htlGApDuUF', text: ''}, //6
		{image: '1rrcUJtPhomklDP0cCs1tv88v7CzIR4zh', text: ''}, //7
		{image: '1w-G52cun18JvaINjlOWzpZFVWD3SbaFU', text: ''}, //8
		{image: '1DN2mY56mo_Ftj5nATuUbCQpZW8lERjQW', text: ''}, //9
		{image: '11v9JOj4Zd0vqEffZ03V7C-jAHE8OZpA8', text: ''}, //10
		{image: '15zvuwBoyhSZCwzCtel03UayXnQ6Sfkvy', text: ''} //11
	];

	const TEAMREPTILE_URL = <a href="http://team-reptile.com/" target="_blank" rel="noopener noreferrer">Team Reptile</a>;
	const RESKIN_ALLNIGHTER = <a href="/games/allnighter">reskin the game for their cartoon ‘Regular Show’</a>;
	const DUTCH_GAME_GARDEN = <a href="https://www.dutchgamegarden.nl/" target="_blank" rel="noopener noreferrer">Dutch Game Garden</a>;

  return (
		<Fragment>
			{/* <Banner googleId={"1_aY98Lk6FHivqEKBSv92O42_9QT4LgGT"} /> */}
			<div className={cn(styles.mainContent, { [styles.mobileContent]: isMobile })}>
				<TitleInfo title={"Personal Collaboration: Lightwatch"} />
				<p>
					Lightwatch is a game developed by {TEAMREPTILE_URL} and myself of which most content, including my art, was created in 2011. The game went up
					for sale on FGL early 2012 and was later bought and distributed later by Armor Games.
				</p>
				<Video videoId={"sNJWeE3Fh0U"} />
				<BigImage googleId={"1w5HxnB7EylZFFjnujA-OGt4XN28zMZlV"} />
				<p>
					In <em>Lightwatch</em>, you play a captain sailing out to sea at night. By shooting stars with a harpoon, you gather stardust to fuel the lighthouse on shore.
				</p>
				<Thumbnails thumbnails={thumbnails} positions={[0,1,2]}/>
				<p>
					While doing this sailing, enemies such as seagulls, sharks, crabs and more aim for the poor captain and his stardust. If the lighthouse is filled,
					Rainbownus time grants the player higher scores.
					<br /><br />
					During daytime, the player enters an upgrade screen. There, players can trade their score for boosts in playing sessions.
				</p>
				<Thumbnails thumbnails={thumbnails} positions={[3,4,5,6]}/>
				<p>
					I visually designed <em>Lightwatch</em> entirely, creating all art assets in the process. Together with creating its structure and gameplay content,
					I also helped with testing and tweaking the game.
				</p>
				<Thumbnails thumbnails={thumbnails} positions={[7,8]}/>
				<p>
					<em>Lightwatch</em> featured at the {DUTCH_GAME_GARDEN} network lunch of March 7th, 2012. Team Reptile and myself were also asked by Cartoon Network to {RESKIN_ALLNIGHTER}.
				</p>
			</div>
		</Fragment>
		)
	}

  export default Lightwatch;
