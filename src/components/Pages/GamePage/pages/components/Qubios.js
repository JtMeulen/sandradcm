import React, { Fragment } from 'react';
import cn from 'classnames';
import { isMobile } from 'react-device-detect';

import TitleInfo from '../../components/TitleInfo/TitleInfo';
import BigImage from '../../components/BigImage/BigImage';
import Thumbnails from '../../components/Thumbnails/Thumbnails';
import styles from './styles.module.css';

const Qubios = (props) => {

	const thumbnails = [
		{image: '1zkgwDIpCb-OXQ2-jDzuPwE32cghkLjDt', text: ''}, //0 BG4
		{image: '145VTTkwQo51PmYmIapbtsaxRITsYoC4e', text: ''}, //1 BG6
		{image: '1A1TNTkmt37gJXzPg1m3PBC3aGG48gWRz', text: ''}, //2 BG3
		{image: '1Vil1B5sm-YOC_m7gv_mmwBw-uWgf15NU', text: ''}, //3 BG2
		{image: '1kXL5jy05a8wm7f72lY-QBwTdB0kHRAoI', text: ''}, //4 BG5
		{image: '1rh2uImScGkS9E_Ne5plqvyHpl6SjPMQw', text: ''}, //5 BG1
		{image: '1rqb7YHU9kO9IOBJJltIEBa4HuJgq27HM', text: ''}, //6 InterfaceIcons1
		{image: '1CZsvQkkVZw9k_VeDVVZPsKGaF_1NRReQ', text: ''}, //7 InterfaceIcons2
		{image: '12sdRuEeWRBIELr4t4Fcbr1u8FqKGH08z', text: ''}, //8 InterfaceIcons3
		{image: '14YVI69flCSEvsEAgEEtJeRnviqePBRO1', text: ''}, //9 BackgroundDefault
		{image: '1Dldc-99o1H_796xVPDwnHHs0cPka6WVl', text: ''}, //10 BackgroundFutsal
		{image: '1yEeTiA670fvq_ry3M5zJiDcfP63WQ5KP', text: ''}, //11 BackgroundArena
		{image: '1wRycji6_SrzsEwNKWW4PYcp3x9Oq3ah6', text: ''}, //12 BackgroundStreets
		{image: '161sOvcFtAfKY7kUIBGMEMey0FyFXCNI7', text: ''}, //13 BackgroundBeach
		{image: '1PB8jHnck4T8Vp2JhsnkHTI4ND4clAaaV', text: ''}, //14 BackgroundCamping
		{image: '1CKMWadFF-VgfypC6-WSpgWDZlm3lEa3l', text: ''}, //15 BackgroundConcert
		{image: '1JvDscsHwD2XBblmyb7DwX9S8Xpcjd6UL', text: ''}, //16 BackgroundTron
		{image: '1pn0MMee5DtrmMMFC4zBiBkUZ_yyCrdEr', text: ''} //17 Running mouse
	];

	const FLAVOUR = <a href="https://www.flavour.nl/" target="_blank" rel="noopener noreferrer">Flavour</a>;

  return (
		<Fragment>
			{/* <Banner googleId={"1_aY98Lk6FHivqEKBSv92O42_9QT4LgGT"} /> */}
			<div className={cn(styles.mainContent, { [styles.mobileContent]: isMobile })}>
				<TitleInfo title={"Casual Game Assets (2012-2014)"} />
				<p>
					Over the years I have delivered miscalleanous game assets that were only online for a short time - or sometimes, not even at all!
					<br /><br />
					In 2014, I delivered puffer fish, corals and other aquatic concept art for <em>Jelly Reef</em>, a mobile sequel developed by Game Oven, based on our student project. 
				</p>
				<BigImage googleId={"1HMbWYqOtbh0WLgixnVX9RIBVFhhSSBt6"}/>
				<BigImage googleId={"1bUrYywebsMCFq7OMud3uU5XZJG55ze5n"}/>
				<p>
				Other one-off assets for an indie company were splash screens and a custom font for the game jam project <em>Squeak Squad</em> by Team Reptile.
				</p>
				<BigImage googleId={"1nTFCt0E7KSBVBpbw6bOF7mwa6cszFoG0"}/>
				<BigImage googleId={"1j0kx_UTNrQne2ucEushwcWfKMmUgE9Fm"}/>
				<p>
					For an app that would feature little creatures getting tickled on their bellies, I designed Katie the Koala. It unfortunately never went live!
				</p>
				<BigImage googleId={"1ird58vOzmLPe99uPj07irma8vhTtwmvl"}/>
				<p>
					Animating characters was just as fun. For example, I created this little mouse for a friend's side-scrolling lab escape game.
				</p>
				<Thumbnails thumbnails={thumbnails} positions={[17]} height={229} marginBottom={0}/>
				<p>
					During a few months in 2012 and 2013 in my time with {FLAVOUR}, I worked on making game assets for simple browser games for an online game portal. 
					<br />
					This also never did launch, but I had a lot of fun working in various styles on different settings and gameplay elements.
					<br /><br />
					For a Bejeweled-like puzzle game, I created cube-shaped icon sets for players to choose from.
				</p> 
				<BigImage googleId={"1YbJ9cXl2zvg49-0s29A0_NeMznHbHEL0"} text={"A sample of cubed icon sets"} />
				<p>
					I made several sets of themed backgrounds for this player library. I varied in techniques and styles to offer a wide range of choices.
					<br /><br />
					The backgrounds needed spacing on the right for the grid of another player in multiplayer mode. The bars above and below each grid functioned as boost meters.
				</p>
				<Thumbnails thumbnails={thumbnails} positions={[0,1]} height={294} marginBottom={0}/>
				<Thumbnails thumbnails={thumbnails} positions={[2,3]} height={294} marginBottom={0}/>
				<Thumbnails thumbnails={thumbnails} positions={[4,5]} height={294} marginBottom={0}/>
				<p>
					We also made a a soccer-themed game for the same platform. These games were accompanied by achievement icons and, of course, various interface elements.
				</p>
				<Thumbnails thumbnails={thumbnails} positions={[6,7,8]} height={197} marginBottom={0}/>
				<p>
					For this soccer game I made a character creator in which players could combine different heads, hairstyles and shoes. I created dozens of different styles for each,
					making sure they could all fit together. Players could also color these assets to their liking.
				</p>
				<BigImage googleId={"1hF-_z_gzt-xNocMeSchvzg4bTkphdJF6"} text={"A small sample of assets from the character creator"}/>
				<p>
					I created a large set of themed soccer fields, leaving room free on the bottom for the interface. These background were animated in-game; for example,
					the boats in the ocean version would sail by, the concert and stadium version had flashing cameras, and so forth.
				</p>
				<Thumbnails thumbnails={thumbnails} positions={[9,10]} height={268} marginBottom={0}/>
				<Thumbnails thumbnails={thumbnails} positions={[11,12]} height={268} marginBottom={0}/>
				<Thumbnails thumbnails={thumbnails} positions={[13,14]} height={268} marginBottom={0}/>
				<Thumbnails thumbnails={thumbnails} positions={[15,16]} height={268} marginBottom={0}/>
				</div>
		</Fragment>
		)
	}

  export default Qubios;
