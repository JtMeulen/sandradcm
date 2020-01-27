import React, { Fragment } from 'react';
import cn from 'classnames';
import { isMobile } from 'react-device-detect';

import TitleInfo from '../../components/TitleInfo/TitleInfo';
import BigImage from '../../components/BigImage/BigImage';
import Thumbnails from '../../components/Thumbnails/Thumbnails';
import styles from './styles.module.css';

const MeldkamerControl = (props) => {

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
				<TitleInfo title={"Veiligheids- en Gezondheidsregio Gelderland-Midden: Meldkamer Control"} />
				<p>
					<strong>Dutch Society for Simulation in Health:</strong> Quality Label for Valid Games
				</p>
				<p>
					In my time by {FLAVOUR}, we created <em>Meldkamer Control</em>: a game that teaches control room personnel proper ambulance dispatch techniques.
					<br /><br />
					<em>Meldkamer Control</em> is currently in use by the Dutch region Gelderland-Midden to train their dispatchers without endangering human lives.
				</p>
				<BigImage googleId={"1w5HxnB7EylZFFjnujA-OGt4XN28zMZlV"} />
				<BigImage googleId={"1JQJ8pMg2g3vLmybBbu7PdH405TDjhK2X"} />
				<p>
					<em>Meldkamer Control</em> is a supplement to the training of these dispatchers. Players need to handle realistic emergency situations through various levels of difficulty, all taking place in real time.
				</p>
				<Thumbnails thumbnails={thumbnails} positions={[0,1,2]}/>
				<p>
					They are trained in interpreting reports, sustain proper ambulance coverage and execute the logistics of controlling a number of ambulances at once.
					<br /><br />
					At the same time, they are challenged to unlock new levels, raise their status and challenge each other.
				</p>
				<Thumbnails thumbnails={thumbnails} positions={[3,4,5,6]}/>
				<p>
					Visually, I had to replicate the existing dispatch software and alter it for gamification, while at the same time closing the visual gap with the real system as much as possible.
					Visual similarity proved to enable the trainees to apply their newly found skills to the actual job more easily.
					<br /><br />
					There was more wiggle room with the general interface, but the look of it still had to remain clean and non-distracting.
				</p>
				<Thumbnails thumbnails={thumbnails} positions={[7,8]}/>
				<p>
					As quoted by Piet-Hein ten Hacken, head of Control Room Consultation in the Netherlands:
				</p>
				<p style={{textAlign: 'center', fontSize: '24px'}}>
					<strong>
						“Control room Gelderland Midden had the wish to develop a tool to monitor, improve and uniformly execute the dispatch process at the control room. In 2013 we came into contact with Flavour.
						Their professional appearance, enthousiasm and knowledge encouraged us to research the possibility of a ‘control room game’. And so it happened!”
					</strong>
				</p>
				<BigImage googleId={"1JQJ8pMg2g3vLmybBbu7PdH405TDjhK2X"} />
				<Thumbnails thumbnails={thumbnails} positions={[9,10,11]}/>
			</div>
		</Fragment>
		)
	}

  export default MeldkamerControl;
