import React, { Fragment } from 'react';
import cn from 'classnames';
import { isMobile } from 'react-device-detect';

import TitleInfo from '../../components/TitleInfo/TitleInfo';
import Video from '../../components/Video/Video';
import BigImage from '../../components/BigImage/BigImage';
import Thumbnails from '../../components/Thumbnails/Thumbnails';
import styles from './styles.module.css';

const Catch22 = (props) => {

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

	const ROEL_BARTSTRA = <a href="https://www.linkedin.com/in/roelbartstra/" target="_blank" rel="noopener noreferrer">Roel Barstra</a>;

  return (
		<Fragment>
			{/* <Banner googleId={"1_aY98Lk6FHivqEKBSv92O42_9QT4LgGT"} /> */}
			<div className={cn(styles.mainContent, { [styles.mobileContent]: isMobile })}>
				<TitleInfo title={"Mango Down!: Catch-22"} />
				<p>
				Nomination: <strong>Casual Connect 2014 , IndiePrize:</strong> Best Innovative Game
				</p>
				<Video videoId={"cxMjkNp3YME"} />
				<BigImage googleId={"1w5HxnB7EylZFFjnujA-OGt4XN28zMZlV"} />
				<p>
				<em>Catch-22</em> is a one-button high-score game about the paradox of avoiding problems – while creating other problems instead.
				</p>
				<Thumbnails thumbnails={thumbnails} positions={[0,1,2]}/>
				<p>
				The goal of the game is to pick up orbs with the active player and to avoid the inactive player (who is your ghost). 
				<br /><br />
				If you collect all three orbs, you switch to the ghost and your previous self becomes the new ghost, repeating the actions you did before the switch. 
				This process is infinite until you crash into yourself.
				</p>
				<Thumbnails thumbnails={thumbnails} positions={[3,4,5,6]}/>
				<p>
				Catch-22 was created by team Mango Down!, winning the Global Gamejam 2012 Amsterdam, as well as ‘De Kleine Uil’ of the Global Game Jam 2012 – The Netherlands.
				<br /><br />
				They were a finalist in the SpinAwards of 2012 and selected for the PAX 10 and IndieCade Selection of 2012 as well.
				</p>
				<Thumbnails thumbnails={thumbnails} positions={[7,8]}/>
				<p>
				I worked on the version released for iOs in 2013, which would eventually be nominated for the IndiePrize at Casual Connect 2014: Best Innovative Game.
				<br /><br />
				I created the textures for all orbs and UI/menu designs and worked together with {ROEL_BARTSTRA} to implement the features in Unity, where I provided feedback on spherical effects.
				</p>
				<BigImage googleId={"1JQJ8pMg2g3vLmybBbu7PdH405TDjhK2X"} />
				<Thumbnails thumbnails={thumbnails} positions={[9,10,11]}/>
			</div>
		</Fragment>
		)
	}

  export default Catch22;
