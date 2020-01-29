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
		{image: '1tpcrw_i62OiMep9nhMSnmsNzZQv7UJkK', text: 'The pick-up orb'}, //0 CoinSphere
		{image: '1Xg9tGIHBN1QXJHky1o-K_jCITUgEiRJH', text: 'An enemy orb'}, //1 EnemySphere
		{image: '1fvm4Q1bcTzR6e_w2tnIeaznzKZK6bakI', text: 'A button body'} //2 Button
	];

	const ROEL_BARTSTRA = <a href="https://www.linkedin.com/in/roelbartstra/" target="_blank" rel="noopener noreferrer">Roel Barstra</a>;

  return (
		<Fragment>
			{/* <Banner googleId={"1_aY98Lk6FHivqEKBSv92O42_9QT4LgGT"} /> */}
			<div className={cn(styles.mainContent, { [styles.mobileContent]: isMobile })}>
				<TitleInfo title={"Mango Down!: Catch-22 (2013)"} />
				<p>
				<strong>Nomination:</strong><br />
				Casual Connect 2014 , IndiePrize: <em>Best Innovative Game</em>
				</p>
				<Video videoId={"cxMjkNp3YME"} />
				<p>
				<em>Catch-22</em> is a one-button high-score game about the paradox of avoiding problems – while creating other problems instead.
				</p>
				<BigImage googleId={"17ZVGmGjcopa7IytzUTyFkqf9aQdYoLF_"} text={"In-game transition"} />
				<p>
				The goal of the game is to pick up orbs with the active player and to avoid the inactive player (who is your ghost). 
				<br /><br />
				If you collect all three orbs, you switch to the ghost and your previous self becomes the new ghost, repeating the actions you did before the switch. 
				This process is infinite until you crash into yourself.
				</p>
				<BigImage googleId={"1HhbXh-EHzvqmLxLrIpes_33CCvbf1YRX"} text={"In-game path forming"} />
				<p>
				I created the textures for all orbs and UI/menu designs and worked together with {ROEL_BARTSTRA} to implement the features in Unity, where I provided feedback on spherical effects.
				</p>
				<Thumbnails thumbnails={thumbnails} positions={[0,1,2]} height={256} marginBottom={33} />
				<p>
				Catch-22 was created by team Mango Down!, winning the Global Gamejam 2012 Amsterdam, as well as ‘De Kleine Uil’ of the Global Game Jam 2012 – The Netherlands.
				<br /><br />
				They were also a finalist in the SpinAwards of 2012 and selected for the PAX 10 and IndieCade Selection of 2012.
				</p>
				<BigImage googleId={"15cLbAEJVoS-yEcA8GlSAXcSTRzk9lppw"} text={"Player orb textures"} />
				<p>
				I worked on the version released for iOs in 2013, which would eventually be nominated for the IndiePrize at Casual Connect 2014: Best Innovative Game.
				</p>
			</div>
		</Fragment>
		)
	}

  export default Catch22;
