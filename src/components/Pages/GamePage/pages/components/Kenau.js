import React, { Fragment } from 'react';
import cn from 'classnames';
import { isMobile } from 'react-device-detect';

import TitleInfo from '../../components/TitleInfo/TitleInfo';
import BigImage from '../../components/BigImage/BigImage';
import Thumbnails from '../../components/Thumbnails/Thumbnails';
import styles from './styles.module.css';
import Video from '../../components/Video/Video';


const Kenau = (props) => {

	const thumbnails = [
		{image: '13JFj2B5lNGXK_EOflstbTKEA7T0Dd9fB', text: ''}, //0
		{image: '16x5yy8XCA-KWdy0yzbN52uIb1KO21Q6t', text: ''} //1
	];

	const FLAVOUR = <a href="https://www.flavour.nl/" target="_blank" rel="noopener noreferrer">Flavour</a>;
	const KENAU = <a href="https://www.imdb.com/title/tt2512170/" target="_blank" rel="noopener noreferrer">Kenau</a>;

  return (
		<Fragment>
			{/* <Banner googleId={"1_aY98Lk6FHivqEKBSv92O42_9QT4LgGT"} /> */}
			<div className={cn(styles.mainContent, { [styles.mobileContent]: isMobile })}>
				<TitleInfo title={"Fu Works: Kenau's Army Of Women (2014)"} />
				<p>
				In my time with {FLAVOUR}, I worked on a media campaign made possible by a massive collaboration of Dutch companies. Together with Fu Works, Spektor and Plan Nederland,
				Flavour realised <em>Kenau’s Army of Women</em>.
				</p>
				<Video videoId={"Kcrv569IQZY"} />
				<p>
				{KENAU} is a Dutch film, released in 2014. This historic epic is a (both national and international) award-winning film about the Dutch legend Kenau Simonsdochter Hasselaer.
				<br /><br />
				Kenau, a ship builder and wood dealer, became famous in Dutch history for leading the resistance during the defending of Haarlem in the Dutch War of Independence (1568-1548).
				</p>
				<BigImage googleId={"1kW7dnfGCfTw0fHzibGgfCTRwKDzMGsgo"} text={"An in-game overview of the playable map"}/>
				<p>
				The goal of the film’s accompanying media campaign was to mobilize women in an online army and have them battle together for rights of girls in third world countries.
				<br /><br /> 
				Via social media, interactive trailers and an online game, hundreds of women played the game and collected money. The campaign gathered about €67,000 in six weeks
				time and reached around three million people.
				</p>
				<Thumbnails thumbnails={thumbnails} positions={[0,1]} height={248} marginBottom={0}/>
				<p>
				Flavour and myself were partly responsible for this concept and created the game in which women could occupy four parts of the world.
				<br /><br />
				By playing a Zumba-like ball shooting game, they could progress through levels – or buy them out via real-life donations.
				<br /><br />
				I mainly worked on polishing individual assets, the game's interface and putting everything together in Flash with our programmer.
				</p>
			</div>
		</Fragment>
		)
	}

  export default Kenau;
