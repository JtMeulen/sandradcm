import React, { Fragment } from 'react';
import cn from 'classnames';
import { isMobile } from 'react-device-detect';

import TitleInfo from '../../components/TitleInfo/TitleInfo';
import BigImage from '../../components/BigImage/BigImage';
import styles from './styles.module.css';

const SpeedRunner = (props) => {

	const FLAVOUR = <a href="https://www.flavour.nl/" target="_blank" rel="noopener noreferrer">Flavour</a>;

  return (
		<Fragment>
			{/* <Banner googleId={"1_aY98Lk6FHivqEKBSv92O42_9QT4LgGT"} /> */}
			<div className={cn(styles.mainContent, { [styles.mobileContent]: isMobile })}>
				<TitleInfo title={"Disney XD: Speed Runner"} />
				<p>
					When Disney Channel XD first came to Dutch television, they launched the Cap Hunt media campaign with Dutch store chain Blokker. A Disney XD cap was gifted 
					with every Calgonit, Air Wick or Vanish product purchase.
					<br /><br />
					During my 2009-2010 internship at {FLAVOUR}, we created Speed Runner to accompany the campaign.
				</p>
				<BigImage googleId={"1w5HxnB7EylZFFjnujA-OGt4XN28zMZlV"} />
				<p>
					In Speed Runner, you are free-running through a Blokker store and need to gather the branded products. Once you have all three, you need to return to the cash
					register as fast as possible. You also have to pick up enough money on the way back in order to pay.
				</p>
				<BigImage googleId={"1w5HxnB7EylZFFjnujA-OGt4XN28zMZlV"} />
				<p>
					I worked closely by the Disney XD style guide, contributing to the environment visuals and fully designing the character, tutorial level and interface.
				</p>
				<BigImage googleId={"1w5HxnB7EylZFFjnujA-OGt4XN28zMZlV"} />
			</div>
		</Fragment>
		)
	}

  export default SpeedRunner;
