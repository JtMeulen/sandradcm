import React, { Fragment } from 'react';
import cn from 'classnames';
import { isMobile } from 'react-device-detect';

import TitleInfo from '../../components/TitleInfo/TitleInfo';
import BigImage from '../../components/BigImage/BigImage';
import Thumbnails from '../../components/Thumbnails/Thumbnails';
import styles from './styles.module.css';

const JellyReef = (props) => {

	const thumbnails = [
		{image: '1ibmE_ARW9HkTrr87qMWWzwkckL5tnmSZ', text: ''}, //0 JellyReef_Picture6
		{image: '1KxpLJLQvJPBebLHH3XM4j-CrN94W-dql', text: ''}, //1 JellyReef_Picture7
		{image: '1U6yYtj0QCIDA2350YSDWz2CrSUVdSBLC', text: ''}, //2 ScreenLoading
		{image: '1QmkpKjV8R-JQbdIqC-p2xZkXzLBXfl7g', text: ''}, //3 ScreenLogo
		{image: '1syWKQCyKWxHkgz-idV_uibFfsQecHRqr', text: ''}, //4 ScreenCredits
		{image: '1EPyBLyW_bwgs5opk74nAxgdWzPn2lRIL', text: ''}, //5 Ingame_Level1
		{image: '18rRfiBq16RjpiTQEoyUvadsKqR0hnymF', text: ''}, //6 Ingame_Level2
		{image: '1JZgAZA4GfV47TyyIL1O5No7MvOiM6Hsv', text: ''}, //7 Ingame_Level3
		{image: '1toom8Ix_pQh6Ty9JgjIqZjXN28JDw0J1', text: ''}, //8 Ingame_Level4
		{image: '1jeDGykV4KAlil0x53kFF6LCOQ7pBQQvt', text: ''}, //9 Ingame_Level5
		{image: '1ngEotzWZBwyBozP7auBQzDCXX90BJo_U', text: ''}, //10 Ingame_Level6
		{image: '1VSS0fRK2pqbx8_yQqvzUSnUTjvGf_JYi', text: ''}, //11 Ingame_Level7
		{image: '1-20k3dJL8lNfV4GTsR5aii96MKXhMQOI', text: ''}, //12 Ingame_Level8
		{image: '1kmfOD4ZI4HFNHtpbSvwaSks7L-Nhpjel', text: ''}, //13 Ingame_Level9
		{image: '1QofsNjS-BXH9tbstrJ2-TUqk-txcnxcx', text: 'Promotional poster for my final jelly design'}, //14 Poster_JelliesFinal
		{image: '1SKS0juUsnol-JZIsAmvTi4DZz1DuBfex', text: 'Promotional poster for all our jelly sketches'}, //15 Poster_JelliesSketches
		{image: '10qsDD3A8yPsQeIiRgLUonKqkjffKpbG-', text: 'The aforementioned 3D interactive tag, displaying Dutch Game Garden companies'}, //16 JellyReef_Picture4
		{image: '112sf22s0jnrJdNe8aOGuJKPDt2POM7-Z', text: '"Saving jellyfish with an iPad on legs" - an example of Dutch media attention'}, //17 JellyReef_Picture3
		{image: '1_IeY9TvDx3WRjlxXpkhC8bJjOgTG0qMl', text: "A painted sculpt I created for Team Pigeonhead's room"} //18 JellyReef_Picture5
	];

	const DUTCH_GAME_GARDEN = <a href="https://www.dutchgamegarden.nl/" target="_blank" rel="noopener noreferrer">Dutch Game Garden</a>;

  return (
		<Fragment>
			{/* <Banner googleId={"1_aY98Lk6FHivqEKBSv92O42_9QT4LgGT"} /> */}
			<div className={cn(styles.mainContent, { [styles.mobileContent]: isMobile })}>
				<TitleInfo title={"Student Project: The Jelly Reef"} />
				<p>
				<strong>Nominations:</strong><br />
				Cinekid 2012: <em>New Media Award</em> <br />
				</p>
				<p>
				<em>The Jelly Reef</em> was an entertainment game for the Microsoft Surface. It was an Utrecht School of the Arts project commissioned by
				Ziggo and the Dutch Game Garden in 2011, on which I worked for four months with eight other students.
				</p>
				<BigImage googleId={"1iCwTqgjezqizvA9jVqvApW8w8wMZTmiB"} />
				<p>
				This game was stationed in the waiting area of the {DUTCH_GAME_GARDEN} building, a shared office space for game developers,
				where it can be played by both visitors and residents.
				</p>
				<Thumbnails thumbnails={thumbnails} positions={[0,1]} height={263} marginBottom={0}/>
				<p>
				In <em>The Jelly Reef</em>, one or multiple players swipe across the touchscreen of the Surface with their fingers to guide as many jellyfish
				possible safely to the end of eight themed levels.
				<br/><br/>
				You can also use a Dutch Game Garden ‘tag’ – a 3D printed statue of their logo – to regroup your jellies when they
				drift too far apart, as well as display information about Dutch Game Garden residents.
				</p>
				<Thumbnails thumbnails={thumbnails} positions={[2,3,4]} height={198} marginBottom={0}/>
				<p>
				In-game text rotates to accommodate multiple players, or uses the Microsoft Surface’s ability to recognize finger orientation.
				<br />Upon touch, text automatically turns into the direction of the player. 
				<br /><br />
				All final art was made in a top-down view and darker in color,
				due to the brightness of the Surface’s touchscreen.
				</p>
				<BigImage googleId={"1ryj_c7U1tXyv-Q92aLgzdJtoIfX15GS_"} />
				<p>
				My role was of the lead, concept, character, environmental and UI artist. I created three themed worlds: the bright reefs for the easy mode,
				a pirate bay and other sunken ships for medium and as a finale, a sunken city – Dutch style!
				</p>
				<Thumbnails thumbnails={thumbnails} positions={[5,6,7]} height={198} marginBottom={0}/>
				<p>
				With the help of my own style guides, I coordinated my fellow artists (Sherida Halatoe, Tim Hengeveld, Bas Kersten and Tim Scheel) in making their designs for levels, line art and coloring.
				<br/><br/>
				Production-wise, I myself was in charge of characters, object design and assisted in coloring and polishing as well.
				</p>
				<Thumbnails thumbnails={thumbnails} positions={[8,9,10]} height={198} marginBottom={0}/>
				<p>
				Next to designing and painting these characters, objects and environments, I was also in charge of the general interface. I worked with a composer and sound
				designers for fitting audio and I assisted on project coordination as well.
				</p>
				<Thumbnails thumbnails={thumbnails} positions={[11,12,13]} height={198} marginBottom={0}/>
				<p>
				The first prototype was available for play at Game in the City 2010. The Jelly Reef was introduced to the Dutch Game Garden during its network lunch of March 2011.
				<br/><br/>
				A special demo of three levels was created to feature on the first presentation of the Microsoft Surface v2.0, which was exhibited at the Microsoft MIX 2011 in Las Vegas.
				</p>
				<Thumbnails thumbnails={thumbnails} positions={[14,15]} height={538} marginBottom={33}/>
				<p>
				The Jelly Reef was also showcased at Indigo 2011 and Cinekid 2011, the Netherlands, as it was nominated for their New Media Award.
				</p>
				<Thumbnails thumbnails={thumbnails} positions={[16,17,18]} height={205} marginBottom={67}/>
			</div>
		</Fragment>
		)
	}

  export default JellyReef;
