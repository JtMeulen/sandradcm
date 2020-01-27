import React, { Fragment } from 'react';
import cn from 'classnames';
import { isMobile } from 'react-device-detect';

import TitleInfo from '../../components/TitleInfo/TitleInfo';
import BigImage from '../../components/BigImage/BigImage';
import Thumbnails from '../../components/Thumbnails/Thumbnails';
import styles from './styles.module.css';

const Blokblok = (props) => {

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

  return (
		<Fragment>
			{/* <Banner googleId={"1_aY98Lk6FHivqEKBSv92O42_9QT4LgGT"} /> */}
			<div className={cn(styles.mainContent, { [styles.mobileContent]: isMobile })}>
				<TitleInfo title={"Personal Collaboration: BlokBlok!"} />
				<p>
				BlokBlok! is a little puzzle game developed by {TEAMREPTILE_URL} in under a week, for which I created the art in 2011. It went online in 2012
				and can be played for free.
				</p>
				<BigImage googleId={"1w5HxnB7EylZFFjnujA-OGt4XN28zMZlV"} />
				<p>
				In BlokBlok! you flip tiles in patterns to recreate an image by selecting your desired pattern and clicking.
				In the main menu, the player can select different levels to play. When a puzzle is solved, the next unlocks. The solving speed is rewarded with stars.
				</p>
				<Thumbnails thumbnails={thumbnails} positions={[0,1,2]}/>
				<p>
				I created a simple overview where a player can easily view this progress. I also created the BlokBloks; sprites which accompany the player in-game as a little extra.
				<br /><br />
				The design in general, however, remains strongly focused on gameplay and was simplified because of the time constraints.
				</p>
				<Thumbnails thumbnails={thumbnails} positions={[3,4,5,6]}/>
				<BigImage googleId={"1JQJ8pMg2g3vLmybBbu7PdH405TDjhK2X"} />
			</div>
		</Fragment>
		)
	}

  export default Blokblok;
