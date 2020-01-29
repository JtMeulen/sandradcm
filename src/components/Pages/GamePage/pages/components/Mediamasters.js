import React, { Fragment } from 'react';
import cn from 'classnames';
import { isMobile } from 'react-device-detect';

import TitleInfo from '../../components/TitleInfo/TitleInfo';
import Video from '../../components/Video/Video';
import BigImage from '../../components/BigImage/BigImage';
import Thumbnails from '../../components/Thumbnails/Thumbnails';
import styles from './styles.module.css';

const Mediamasters = (props) => {

	const thumbnails = [
		{image: '14bqh3i8qShOR8Dmdxpq0ymGe9p07wVXX', text: ''}, //0 Foto11
		{image: '1HE-mIaH9bKtXAtKMOwaiSn7AAJOa5QgC', text: ''}, //1 FotoMM
		{image: '1elEXWvJo0UVPjBOePm2XBebYfjhdN_c1', text: ''}, //2 MM2013_Tess_HomeScreen
		{image: '1fYxTdsmL4IwpuVeNXR9OtcjO2gAS9AeW', text: ''}, //3 MM2013_Characters
		{image: '1EIy_e87BoTZzdDuS1EF1df_5SYYNvRvo', text: ''}, //4 MM2013_InterfaceScreen_iPad
		{image: '1OHucJa1wL0jwZ6eFoAuHatRT2uGBqjhB', text: ''} //5 MM2013_InterfaceScreen_Phone
	];

	const FLAVOUR = <a href="https://www.flavour.nl/" target="_blank" rel="noopener noreferrer">Flavour</a>;

  return (
		<Fragment>
			{/* <Banner googleId={"1_aY98Lk6FHivqEKBSv92O42_9QT4LgGT"} /> */}
			<div className={cn(styles.mainContent, { [styles.mobileContent]: isMobile })}>
				<TitleInfo title={"Mediawijzer.net: MediaMasters (2012/2013/2014)"} />
				<p>
					<strong>Award:</strong>
					Evens Foundation: <em>Evens Prize for Media Education</em>
				</p>
				<p>
					In my time with {FLAVOUR}, I worked on the 2012, 2013 and 2014 editions of <em>MediaMasters</em>, which was played by around 121,000 school children in the Netherlands.
					<br /><br />
					<em>MediaMasters</em> is a media- focused game- and campaign which teaches children about all kinds of media, from newspapers to social, and how to interpret it well and handle it safely.
				</p>	
				<BigImage googleId={"1MVhQ7Ys_B2MgBpCU9eTxXYjKCouWueBJ"} />
				<p>
					Flavour produces it annually together with Mediawijzer.net, NTR, the Issuemakers, Bleck and the Dutch Institute for Audiovisuals.<br/>
					It was rewarded in 2015 with the fourth	Evens Prize for Media Education at the Media Meets Literacy festival in Poland.
				</p>	
				<Thumbnails thumbnails={thumbnails} positions={[0,1]} height={264} marginBottom={0} />
				<p>
					Every year, the game challenges schoolchildren throughout the Netherlands with a media mystery story line they have to solve in the course of a week, dubbed ‘the week of Media Wisdom’.
				<br /><br />
					Classes play together on the digital school board, online via social media, in libraries and at home to earn theirclass points.
				</p>
				<BigImage googleId={"1G7UGT8dnXf8n2pCPtVWshJy8GGqku_Qb"} />
				<p>
					These points boost them in the quiz on the finale day, which all classes in the Netherlands take simultaneously. The class solving the mystery and the quiz first and best, wins the battle.
				<br /><br />
					For the 2012 version, I created characters based on the actors in the videos guiding the children through the course material.
				</p>
				<Thumbnails thumbnails={thumbnails} positions={[2,3]} height={264} marginBottom={0} />
				<p>
					For the 2013 edition, I created characters for the new actors again, but also designed and produced the entire 2D interface of the game; mainly background screens for pop-ups and, of course, buttons.
					<br /><br />
					This interface was reused in 2014.
				</p>
				<Thumbnails thumbnails={thumbnails} positions={[4,5]} height={264} marginBottom={0} />
				<p>
				Watch one of the trailers below to see some of the characters in real life!
				</p>
				<Video videoId={"tF-kvwlRNO0"} />
			</div>
		</Fragment>
		)
	}

  export default Mediamasters;
