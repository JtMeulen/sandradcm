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
				<TitleInfo title={"GDF Suez: Watt Game"} />
				<p>
					In my time by {FLAVOUR}, I did the art for the Watt Game, a bubble shooter gamifying the campaign for clean energy by GDF Suez and Electrabel in 2014.
				</p>
				<BigImage googleId={"1w5HxnB7EylZFFjnujA-OGt4XN28zMZlV"} />
				<BigImage googleId={"1w5HxnB7EylZFFjnujA-OGt4XN28zMZlV"} />
				<p>
					Levels were spread throughout the in-game world and by upping their scores, players could contribute to a joint effort to win solar panels for their neighborhood.
					<br /><br />
					Sharing via social media was encouraged, because collaboration also improved the chance of winning.
				</p>
				<BigImage googleId={"1w5HxnB7EylZFFjnujA-OGt4XN28zMZlV"} />
				<p>
					The art syle had to abide closely by Electrabel’s minimalist style guide and be mainly calm, ‘clean’ and blue. My first world design for the levels, as posted above,
					was therefore iterated into the version below.
					<br /><br />
					Parallax scrolling and atmospheric animations were the final touch to the design. If you play the game, you can scroll through the map after playing the first level.
				</p>
				<BigImage googleId={"1w5HxnB7EylZFFjnujA-OGt4XN28zMZlV"} />
			</div>
		</Fragment>
		)
	}

  export default Suez;
