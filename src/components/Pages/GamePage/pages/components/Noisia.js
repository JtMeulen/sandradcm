import React, { Fragment } from 'react';
import cn from 'classnames';
import { isMobile } from 'react-device-detect';

import TitleInfo from '../../components/TitleInfo/TitleInfo';
import Video from '../../components/Video/Video';
import BigImage from '../../components/BigImage/BigImage';
import Thumbnails from '../../components/Thumbnails/Thumbnails';
import styles from './styles.module.css';

const Noisia = (props) => {

	const thumbnails = [
		{image: '1KHBNkdVseQ1ACgHm16gkJQ4YWc0Oiy8y', text: ''}, //0 Noisia1
		{image: '1nrrc5B_IzkAj8lH2uPaRzcgEijvxPyiO', text: ''}, //1 Noisia2
		{image: '1wFnd_XJI4RT6qS2R6ddsYTnCdHgvye3d', text: ''} //2 Noisia5
	];

	const FLAVOUR = <a href="https://www.flavour.nl/" target="_blank" rel="noopener noreferrer">Flavour</a>;

  return (
		<Fragment>
			{/* <Banner googleId={"1_aY98Lk6FHivqEKBSv92O42_9QT4LgGT"} /> */}
			<div className={cn(styles.mainContent, { [styles.mobileContent]: isMobile })}>
				<TitleInfo title={"Noisia: Infection (2010)"} />
				<p>
					<strong>Award:</strong><br />
					Golden SpinAward 2010-2011:<em> Best Gaming Concept</em>
				<br /><br />
					<strong>Nomination:</strong><br /> 
					Dutch Game Awards:<em> Best Online Game</em>
				</p>
				<Video videoId={"wcYFShfyNao"} />
				<p>
					<em>Noisia Infection</em> is a game I worked on during my 2009-2010 internship at {FLAVOUR}.
					Dutch electronic music trio Noisia worked together with the company to promote the release of their ‘Split the Atom’ album.
				</p>
				<BigImage googleId={"1Fdb3CfWzgLj4VIqGOq2ZUSdlSpxQJN54"} />
				<p>
					The player has to shoot enemies in accordance to the beat in the world of an album track. The better your rhythm, the higher you score.
					<br />
					During the levels, the soundtrack shifts gears and becomes more complex. The movement of the music lines changes and new lines give players an opportunity to navigate between them.
					<br /><br />
					Successfully finishing the tracks brings you to Boss fights – end battles set to a Noisia remix by other famous artists.
				</p>
				<BigImage googleId={"1oyfu8yyM79s0IKtVh4VquOSFFyTNrkbR"} />
				<p>
				    I helped set the tone for the gritty interface structure and the environmental atmosphere. I also worked on theme worlds and game assets,
					such as the Jungle environment and the Canine Cannons shown above.
					<br /><br />
					I gained my first experience in producing for long-running projects and with client communication, as the band was very involved in the process.
					<br /><br />
				</p>
				<Thumbnails thumbnails={thumbnails} positions={[0,1,2]} height={248} marginBottom={0} />
				<p>
					<em>Noisia Infection</em> went on to win the Golden SpinAward for Best Gaming Concept during the SpinAwards of 2010-2011. It was also one of the three nominees for the 2010 Dutch Game Award: Best Online Game.
				</p>
				</div>
		</Fragment>
		)
	}

  export default Noisia;
