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

const Allnighter = (props) => {

  const thumbnails = [
		'17QYS84EvsMaozZ4xzA7hJFHxmzYUzZWo',
		'1u-Zt_RoZChz-OvGHFHzJbfAMH5Wgt1dO'
	];

const TEAMREPTILE_URL = <a href="http://team-reptile.com/" target="_blank" rel="noopener noreferrer">Team Reptile</a>;
const ALLNIGHTERIMDB_URL = <a href="https://www.imdb.com/title/tt1710308/" target="_blank" rel="noopener noreferrer">All Nighter</a>;

  return (
		<Fragment>
			<Banner googleId={"1_aY98Lk6FHivqEKBSv92O42_9QT4LgGT"} />
			<div className={cn(styles.mainContent, { [styles.mobileContent]: isMobile })}>
				<TitleInfo title={"Cartoon Network: All Nighter"} />
				<p>
				All Nighter is an online game developed by {TEAMREPTILE_URL} and myself in 2012, produced by Cartoon Network. When Cartoon Network discovered our previous collaboration game Lightwatch, they decided their cartoon series {ALLNIGHTERIMDB_URL} could use a game just like it!
				<br /><br />
				In All Nighter, Regular Show’s main stars Mordecai and Rigby have accidentally set loose old man Pop’s firefly collection.
				<br />
				By launching Rigby from a rented paddle boat, they go out at night to gather as much fireflies possible before they get fired by their moody manager Benson. Enemies such as bats, crocs and other angry lake monsters make long nights out of it!
				<br /><br />
				Because Cartoon Network liked the visual design of Lightwatch, I got to do the art for All Nighter myself.
				</p>
				<BigImage googleId={"1w5HxnB7EylZFFjnujA-OGt4XN28zMZlV"} />
				<p>
				Other significant learning opportunities I had the fortune of receiving from King were, among
				others, attending a DISC course, life drawing seminars from Samantha Youssef and THU 2016.
				</p>
				{/* TODO: BIG IMAGE */}
				<p>
				Following are several of the episodes I made over the years. Episodes are bundles of 15 new
				levels, released every week, with custom art and narrative on the Saga map and behind the
				game board.
				</p>
				<Thumbnails thumbnails={thumbnails} positions={[0,1,2,3,4,5]}/>
				<p>
				For each episode, the team would brainstorm narrative and titles themselves. Episodes are also
				often compiled of pre-existing assets. In this way, I have contributed to over 50 episodes more.
				</p>
				{/* TODO: VIDEO TO COME HERE */}
				<p>
				A special episode was Bubblegum Bazaar, which contained level 2000. The team decided to
				depict main characters Tiffi and Yeti in search what would happen after level 2000. The
				Bubblegum Troll was there to soothe their Y2K scare with a glimpse into the future.
				</p>
				<Thumbnails thumbnails={thumbnails} positions={[6,7,8,9,10,11]}/>
				<p>
				My designs were featured on worldwide media (such as),
				in app stores and on social media. King celebrated this with a big campaign – check out the video below!
				</p>
				<Video videoId={"D4pCVx6ln3E"} />
				<p>
				I have created several characters for the game. One is the witch Caramella, who first sent main
				character Tiffi out hunting for potion ingredients at Halloween 2015. After a player finished a
				special set of levels, Caramella would transform in happiness and hand out her treats.
				</p>
				<Thumbnails thumbnails={thumbnails} positions={[12,13,14,15,16,17]}/>
				<p>
				Other examples are the snowmen Holly and Dale, who often are used in holiday and winter
				themed episodes and live-ops.
				</p>
				{/* TODO: BIG IMAGE */}
				<p>
				In my time with the Live Ops team work has been more varied and high-paced. I contribute
				visually and with technical implementation, but also enjoying partaking in designing new
				features with the team.
				</p>
				<Thumbnails thumbnails={thumbnails} positions={[18,19,20,21,22,23]}/>
				<p>
				Candy’s first collaboration with an outside brand was on a live ops with the US based Marie
				Claire magazine. Then Creative Director Nina Garcia designed a Candy level for a spread they did
				on game design.
				</p>
				<Video videoId={"xVzDu_g8-vY"} />
				<p>
				I created the art for a design-themed live ops – and a Candified version of Garcia herself.
				</p>
				<p>
				Next to producing in-game content for Candy Crush I also have had many side projects within
				King. I often create graphics for internal use: PR and social media, event invitations, office maps,
				portraits of players and colleagues and more. Some of my designs were also featured in the
				Candy Crush TV show.
				</p>
				<Thumbnails thumbnails={thumbnails} positions={[24,25,26,27,28,29,30,31,32]}/>
			</div>
		</Fragment>
		)
	}

  export default Allnighter;
