import React, { Fragment } from 'react';
import cn from 'classnames';
import { isMobile } from 'react-device-detect';

import TitleInfo from '../../components/TitleInfo/TitleInfo';
import BigImage from '../../components/BigImage/BigImage';
import Thumbnails from '../../components/Thumbnails/Thumbnails';
import styles from './styles.module.css';

const Mediamasters = (props) => {

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
				<TitleInfo title={"Mediawijzer.net: MediaMasters 2012 / 2013 / 2014"} />
				<p>
					<strong>Evens Foundation:</strong> Evens Prize for Media Education
				</p>
				<p>
					In my time by {FLAVOUR}, I worked on the 2012, 2013 and 2014 editions of , which was played by about 121,000 schoolchildren in the Netherlands.
					<br /><br />
					<em>MediaMasters</em> is a media- focused game- and campaign which teaches children about all kinds of media, from newspapers to social, and how to interpret it well and handle it safely.
					<br /><br />
					Flavour produces it annually together with Mediawijzer.net, NTR, the Issuemakers, Bleck and the Dutch Institute for Audiovisuals. It was rewarded in 2015 with the fourth
					Evens Prize for Media Education at the Media Meets Literacy festival in Poland.
					<br /><br />
					Every year, the game challenges schoolchildren throughout the Netherlands with a media mystery story line they have to solve in the course of a week, dubbed ‘the week of Media Wisdom’.
				</p>
				<Thumbnails thumbnails={thumbnails} positions={[0,1,2]} height={248} marginBottom={0} />
				<p>
					Classes play together on the digital school board, online via social media, in libraries and at home to earn theirclass points.
					<br /><br />
					These points boost them in the quiz on the finale day, which all classes in the Netherlands take simultaneously. The class solving the mystery and the quiz first and best, wins the battle.
				</p>
				<Thumbnails thumbnails={thumbnails} positions={[3,4,5,6]} height={248} marginBottom={0} />
				<p>
					For the 2012 version, I created characters based on the actors in the videos guiding the children through the course material.
				</p>
				<Thumbnails thumbnails={thumbnails} positions={[7,8]} height={248} marginBottom={0} />
				<p>
					For the 2013 edition, I created characters for the new actors again, but also designed and produced the entire 2D interface of the game; mainly background screens for pop-ups and, of course, buttons.
					<br /><br />
					This interface was reused in 2014.
				</p>
				<Thumbnails thumbnails={thumbnails} positions={[9,10,11]} height={248} marginBottom={0} />
				<BigImage googleId={"1w5HxnB7EylZFFjnujA-OGt4XN28zMZlV"} />
			</div>
		</Fragment>
		)
	}

  export default Mediamasters;
