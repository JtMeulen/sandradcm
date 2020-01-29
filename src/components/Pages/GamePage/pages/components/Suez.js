import React, { Fragment } from 'react';
import cn from 'classnames';
import { isMobile } from 'react-device-detect';

import TitleInfo from '../../components/TitleInfo/TitleInfo';
import BigImage from '../../components/BigImage/BigImage';
import styles from './styles.module.css';

const Suez = (props) => {

	const FLAVOUR = <a href="https://www.flavour.nl/" target="_blank" rel="noopener noreferrer">Flavour</a>;

  return (
		<Fragment>
			{/* <Banner googleId={"1_aY98Lk6FHivqEKBSv92O42_9QT4LgGT"} /> */}
			<div className={cn(styles.mainContent, { [styles.mobileContent]: isMobile })}>
				<TitleInfo title={"GDF Suez: Watt Game (2014)"} />
				<p>
					In my time with {FLAVOUR}, I did the art for the Watt Game, a bubble shooter gamifying the campaign for clean energy by GDF Suez and Electrabel in 2014.
				</p>
				<BigImage googleId={"1_qXgItr_i9AkqPhYF9n1mHc-7CbH3VfF"} text={"Unused 'Socket Men' character designs"} />
				<p>
					Levels were spread throughout the in-game world and by upping their scores, players could contribute to a joint effort to win solar panels for their neighborhood.
				</p>
				<BigImage googleId={"1fxi0Ddzs5-WCb1pmedLnpOtQfzVF791h"} />
				<p>	
					Sharing via social media was encouraged, because collaboration also improved the chance of winning.
					<br /><br />
					The art syle had to abide closely by Electrabel’s minimalist style guide and be mainly calm, ‘clean’ and blue. 
				</p>
				<BigImage googleId={"1XSY3pKRtH0WdTLbyffiiYPoi4mk904d3"} />
				<p>
					My first world design for the levels was therefore iterated several times - see below for comparisons!
					<br /><br />
					Parallax scrolling and atmospheric animations were the final touches to these simplistic designs. You'd only see a slice in-game and scroll through the rest after playing the first level.
				</p>
				<BigImage googleId={"1Qr7SwAUyPr4RmMi1PIOyROJ2-veHaHUX"} />	
				<BigImage googleId={"1h0rCqRgX_4fK3mSIfFqMOU0bxYTJYMUo"} />
			</div>
		</Fragment>
		)
	}

  export default Suez;
