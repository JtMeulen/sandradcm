import React, { Fragment } from 'react';
import cn from 'classnames';
import { isMobile } from 'react-device-detect';

import TitleInfo from '../../components/TitleInfo/TitleInfo';
import BigImage from '../../components/BigImage/BigImage';
import Thumbnails from '../../components/Thumbnails/Thumbnails';
import styles from './styles.module.css';

const JellyReef = (props) => {

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

	const DUTCH_GAME_GARDEN = <a href="https://www.dutchgamegarden.nl/" target="_blank" rel="noopener noreferrer">Dutch Game Garden</a>;

  return (
		<Fragment>
			{/* <Banner googleId={"1_aY98Lk6FHivqEKBSv92O42_9QT4LgGT"} /> */}
			<div className={cn(styles.mainContent, { [styles.mobileContent]: isMobile })}>
				<TitleInfo title={"Student Project: The Jelly Reef"} />
				<p>
				Nomination: <strong>Cinekid 2012:</strong> New Media Award
				</p>
				<BigImage googleId={"1w5HxnB7EylZFFjnujA-OGt4XN28zMZlV"} />
				<p>
				<em>The Jelly Reef</em> is an entertainment game for the Microsoft Surface. It is a fourth-year Utrecht School of the Arts project commissioned by
				Ziggo and the Dutch Game Garden, on which I worked for four months with eight other students. <br />
				This game was stationed in the waiting area of the {DUTCH_GAME_GARDEN} building, a building filled with game developers office space,
				where it can be played by both visitors and residents.
				</p>
				<Thumbnails thumbnails={thumbnails} positions={[0,1,2]}/>
				<p>
				In <em>The Jelly Reef</em>, one or multiple players swipe across the touchscreen of the Surface with their fingers to guide as many jellyfish
				possible safely to the end of eight themed levels.
				<br/><br/>
				You can also use a Dutch Game Garden ‘tag’ – a 3D printed statue of their logo – to regroup your jellies when they
				drift too far apart, as well as display information about Dutch Game Garden residents.
				</p>
				<Thumbnails thumbnails={thumbnails} positions={[3,4,5,6]}/>
				<p>
				In-game text rotates to accommodate multiple players, or uses the Microsoft Surface’s ability to recognize finger orientation.
				Upon touch, text automatically turns into the direction of the player. All final art was made in a top down view and darker in color,
				due to the brightness of the Surface’s touchscreen.
				</p>
				<Thumbnails thumbnails={thumbnails} positions={[7,8]}/>
				<p>
				My role was of the lead, concept, character, environmental and UI artist. I created three themed worlds: the bright reefs for the easy mode,
				a pirate bay and other sunken ships for medium and as a finale, a sunken city – Dutch style!
				</p>
				<BigImage googleId={"1JQJ8pMg2g3vLmybBbu7PdH405TDjhK2X"} />
				<p>
				With the help of my own style guides, I coordinated my fellow artists (Sherida Halatoe, Tim Hengeveld, Bas Kersten and Tim Scheel) in making their designs for levels, line art and coloring.
				<br/><br/>
				Production-wise, I myself was in charge of characters, object design and assisted in coloring and polishing as well.
				</p>
				<Thumbnails thumbnails={thumbnails} positions={[9,10,11]}/>
				<p>
				Next to designing and painting these characters, objects and environments, I was also in charge of the general interface. I worked with a composer and sound
				designers for fitting audio and I assisted on project coordination as well.
				</p>
				<Thumbnails thumbnails={thumbnails} positions={[9,10,11]}/>
				<p>
				The first prototype was available for play at Game in the City 2010. The Jelly Reef was introduced to the Dutch Game Garden during its network lunch of March 2011.
				<br/><br/>
				A special demo of three levels was created to feature on the first presentation of the Microsoft Surface v2.0, which was exhibited at the Microsoft MIX 2011 in Las Vegas.
				</p>
				<BigImage googleId={"1JQJ8pMg2g3vLmybBbu7PdH405TDjhK2X"} />
				<p>
				The Jelly Reef was also showcased at Indigo 2011 and Cinekid 2011, the Netherlands, as it was nominated for their New Media Award.
				</p>
				<BigImage googleId={"1JQJ8pMg2g3vLmybBbu7PdH405TDjhK2X"} />
				<BigImage googleId={"1JQJ8pMg2g3vLmybBbu7PdH405TDjhK2X"} />
			</div>
		</Fragment>
		)
	}

  export default JellyReef;
