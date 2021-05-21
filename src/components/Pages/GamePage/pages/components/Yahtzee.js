import React, { Fragment } from 'react';
import cn from 'classnames';
import { isMobile } from 'react-device-detect';

import TitleInfo from '../../components/TitleInfo/TitleInfo';
import Video from '../../components/Video/Video';
import BigImage from '../../components/BigImage/BigImage';
import Thumbnails from '../../components/Thumbnails/Thumbnails';
import styles from './styles.module.css';

const Yahtzee = (props) => {

	// const thumbnails = [
	// 	{image: '1tpcrw_i62OiMep9nhMSnmsNzZQv7UJkK', text: 'The pick-up orb'}, //0 CoinSphere
	// 	{image: '1Xg9tGIHBN1QXJHky1o-K_jCITUgEiRJH', text: 'An enemy orb'}, //1 EnemySphere
	// 	{image: '1fvm4Q1bcTzR6e_w2tnIeaznzKZK6bakI', text: 'A button body'} //2 Button
	// ];

  return (
		<Fragment>
			{/* <Banner googleId={"1_aY98Lk6FHivqEKBSv92O42_9QT4LgGT"} /> */}
			<div className={cn(styles.mainContent, { [styles.mobileContent]: isMobile })}>
				<TitleInfo title={"YAHTZEE® With Buddies!: Scopely (2020-now)"} />

				<Video videoId={"g3LxgUGTDqE"} />

				<p>
				I am currently working on Scopely's Dice franchise as a senior ingame artist, producing game art for the games
				<em>YAHTZEE® with Buddies!</em>, <em>Dice™ With Buddies</em> and <em>Dice with Ellen</em>.
				</p>
			</div>
		</Fragment>
	)
}

export default Yahtzee;
