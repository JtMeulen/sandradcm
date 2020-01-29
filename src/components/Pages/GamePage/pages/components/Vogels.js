import React, { Fragment } from 'react';
import cn from 'classnames';
import { isMobile } from 'react-device-detect';

import TitleInfo from '../../components/TitleInfo/TitleInfo';
import BigImage from '../../components/BigImage/BigImage';
import Thumbnails from '../../components/Thumbnails/Thumbnails';
import styles from './styles.module.css';

const Vogels = (props) => {

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

const FOCAL_MEDITECH = <a href="http://www.focalmeditech.nl/" target="_blank" rel="noopener noreferrer">FOCAL Meditech</a>;
const VIMEO = <a href="https://vimeo.com/12113337" target="_blank" rel="noopener noreferrer">here</a>;
const JURY_REPORT = <a href="https://scienceguide.nl/media/585026/jury%20report%20for%20the%20wozzie%20award%202010.pdf" target="_blank" rel="noopener noreferrer">view</a>;

  return (
		<Fragment>
			{/* <Banner googleId={"1_aY98Lk6FHivqEKBSv92O42_9QT4LgGT"} /> */}
			<div className={cn(styles.mainContent, { [styles.mobileContent]: isMobile })}>
				<TitleInfo title={"Cartoon Network: All Nighter"} />
				<p>
					<strong>Dutch Game Awards 2010:</strong> Special Award<br />
					<strong>Festival of Games 2010:</strong> Best of Show Award<br />
					<strong>Virtual Platform 2010-2011:</strong> Best of Practice
					<br /><br />
					Nominations:<br />
					<strong>Wozzie Award 2010</strong><br />
					<strong>Dutch Game Awards 2010:</strong> Best Student Game<br />
					<strong>Dutch Game Awards 2010:</strong> Best Serious Game
				</p>
				<BigImage googleId={"1w5HxnB7EylZFFjnujA-OGt4XN28zMZlV"} />
				<p>
					<em>Vogels!</em> is a rehabilitation game that helps patients with hemiplegia recover. It is a third-year, three month Utrecht School of the Arts project commissioned by {FOCAL_MEDITECH},
					on which I worked with six other students.
				</p>
				<BigImage googleId={"1w5HxnB7EylZFFjnujA-OGt4XN28zMZlV"} />
				<p>
					The game, or rather the red bird in it, is controlled by FOCAL’s dynamic arm support TOP/HELP, of which its position is tracked with a webcam and copied ingame.
					<br /><br />
					For each new game, the patient calibrates the game to fit the level of impairment of the patient.
				</p>
				<BigImage googleId={"1w5HxnB7EylZFFjnujA-OGt4XN28zMZlV"} />
				<BigImage googleId={"1w5HxnB7EylZFFjnujA-OGt4XN28zMZlV"} />
				<p>
					In-game, the patient flies, following a path, through various parts of the world and collecting birds, as can be seen {VIMEO}.
					<br /><br />
					My main role was of the 2D lead, concept and texture artist. I also contributed to the game design. Both this and the visual layer of the game
					faced the challenge of having to remain straightforward and simple, as our target audience was prone to confusion.
					<br /><br />
					The characters and environment also had to enable immersion by being recognizable, but still more exciting ans vibrant than real life.
				</p>
				<Thumbnails thumbnails={thumbnails} positions={[7,8]} height={248} marginBottom={0} />
				<p>
					Above are concept sketches for different environments to guide players through. Below, ideas for birds fitting these environments.
					<br /><br />
					The main character faced the challenge of having to contrast with the environment and be as compact as possible, to better keep the attention of our players.
				</p>
				<Thumbnails thumbnails={thumbnails} positions={[7,8]} height={248} marginBottom={0} />
				<p>
					By my designs and style guides, the world and character modelling was then done by teammates Ronald Houtermans and Tim Remmers.
				</p>
				<Thumbnails thumbnails={thumbnails} positions={[9,10,11]} height={248} marginBottom={0} />
				<p>
					<em>Vogels!</em> and its entire installation was featured on behalf of iZovator and Indigo at Game in the City 2010, as well as iZovator’s Cross Care Café 2010,
					Support 2010 and the Festival of Games 2010, where it won the Diamond Trophy for being voted Best of Show.
				</p>
				<Thumbnails thumbnails={thumbnails} positions={[9,10,11]} height={248} marginBottom={0} />
				<p>
					Next to winning and being nominated for Dutch prizes, <em>Vogels!</em> was one of the final three nominees for the prestigious Wozzie Award of 2010, named after and handed
					over by Steve Wozniak, co-founder of Apple. Click to {JURY_REPORT} the official jury report online.
					<br /><br />
					<em>Vogels!</em> was also invited to the FILE festival of 2011 in Rio de Janeiro.
				</p>
				<BigImage googleId={"1w5HxnB7EylZFFjnujA-OGt4XN28zMZlV"} />
				<BigImage googleId={"1w5HxnB7EylZFFjnujA-OGt4XN28zMZlV"} />
				<p>
					<em>Vogels!</em> now serves as a proof of concept for FOCAL. Documentation created during the project was handed over to them.
					<br /><br />
					By using and demonstrating this product they are improving their research into more pleasant and effective ways of rehabilitation.
				</p>
			</div>
		</Fragment>
		)
	}

  export default Vogels;
