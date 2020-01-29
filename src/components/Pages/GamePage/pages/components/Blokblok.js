import React, { Fragment } from 'react';
import cn from 'classnames';
import { isMobile } from 'react-device-detect';

import TitleInfo from '../../components/TitleInfo/TitleInfo';
import BigImage from '../../components/BigImage/BigImage';
import Thumbnails from '../../components/Thumbnails/Thumbnails';
import styles from './styles.module.css';

const Blokblok = (props) => {

	const thumbnails = [
		{image: '1XmDr9USLBW14zhN8ZHQ7-MXZAZnZaBOs', text: ''}, //0 BlokBlok
		{image: '1EZkp2Y8fXgvjsD-lcALtRWIEBihLiH67', text: ''}, //1 BlokBlok_Level
		{image: '1AJZqe-Bb_BPmbOR9LrKfqcyyUYzVMHfe', text: ''}, //2 BlokBlok_Winning
		{image: '1M0teYZS43jOvFGWe0QgY8-Hy7dFe2AIG', text: ''}, //3 BlokBlok_LevelComplete
		{image: '1_SSsKMqF0N9TnezOmQ6AN4duA31BWjTL', text: ''} //4 BlokBlok_Credits
	];

const TEAMREPTILE_URL = <a href="http://team-reptile.com/" target="_blank" rel="noopener noreferrer">Team Reptile</a>;
const BLOKBLOK = <a href="https://www.newgrounds.com/portal/view/590273" target="_blank" rel="noopener noreferrer">play for free</a>;

  return (
		<Fragment>
			{/* <Banner googleId={"1_aY98Lk6FHivqEKBSv92O42_9QT4LgGT"} /> */}
			<div className={cn(styles.mainContent, { [styles.mobileContent]: isMobile })}>
				<TitleInfo title={"Indie game: BlokBlok! (2011)"} />
				<p>
				<em>BlokBlok!</em> is a little puzzle game developed by current members of Team Reptile and myself in one week. I created the art in 2011 and it went online to {BLOKBLOK} in 2012.
				</p>
				<Thumbnails thumbnails={thumbnails} positions={[0,1]} height={248} marginBottom={0} />
				<p>
				In <em>BlokBlok!</em> you flip tiles in patterns to recreate an image by selecting your desired pattern and clicking.
				In the main menu, the player can select different levels to play. When a puzzle is solved, the next unlocks. The solving speed is rewarded with stars.
				</p>
				<BigImage googleId={"16GqwBvz01HftzevKI5eAkZh7vCkhogzu"} text={"The BlokBlok sprites"} />
				<p>
				I created a simple overview where a player can easily view this progress. I also created the BlokBloks; sprites which accompany the player in-game as a little extra.
				<br /><br />
				The design in general, however, remains strongly focused on gameplay and was simplified because of the time constraints.
				</p>
				<Thumbnails thumbnails={thumbnails} positions={[2,3,4]} height={248} marginBottom={0} />
				</div>
		</Fragment>
		)
	}

  export default Blokblok;
