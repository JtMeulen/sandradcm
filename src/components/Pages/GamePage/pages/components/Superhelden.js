import React, { Fragment } from 'react';
import cn from 'classnames';
import { isMobile } from 'react-device-detect';

import TitleInfo from '../../components/TitleInfo/TitleInfo';
import BigImage from '../../components/BigImage/BigImage';
import Thumbnails from '../../components/Thumbnails/Thumbnails';
import styles from './styles.module.css';

const Superhelden = (props) => {

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
				<TitleInfo title={"Ziggo: Superheldenspel"} />
				<p>
					In my time working by {FLAVOUR}, we created an educative game together with Brand New Game for the personnel of Ziggo, the largest cable operator in the Netherlands.
				</p>
				<BigImage googleId={"1w5HxnB7EylZFFjnujA-OGt4XN28zMZlV"} />
				<p>
					A flyer and cursus didn’t help Ziggo to teach their regulatory compliance and security rules to all of their staff. <em>Superheldenspel</em> (Super Hero Game) aimed to
					help this effort – and succeeded.
					<br /><br />
					<em>Superheldenspel</em> is an exciting battle between colleagues and internal departments. In several mini quizzes, grid games and animated problematic scenarios,
					players are challenged to learn all about Ziggo’s regulatory compliance.
				</p>
				<Thumbnails thumbnails={thumbnails} positions={[0,1,2]}/>
				<p>
					The generated player data gave Ziggo’s management insight in their staff’s compliance knowledge. The extra motivation, mainly due to the battle element of the game, improved these statistics.
					<br /><br />
					I created several of the quiz interface elements, such as the menu shown above, and various scenario panels as well.
				</p>
				<Thumbnails thumbnails={thumbnails} positions={[3,4,5,6]}/>
			</div>
		</Fragment>
		)
	}

  export default Superhelden;
