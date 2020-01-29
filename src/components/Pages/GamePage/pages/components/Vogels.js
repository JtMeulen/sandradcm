import React, { Fragment } from 'react';
import cn from 'classnames';
import { isMobile } from 'react-device-detect';

import TitleInfo from '../../components/TitleInfo/TitleInfo';
import BigImage from '../../components/BigImage/BigImage';
import Thumbnails from '../../components/Thumbnails/Thumbnails';
import styles from './styles.module.css';

const Vogels = (props) => {

	const thumbnails = [
		{image: '1UxSFtUju-1aYT6Hiz61Sm0FAt6Zm7ygy', text: 'The TOP/HELP arm support'}, //0 Vogels_Picture_Arm
		{image: '1S55H1EpL_fjrJ-Vt0zeZhMMO3t8BaGtJ', text: 'Our target audience playing'}, //1 Vogels_Picture_TargetAudience
		{image: '1vnhW8sCOjLuG_wNq3HM27YHPaHPYALrS', text: ''}, //2 ConceptBackground_Vogels_Land
		{image: '1SKeKPISEGsPFrum0wvjOAhITw0Z-5S_l', text: ''}, //3 ConceptBackground_Vogels_Cave
		{image: '1crPqDddV9Le1HFL5njJ-ICmbNw0citsB', text: ''}, //4 ConceptBackground_Vogels_Sky
		{image: '1xj2dt9mGJNljdw7KqNWVOSkr3h-jKCtE', text: ''}, //5 ConceptBackground_Vogels_SkyII
		{image: '1B8nRyzijuT4QFzkwKWdqsHdXw0iWTenk', text: 'Design for the main character'}, //6 ConceptSketch_Birds_V
		{image: '13bINRgq_nXAkKskxeD0beh8M5I7klDQ5', text: 'Design for birds in the sky'}, //7 ConceptSketch_Birds_III
		{image: '1pXRjgpVVgp2fnHs9g35wQkeuBON0yKVv', text: 'Design for birds on land'}, //8 ConceptSketch_Birds_IV
		{image: '1iDshFv6OPUE54YPfJdVmOSNmOSBo4kdJ', text: 'The Water area'}, //9 3DBackground_Vogels_Water
		{image: '1mSNPgaYC-vp8g0F7qsA5YXvKiJGhpcMx', text: 'The Land area'}, //10 3DBackground_Vogels_Land
		{image: '12yj9DfaVnKud1I5kfmkFcOfE_qhK7kL3', text: 'The Sky area'}, //11 3DBackground_Vogels_Sky
		{image: '16rNGbYLVpX9xXQ_XMl-hj2yFoTdqUtri', text: 'Sets of birds for the Sky area'}, //12 ConceptSketch_BirdsII
		{image: '1-18sk5NS-yKm_lQbGHZq6r-NNRvo8PNQ', text: 'Some designs did not make it into the game'}, //13 ConceptSketch_Birds
		{image: '1j3K9NFXPJ2eHzEUGOgDCcx_C1MBikBjH', text: 'Vogels! being played by Pac Man creator Toru Iwatani'}, //14 Vogels_Picture_ToruIwatani
		{image: '1Ky1_f8-mthnorxrDUvzWcQvhwlYbxWLa', text: 'The Vogels! team winning the Dutch Game Award'} //15 Vogels_Picture_DutchGameAwards
	];

const FOCAL_MEDITECH = <a href="http://www.focalmeditech.nl/" target="_blank" rel="noopener noreferrer">FOCAL Meditech</a>;
const VIMEO = <a href="https://vimeo.com/12113337" target="_blank" rel="noopener noreferrer">here</a>;
const JURY_REPORT = <a href="https://scienceguide.nl/media/585026/jury%20report%20for%20the%20wozzie%20award%202010.pdf" target="_blank" rel="noopener noreferrer">view</a>;

  return (
		<Fragment>
			{/* <Banner googleId={"1_aY98Lk6FHivqEKBSv92O42_9QT4LgGT"} /> */}
			<div className={cn(styles.mainContent, { [styles.mobileContent]: isMobile })}>
				<TitleInfo title={"Student project: Vogels! (2010)"} />
				<p>
				<strong>Awards:</strong><br />
				Dutch Game Awards 2010:<em> Special Award</em><br />
				Festival of Games 2010:<em> Best of Show Award</em><br />
				Virtual Platform 2010-2011:<em> Best of Practice</em><br />
				<br /><br />
				<strong>Nominations:</strong><br />
				Wozzie Award 2010<br />
				Dutch Game Awards 2010: <em>Best Serious Game</em> <br />	
				Dutch Game Awards 2010: <em>Best Student Game</em> <br />	
				</p>
				<BigImage googleId={"1s3nBA_F3cojgJ7NqgOx-Z-uuooXXZPpM"} text={"The introduction screen with the game- and company logo I made"} />
				<p>
					<em>Vogels!</em> is a rehabilitation game that helps patients with hemiplegia recover. It is a third-year Utrecht School of the Arts project commissioned by {FOCAL_MEDITECH},
					on which I worked with six other students for three months.
				</p>
				<BigImage googleId={"1Hy7IXCISKQeUrMoyRzO6Uxxb_mHV6wb_"} text={"The score screen"} />
				<p>
					The game, or rather the red bird in it, is controlled by FOCAL’s dynamic arm support TOP/HELP, of which its position is tracked with a webcam and copied in-game.
					<br /><br />
					For each new game, the patient calibrates the game to fit the level of impairment of the patient.
				</p>
				<Thumbnails thumbnails={thumbnails} positions={[0,1]} height={200}/>
				<p>
					In-game, the patient flies, following a path, through various parts of the world and collecting birds, as can be seen {VIMEO}.
					<br /><br />
					My main role was of the 2D lead, concept and texture artist. I also contributed to the game design. Both this and the visual layer of the game
					faced the challenge of having to remain straightforward and simple, as our target audience was prone to confusion.
					<br /><br />
					The characters and environment also had to enable immersion by being recognizable, but still more exciting and vibrant than real life.
				</p>
				<Thumbnails thumbnails={thumbnails} positions={[2,3]} height={248} marginBottom={0} />
				<Thumbnails thumbnails={thumbnails} positions={[4,5]} height={248} marginBottom={0} />
				<p>
					The main character faced the challenge of having to contrast with the environment and be as compact as possible, to better keep the attention of our players.
				</p>
				<Thumbnails thumbnails={thumbnails} positions={[6,7,8]} height={248} marginBottom={0} />
				<p>
					With the help of my designs and style guide, the world and character modeling was done by teammates Ronald Houtermans and Tim Remmers.
				</p>
				<Thumbnails thumbnails={thumbnails} positions={[9,10,11]} height={248} marginBottom={0} />
				<p>
					<em>Vogels!</em> and its entire installation was featured on behalf of iZovator and Indigo at Game in the City 2010, as well as iZovator’s Cross Care Café 2010,
					Support 2010 and the Festival of Games 2010, where it won the Diamond Trophy for being voted Best of Show.
				</p>
				<Thumbnails thumbnails={thumbnails} positions={[12,13]} height={248} marginBottom={0} />
				<p>
					Next to winning and being nominated for Dutch prizes, <em>Vogels!</em> was one of the final three nominees for the prestigious Wozzie Award of 2010, named after and handed
					over by Steve Wozniak, co-founder of Apple. Click to {JURY_REPORT} the official jury report online.
					<br /><br />
					<em>Vogels!</em> was also invited to the FILE festival of 2011 in Rio de Janeiro, Brazil.
				</p>
				<Thumbnails thumbnails={thumbnails} positions={[14,15]} height={248} marginBottom={0} />
				<p>
					<em>Vogels!</em> now serves as a proof of concept for FOCAL. Documentation created during the project was handed over to them.
					<br /><br />
					By using and demonstrating this product they are improving their research into more pleasant and effective ways of rehabilitation.
				</p>
			</div>
		</Fragment>
		)
	}

  export default Vogels;
