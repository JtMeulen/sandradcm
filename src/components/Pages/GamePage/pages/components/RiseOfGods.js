import React, { Fragment } from 'react';
import cn from 'classnames';
import { isMobile } from 'react-device-detect';

import TitleInfo from '../../components/TitleInfo/TitleInfo';
import Video from '../../components/Video/Video';
import BigImage from '../../components/BigImage/BigImage';
import Thumbnails from '../../components/Thumbnails/Thumbnails';
import styles from './styles.module.css';

const RiseOfGods = (props) => {

	const thumbnails = [
		{image: '10qV8Uv0-mwE27CzLTWhClcO4uzMfR6pA', text: 'Hadrian is the Discipple of the Aggressive playing style'}, //0
		{image: '1CooJBQkYV06fW_j0MAM07j6SMF-vb90O', text: 'Messina is the Discipple of the Adaptive playing style'}, //1
		{image: '15vW8VZfpbEyNCG8sNu0XNHa3IQ-YVzKZ', text: 'Balint is the Discipple of the Defensive playing style'}, //2
		{image: '1ykTcQjisNjD7ZrRH-PjfSxzz89eIYMQ6', text: 'Example of a fully finished Warrior Card'}, //3
		{image: '1jt8uy2f7U00oLC5T4WCEZGVKQ7TwhvXJ', text: 'Example of a fully finished Ability Card'}, //4
		{image: '1nZ2g2PpopxF4QokAtJA2bkai1UvWgMtl', text: 'Example of the back of the cards'} //5
		
		];

	const VIMEO = <a href="https://vimeo.com/28084954" target="_blank" rel="noopener noreferrer">here</a>;

  return (
		<Fragment>
			{/* <Banner googleId={"1_aY98Lk6FHivqEKBSv92O42_9QT4LgGT"} /> */}
			<div className={cn(styles.mainContent, { [styles.mobileContent]: isMobile })}>
				<TitleInfo title={"Student Project: Analogue Experience (2011)"} />
				<p>
					<em>Analogue Experience</em> is the title of my 2011 graduation project at Utrecht School of the Arts. It is a visual concept for a collectible card game
					designed by fellow graduates Niels Hansum and Jasper Saaltink.
					<br /><br />
					‘Ascendance: Rise of Gods’ is tournament-based and allows players to create personalized card decks. One player battles another with this deck in a playing style of their preference.
					<br /><br />
					A video on Vimeo containing all card graphics and the accompanying playing book can be found {VIMEO}!
				</p>
				<Thumbnails thumbnails={thumbnails} positions={[3,4,5]} height={248} marginBottom={0} />
				<p>
					For both the book and the cards I made elaborate conceptual illustrations, based on lore of a universe I created myself. This universe is perishing under the influence of a fallen God,
					of which its three Disciples now battle to take its place.
				</p>
				<BigImage googleId={"1vlLEaYbIlCEcS-NWG8wrNzJ7Uk-Bw0H6"} text={"Icons for the aggressive, adaptive and defensive playing style"} />
				<p>
					The visual design revolves around creatures inhabiting this world and the abilities they can perform. Next to the three God cards, I developed eighteen creature cards and
					25 ability cards. These Warriors and their abilities were divided in the different playing styles.
				</p>
				<Thumbnails thumbnails={thumbnails} positions={[0,1,2]} height={248} marginBottom={0} />
				<p>
					Due to time constraints and the experimental nature of the project, most cards were sketched and served as prototypes.
					The interface of the cards and the (purposely neutral) Ability cards were fully finished. <br />
					The bottom decorations of the Warrior cards line up with the top of the Ability cards when they are put in formation on the table.
				</p>
				<BigImage googleId={"1Nriz8UCJJqJF-7MwZqSGgh6kir4vvdyi"} text={"Sketches of three out of eighteen Warriors"} />
				<p>
					The project also features a customized player mat on which players place their cards. It functions simultaneously as a health bar during battle, clarifying
					in-game progress and enabling the player to immerse in the session more easily.
					<br /><br />
					Props like these, which aid the analogue battle, are rarely present on the table in mainstream card gaming sessions and were proven valuable additions to the player’s experience.
				</p>
				<BigImage googleId={"1Ej1InBV3sIMR91WqTNsdiVTNgT-fZOB3"} text={"Four examples of the 25 abilities Warriors can perform"} />
				<p>
					‘Ascendance: Rise of Gods’ was presented at the 2011 graduation expo of Utrecht School of the Arts. It was an experiment on how to immerse players in gameplay
					and a game world via analogue art only. This case study was accompanied with a thesis.
					<br /><br />
					I aimed to empower the general gaming experience with this visual concept, mainly by incorporating the game design in the art. As a proof of concept, I included a
					custom playing-and-collecting book in the actual gaming session.
				</p>
				<BigImage googleId={"1fzK5JRcIMN9tmUu_9I1kpAl066-weyZP"} text={"Character sketches"} />
				</div>
		</Fragment>
		)
	}

  export default RiseOfGods;
