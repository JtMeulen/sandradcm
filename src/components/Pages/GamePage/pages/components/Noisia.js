import React, { Fragment } from 'react';
import cn from 'classnames';
import { isMobile } from 'react-device-detect';

import TitleInfo from '../../components/TitleInfo/TitleInfo';
import Video from '../../components/Video/Video';
import BigImage from '../../components/BigImage/BigImage';
import Thumbnails from '../../components/Thumbnails/Thumbnails';
import styles from './styles.module.css';

const Noisia = (props) => {

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

	const FLAVOUR = <a href="https://www.flavour.nl/" target="_blank" rel="noopener noreferrer">Flavour</a>;

  return (
		<Fragment>
			{/* <Banner googleId={"1_aY98Lk6FHivqEKBSv92O42_9QT4LgGT"} /> */}
			<div className={cn(styles.mainContent, { [styles.mobileContent]: isMobile })}>
				<TitleInfo title={"Noisia: Infection"} />
				<p>
					<strong>Golden SpinAward 2010-2011:</strong> Best Gaming Concept
				</p>
				<p>
					<strong>Nomination: Dutch Game Awards:</strong> Best Online Game
				</p>
				<Video videoId={"wcYFShfyNao"} />
				<p>
					<em>Noisia Infection</em> is a game I worked on during my 2009-2010 internship at {FLAVOUR}.
					Dutch electronic music trio Noisia worked together with the company to promote the release of their ‘Split the Atom’ album.
				</p>
				<BigImage googleId={"1JQJ8pMg2g3vLmybBbu7PdH405TDjhK2X"} />
				<p>
					The player has to shoot enemies in accordance to the beat in the world of an album track. The better your rhythm, the higher you score.
				</p>
				<BigImage googleId={"1JQJ8pMg2g3vLmybBbu7PdH405TDjhK2X"} />
				<BigImage googleId={"1JQJ8pMg2g3vLmybBbu7PdH405TDjhK2X"} />
				<p>
					During the levels, the soundtrack shifts gears and becomes more complex. The movement of the music lines changes and new lines give players an opportunity to navigate between them.
					<br /><br />
					Successfully finishing the tracks brings you to Boss fights – end battles set to a Noisia remix by other famous artists.
				</p>
				<Thumbnails thumbnails={thumbnails} positions={[7,8]}/>
				<p>
					I helped set the tone for the gritty interface structure and the environmental atmosphere. I also worked on theme worlds and game assets,
					such as the Jungle environment and the Canine Cannons shown above.
					<br /><br />
					I gained experience in producing for long-running projects and with client communication, as the band was very involved in the process.
					<br /><br />
					Noisia Infection won the Golden SpinAward for Best Gaming Concept during the SpinAwards of 2010-2011. It was also one of the three nominees for the 2010 Dutch Game Award: Best Online Game.
				</p>
				<Thumbnails thumbnails={thumbnails} positions={[9,10,11]}/>
				<Video videoId={"wJcbFw6u22s"} />
			</div>
		</Fragment>
		)
	}

  export default Noisia;
