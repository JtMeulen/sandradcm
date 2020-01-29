import React, { Fragment } from 'react';
import cn from 'classnames';
import { isMobile } from 'react-device-detect';

import TitleInfo from '../../components/TitleInfo/TitleInfo';
import Thumbnails from '../../components/Thumbnails/Thumbnails';
import styles from './styles.module.css';

const MeldkamerControl = (props) => {

	const thumbnails = [
		{image: '1k1L2ncNin23OjBOAU-bW90Z3G2tfJ0e8', text: 'The main menu screen'}, //0
		{image: '1q585T91_YYaPVjJRGmT6hKz1hCIMSOAH', text: 'The level select screen'}, //1
		{image: '1Cy8Z3PO6S8VEpPVqkdib43PTIfImntBN', text: 'The playable map'}, //2
		{image: '1ANjl91VvEF-hJGfMz1KAIXopoIrezUcR', text: 'The screen showing running rides'}, //3
		{image: '1vb1R7daRpJv4pZEqGtmsbWWI3tDcfL4P', text: 'The vehicle overview'}, //4
		{image: '17mHyKC5ypf91nZIGZatORGxUb5rXw6mm', text: 'A session in progress'}, //5
		{image: '17g_nfh3lCK74tGQi4o7pvPkx9D7bXer6', text: 'The end of a level'}, //6
		{image: '1H506KGBhcZFfTCmh4__wpWDmTrpHONQG', text: 'The leaderboard'}, //7
		{image: '1ceXVkAAFagoN65QOpxTBf2stpDRFf10M', text: 'The achievements screen'}, //8
		{image: '18L6Reg2xqBRthIVHuQh81J4_2jn8x9lK', text: 'Samples of badges and achievement icons'}, //9
		{image: '1y5nePjM2rmmGEKxvNjrqUbR1kCTWZT60', text: 'Press photo of the control room'}, //10
		{image: '18S23uEBOztfJ8CkGhobcsyqjGuFl1mo3', text: 'A complementary T-shirt!'} //11
	];

	const FLAVOUR = <a href="https://www.flavour.nl/" target="_blank" rel="noopener noreferrer">Flavour</a>;

  return (
		<Fragment>
			{/* <Banner googleId={"1_aY98Lk6FHivqEKBSv92O42_9QT4LgGT"} /> */}
			<div className={cn(styles.mainContent, { [styles.mobileContent]: isMobile })}>
				<TitleInfo title={"Veiligheids- en Gezondheidsregio Gelderland-Midden: Meldkamer Control (2014)"} />
				<p>
				<strong>Award:</strong><br />
				Dutch Society for Simulation in Health:<em> Quality Label for Valid Games</em>
				</p>
				<p>
					In my time with {FLAVOUR}, we created <em>Meldkamer Control</em>: a game that teaches control room personnel ambulance dispatch techniques.
				</p>
				<Thumbnails thumbnails={thumbnails} positions={[0,1]} height={294} marginBottom={33} />
				<p>
					<em>Meldkamer Control</em> is currently in use by the Dutch region Gelderland-Midden to train their dispatchers without endangering human lives.
				<br /><br />
					<em>Meldkamer Control</em> is a supplement to the training of these dispatchers. Players need to handle realistic emergency situations through various levels of difficulty, all taking place in real time.
				</p>
				<Thumbnails thumbnails={thumbnails} positions={[2,3]} height={294} marginBottom={33} />
				<p>
					They are trained in interpreting reports, sustain proper ambulance coverage and execute the logistics of controlling a number of ambulances at once.
					<br /><br />
					At the same time, they are challenged to unlock new levels, raise their status and challenge each other.
				</p>
				<Thumbnails thumbnails={thumbnails} positions={[4,5]} height={294} marginBottom={33} />
				<p>
					Visually, I had to replicate the existing dispatch software and alter it for gamification, while at the same time closing the visual gap with the real system as much as possible.
					Visual similarity proved to enable the trainees to apply their newly found skills to the actual job more easily.
					<br /><br />
					There was more wiggle room with the general interface, but the look of it still had to remain clean and non-distracting.
				</p>
				<Thumbnails thumbnails={thumbnails} positions={[6,7,8]} height={197} marginBottom={33} />
				<p>
					As quoted by Piet-Hein ten Hacken, head of Control Room Consultation in the Netherlands:
				</p>
				<p style={{textAlign: 'center', fontSize: '16px'}}>
					<em>
						“Control room Gelderland Midden had the wish to develop a tool to monitor, improve and uniformly execute the dispatch process at the control room. In 2013 we came into contact with Flavour.
						Their professional appearance, enthousiasm and knowledge encouraged us to research the possibility of a ‘control room game’. And so it happened!”
					</em>
				</p>
				<Thumbnails thumbnails={thumbnails} positions={[9,10,11]} height={197} marginBottom={33} />
			</div>
		</Fragment>
		)
	}

  export default MeldkamerControl;
