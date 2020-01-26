import React, { Fragment } from 'react';
import cn from 'classnames';
import { isMobile } from 'react-device-detect';

import Banner from '../../components/Banner/Banner';
import TitleInfo from '../../components/TitleInfo/TitleInfo';
import LinkGroup from '../../components/LinkGroup/LinkGroup';
import Video from '../../components/Video/Video';
import BigImage from '../../components/BigImage/BigImage';
import Thumbnails from '../../components/Thumbnails/Thumbnails';
import styles from './styles.module.css';

const Suez = (props) => {

  const thumbnails = [
		'15umXCjeAqxMNvb-9c5eQuhdblUf3bVYJ', //0
		'1WVH_7N1jFcnzk2gUUuzn8CgqmGoPUdW-', //1
		'1l8DTcNZfK4_pj_H-298_WZTgS4OPnuni', //2
		'1cnz0nEGUQIZEGNj8FiKaHA28Nj2HmToe', //3
		'1BnMhcDAh03aBYu3RVIGDVOhuIodhiLMN', //4
		'14j3kwd9Keg7d6J6uxQEm7sa1w4sGlUIU', //5
		'1-CW0XOuFIhXhSmFmrAml46htlGApDuUF', //6
		'1rrcUJtPhomklDP0cCs1tv88v7CzIR4zh', //7
		'1w-G52cun18JvaINjlOWzpZFVWD3SbaFU', //8
		'1DN2mY56mo_Ftj5nATuUbCQpZW8lERjQW', //9
		'11v9JOj4Zd0vqEffZ03V7C-jAHE8OZpA8', //10
		'15zvuwBoyhSZCwzCtel03UayXnQ6Sfkvy' //11
	];

const TEAMREPTILE_URL = <a href="http://team-reptile.com/" target="_blank" rel="noopener noreferrer">Team Reptile</a>;
const ALLNIGHTERIMDB_URL = <a href="https://www.imdb.com/title/tt1710308/" target="_blank" rel="noopener noreferrer">All Nighter</a>;

  return (
		<Fragment>
			{/* <Banner googleId={"1_aY98Lk6FHivqEKBSv92O42_9QT4LgGT"} /> */}
			<div className={cn(styles.mainContent, { [styles.mobileContent]: isMobile })}>
				<TitleInfo title={"Cartoon Network: All Nighter"} />
				<p>
				All Nighter is an online game developed by {TEAMREPTILE_URL} and myself in 2012, produced by Cartoon Network. When Cartoon Network 
				discovered our previous collaboration game Lightwatch, they decided their cartoon series {ALLNIGHTERIMDB_URL} could use a game just like it!
				<br /><br />
				Because Cartoon Network liked the visual design of Lightwatch, I got to do the art for All Nighter myself.
				</p>
				<BigImage googleId={"1w5HxnB7EylZFFjnujA-OGt4XN28zMZlV"} />
				<p>
				In All Nighter, Regular Show’s main stars Mordecai and Rigby have accidentally set loose old man Pop’s firefly collection.
				<br />
				By launching Rigby from a rented paddle boat, they go out at night to gather as much fireflies possible before they get fired by their 
				moody manager Benson. Enemies such as bats, crocs and other angry lake monsters make long nights out of it!
				</p>
				<Thumbnails thumbnails={thumbnails} positions={[0,1,2]}/>
				<p>
				When Pops’ bug jar fills up, they enter bonus time, which doubles the score. With a higher score, better upgrades can be unlocked.
				The upgrade screen can be entered after finishing a night. You can make Mordecai paddle faster, have the nights last longer, obtain a 
				special space boost and a defensive mode for Rigby.
				</p>
				<Thumbnails thumbnails={thumbnails} positions={[3,4,5,6]}/>
				<p>
				I worked with character sheets, episodes, environment designs and direct feedback from the Regular Show staff.
				By closely emulating the style I incorporated new character designs, matching the gameplay needs.
				</p>
				<Thumbnails thumbnails={thumbnails} positions={[7,8]}/>
				<p>
				Some characters, such as the croc and the purple lake monster, were iterations of existing characters from episodes.
				I edited the background by combining Regular Show’s environment paintings and created all other assets myself.
				<br />
				With the help of Cartoon Network style guides, I also made achievement badges for the Cartoon Network website.
				</p>
				<BigImage googleId={"1JQJ8pMg2g3vLmybBbu7PdH405TDjhK2X"} />
				<p>
				Not all my designs made it into the game, but it was heaps of fun to work on nevertheless! 
				<br />
				According to Cartoon Network, the game performed above average during the launch. While the game is no longer playable on their website, 
				you can still find many play throughs on YouTube!
				</p>
				<Thumbnails thumbnails={thumbnails} positions={[9,10,11]}/>
				<Video videoId={"wJcbFw6u22s"} />
			</div>
		</Fragment>
		)
	}

  export default Suez;
