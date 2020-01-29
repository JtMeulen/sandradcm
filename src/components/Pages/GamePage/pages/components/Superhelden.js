import React, { Fragment } from 'react';
import cn from 'classnames';
import { isMobile } from 'react-device-detect';

import TitleInfo from '../../components/TitleInfo/TitleInfo';
import BigImage from '../../components/BigImage/BigImage';
import Thumbnails from '../../components/Thumbnails/Thumbnails';
import styles from './styles.module.css';

const Superhelden = (props) => {

	const thumbnails = [
		{image: '1-vdfMwZAPULRUJOcXkzvfbaEEpP0_0ip', text: ''}, //0 Wachtwoord2
		{image: '14_fyVdGUhPus8R8YWEHG7_EHtfHrEFYC', text: ''}, //1 Ziggo_Laptop
		{image: '1FbdIb99A_nQIhIXy6YDKnKD0e9Be77i2', text: ''}, //2 Scenario_1
		{image: '1IpU2LtF0zo5QucHmNK3lYwTEEi5fWziT', text: ''}, //3 Scenario_2
		{image: '1cYGfcjzWmfW29uyq1_tHl7BiXDsCjPhd', text: ''}, //4 Scenario_3
	];

	const FLAVOUR = <a href="https://www.flavour.nl/" target="_blank" rel="noopener noreferrer">Flavour</a>;

  return (
		<Fragment>
			{/* <Banner googleId={"1_aY98Lk6FHivqEKBSv92O42_9QT4LgGT"} /> */}
			<div className={cn(styles.mainContent, { [styles.mobileContent]: isMobile })}>
				<TitleInfo title={"Ziggo: Zuperhelden (2014)"} />
				<p>
					In my time working with {FLAVOUR}, we created an educative game together with Brand New Game for the personnel of Ziggo, the largest cable operator in the Netherlands.
				</p>
				<BigImage googleId={"1JeRHVpjGhmqlARJiPrBgvm0MyUZzii55"} />
				<p>
					A flyer and workshop were not sufficient in teaching Ziggo's regulatory compliance and security rules to all of their staff. <em>Ziggo: Zuperhelden</em> (Zuper Heroes) aimed to
					strengthen this effort – and succeeded!
					<br /><br />
					<em>Ziggo: Zuperhelden</em> is a battle between colleagues and internal departments. In several mini quizzes, grid games and animated problematic scenarios,
					players were challenged to learn all about Ziggo’s regulatory compliance.
				</p>
				<Thumbnails thumbnails={thumbnails} positions={[0,1]} height={248} marginBottom={0} />
				<p>
					The generated player data gave Ziggo’s management insight in their staff’s compliance knowledge. Mainly due to the battle element, increased engagement improved these statistics.
					<br /><br />
					I created supplementary pieces for this game in the shape of several of the quiz interface elements (such as the menu shown above) and various scenario panels.
				</p>
				<Thumbnails thumbnails={thumbnails} positions={[2,3,4]} height={248} marginBottom={0} />
			</div>
		</Fragment>
		)
	}

  export default Superhelden;
