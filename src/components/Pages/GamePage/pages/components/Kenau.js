import React, { Fragment } from 'react';
import cn from 'classnames';
import { isMobile } from 'react-device-detect';

import TitleInfo from '../../components/TitleInfo/TitleInfo';
import BigImage from '../../components/BigImage/BigImage';
import Thumbnails from '../../components/Thumbnails/Thumbnails';
import styles from './styles.module.css';

const Kenau = (props) => {

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
	const KENAU = <a href="https://www.imdb.com/title/tt2512170/" target="_blank" rel="noopener noreferrer">Kenau</a>;

  return (
		<Fragment>
			{/* <Banner googleId={"1_aY98Lk6FHivqEKBSv92O42_9QT4LgGT"} /> */}
			<div className={cn(styles.mainContent, { [styles.mobileContent]: isMobile })}>
				<TitleInfo title={"Plan Nederland: Kenau's Army Of Women"} />
				<p>
				In my time by {FLAVOUR}, I worked on a media campaign made possible by a massive collaboration of Dutch companies. Together with FuWorks, Spektor and Plan Nederland,
				Flavour realised <em>Kenau’s Army of Women</em>.
				<br /><br />
				{KENAU} is a Dutch film, released in 2014. This historic epic is a (both national and international) award-winning film about the Dutch legend Kenau Simonsdochter Hasselaer.
				<br /><br />
				Kenau, a ship builder and wood dealer, became famous in Dutch history for leading the resistance during the defending of Haarlem in the Dutch War of Independence (1568-1548).
				</p>
				<BigImage googleId={"1w5HxnB7EylZFFjnujA-OGt4XN28zMZlV"} />
				<p>
				The goal of the film’s accompanying media campaign was to mobilize women in an online female army and have them battle together for rights of girls in third world countries.
				<br /><br />
				Via social media, interactive trailers and an online game, hundreds of women played the game and collected money. The campaign gathered about €67,000 in six weeks
				time and reached around three million people.
				</p>
				<Thumbnails thumbnails={thumbnails} positions={[0,1,2]}/>
				<p>
				Flavour and myself were partly responsible for this concept and created the game in which women could occupy four parts of the world.
				<br /><br />
				By playing a Zumba-like ball shooting game, they could progress through levels – or buy them out via real life donations.
				<br /><br />
				I mainly worked on polishing individual assets, the interface and putting everything together technically in Flash and with the programmer.
				</p>
			</div>
		</Fragment>
		)
	}

  export default Kenau;
