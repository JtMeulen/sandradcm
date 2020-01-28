import React, { Fragment } from 'react';
import cn from 'classnames';
import { isMobile } from 'react-device-detect';

import TitleInfo from '../../components/TitleInfo/TitleInfo';
import Video from '../../components/Video/Video';
import BigImage from '../../components/BigImage/BigImage';
import Thumbnails from '../../components/Thumbnails/Thumbnails';
import styles from './styles.module.css';

const Warchild = (props) => {

	const thumbnails = [
		{image: '13zD3m2OOHbGJkq6C0hBjWImiaJLCtHgY', text: ''}, //0 eLS_Foto1
		{image: '1RsasDuq8JFxnbWxL1gAKmGUuEwTZ-bij', text: ''}, //1 eLS_Foto2
		{image: '1TZ3HhTYV0gU3uP8HLMzZ-VPyHeMf1z-G', text: ''}, //2 eLS_Foto3
		{image: '15SLD8PjthY60-W2pDX1sg3dJ-EiZ48b0', text: ''}, //3 eLS_Goats
		{image: '1sGA_hS4xur0POfSjthDgSW3UfsppA4cW', text: ''}, //4 eLS_Cows
		{image: '1MHAD6rOHCuKii80O8uXiegJAQ3MqfzH3', text: ''}, //5 eLS_ConstructionSite
		{image: '1C4ssXEogF3SwFjpt0iKzK5NsXJW-GOF5', text: ''}, //6 eLS_GoatHerder
		{image: '1aiEuS7J10OYI5_bdbkTs9pOqEG2ajC1a', text: ''}, //7 eLS_Stage_1
		{image: '1ztxb2ngU-nyH-GIOq-DZ0DVaET7JlPDs', text: ''}, //8 eLS_Stage_2
		{image: '1ZEw6Y4p03ATKJ9c8hzb9sfssGvT5cKUk', text: ''}, //9 eLS_Stage_3
		{image: '1Hu1kgr_evMNyLhABksEaxqhDjmrt2hYN', text: ''}, //10 eLS_Stage_4
		{image: '1QE7WHt8z-YQm0rce2wntYrSwv0GtZ3kE', text: ''}, //11 eLS_Stage_5
		{image: '1lKUFiKCpcjNFD5pDnNM9AuKDa7Bec8-h', text: ''}, //12 eLS_Agriculture1
		{image: '1epiqPs_4BqkeqYut2JU1XOTFxBARFADF', text: ''}, //13 eLS_Agriculture2
		{image: '1yxaATwjii80PfBB7BVtETu9paY1LHDJq', text: ''}, //14 eLS_TractorOwner
		{image: '1qrcdO_lTlVWTajVhfXESwdTA3dXPtWF4', text: ''}, //15 eLS_BrickMaker
		{image: '1X8NgI1_TvH5DqZWSJ4EgEf094t71Gr3o', text: ''}, //16 eLS_MarketFruit
		{image: '1K5KSfICaY02upnBNlSBrjkh-9CmkLgUK', text: ''}, //17 eLS_MarketGrains
		{image: '1Y5ZVOiyWeh1UOvLktQPEdfbDaQ-pGzwz', text: ''}, //18 eLS_MarketTailor
		{image: '1QE7WHt8z-YQm0rce2wntYrSwv0GtZ3kE', text: ''}, //19 eLS_
		{image: '1Hu1kgr_evMNyLhABksEaxqhDjmrt2hYN', text: ''}, //20 eLS_
		{image: '1QE7WHt8z-YQm0rce2wntYrSwv0GtZ3kE', text: ''}, //21 eLS_
		{image: '1Hu1kgr_evMNyLhABksEaxqhDjmrt2hYN', text: ''}, //22 eLS_
		{image: '1QE7WHt8z-YQm0rce2wntYrSwv0GtZ3kE', text: ''}, //23 eLS_
		{image: '1Hu1kgr_evMNyLhABksEaxqhDjmrt2hYN', text: ''}, //24 eLS_
		{image: '1QE7WHt8z-YQm0rce2wntYrSwv0GtZ3kE', text: ''} //25 eLS_
	];

	const FLAVOUR = <a href="https://www.flavour.nl/" target="_blank" rel="noopener noreferrer">Flavour</a>;
	const RECOGNIZED = <a href="https://www.warchildholland.org/news/" target="_blank" rel="noopener noreferrer">has been recognized</a>;
	const SHOWCASE = <a href="https://sowc2015.unicef.org/stories/learning-at-their-fingertips/" target="_blank" rel="noopener noreferrer">showcase projects</a>;
	const HUFFINGTON = <a href="https://www.huffpost.com/entry/how-computer-games-are-he_b_6888460?guccounter=1" target="_blank" rel="noopener noreferrer">Huffington Post articles</a>;

  return (
		<Fragment>
			{/* <Banner googleId={"1_aY98Lk6FHivqEKBSv92O42_9QT4LgGT"} /> */}
			<div className={cn(styles.mainContent, { [styles.mobileContent]: isMobile })}>
				<TitleInfo title={"War Child Holland: e-Learning Sudan"} />
				<Video videoId={"PowrWf7RnlE"} />
				<p>
					<strong>Awards:</strong><br />
					UNICEF:<em> Innovation in Education Showcase Programme 2014</em><br />
					Dutch Game Awards 2015:<em> Best Co-Production</em><br />
					<br /><br />
					<strong>Nominations:</strong><br />
					Dutch Game Awards 2015: <em>Best Serious Game</em> <br />
				</p>
				<BigImage googleId={"1w5HxnB7EylZFFjnujA-OGt4XN28zMZlV"} />
				<p>
					In my time with {FLAVOUR}, I was the sole artist for the collaborative project <em>e-Learning Sudan</em>.
					<br /><br />
					Flavour, TNO, War Child Holland, Ahfad University for Women and the Ministry of Education in Sudan were cooperating in the development of
					this fun and effective learning tool.<br /> 
					They were additionally supported by UNICEF International and the Dutch Ministry of Foreign Affairs.
				</p>
				<Thumbnails thumbnails={thumbnails} positions={[0,1,2]}/>
				<p>
					During this project 600 Sudanese children in nineteen Sudanese villages, without access to schools or teachers, learned mathematics on sponsored tablets, powered by donated solar panels.
					<br /><br />
					Aged seven to nine years old, they participated in the second phase of <em>e-Learning Sudan</em>.
				</p>
				<BigImage googleId={"1QYAsUIBgWqPOFiAF-9dkDdzJqWO7BH1t"} />
				<p>
					This tool offered easy and understandable educative games based on the Sudanese educative curriculum, with child-centered design.
				</p>
				<BigImage googleId={"1FMPNPU01iRiZ0qfRDMnffs9r1X5hGD4x"} />
				<p>
					The first pilot took place in 2012 and 2013, which consisted of six weeks of testing on a small scale. 66 children (57% boys and 43% girls) in three remote villages
					participated, plus a control group of twenty children.
					<br /><br />
					The results were remarkable, showing great improvement in mathematical skills with all children.
				</p>
				<BigImage googleId={"1Jsb_YBhDwLgflXTfTzjsCP_HjOEA1MKa"} text={"The loading screen, made from a drawing by a Sudanese child"} />
				<p>
					I visually designed the larger scaled trial, which ran from October 2014 to March 2015.
					<br /><br />
					The trial, large enough to cover three years of curriculum, aimed to repeat the learning results with the aforementioned larger group of children in more states and communities.
				</p>
				<BigImage googleId={"15ev8HOj3fc_Os1aWenSz7vrh_EfwSUZN"} text={"More examples of drawings the children made"} />
				<p>
					I designed the tool to be familiar to children; the environment, characters and assets of the game are created with – and often based on – actual drawings made by Sudanese children.
					<br /><br />
					Their vision and wishes greatly aided me in developing a style suitable to not only entertain them, but boost the learning process as well.
				</p>
				<Thumbnails thumbnails={thumbnails} positions={[3,4]}/>
				<p>
					The balance between realism and colorful decoration was a hard one to find, but feedback from Sudan over the year mentioned improvement of the visual design had
					greatly motivated children to try even harder to complete their in-game village.
				</p>
				<Thumbnails thumbnails={thumbnails} positions={[5,6]}/>
				<p>
					In the game, the children build this village by playing educative mini-games.
					<br /><br />
					These parts of the curriculum (adding and subtracting numbers, recognizing and naming shapes, counting by abacus and so on) are accompanied by an in-game character with a certain profession.
				</p>
				<Thumbnails thumbnails={thumbnails} positions={[7,8,9]}/>
				<Thumbnails thumbnails={thumbnails} positions={[10,11]}/>
				<p>
					Every profession comes with a settlement, which is built in various stages children have to play through.
					<br /><br />
					Once all stages are completed, a finished building decorates the village and produces shop items when mini-games are repeated.
				</p>
				<Thumbnails thumbnails={thumbnails} positions={[12,13]}/>
				<Thumbnails thumbnails={thumbnails} positions={[14,15]}/>
				<Thumbnails thumbnails={thumbnails} positions={[16,17,18]}/>
				<p>
					The professions are based on actual functions people hold in Sudanese rural villages, such as animal owners, farmers, teachers and tea ladies.
					<br /><br />
					I worked with pictures and videos provided by the research team to visualize all of this as realistically and fun as possible.
				</p>
				<Thumbnails thumbnails={thumbnails} positions={[19,20]}/>
				<Thumbnails thumbnails={thumbnails} positions={[21,22]}/>
				<Thumbnails thumbnails={thumbnails} positions={[23,24]}/>
				<Thumbnails thumbnails={thumbnails} positions={[25,26]}/>
				<p>
					The shop items these settlements eventually produce correlate with the profession; the brick maker  will give you bricks, the doctor gives bandages, the cooking station gives pancakes – and so on.
				</p>
				<Thumbnails thumbnails={thumbnails} positions={[0,1,2]}/>
				<p>
					The trader brings exotic goods and luxuries for the shop whenever it arrives in town, such as toys and clothing accessories.
				</p>
				<BigImage googleId={"1JQJ8pMg2g3vLmybBbu7PdH405TDjhK2X"} />
				<p>
					All instructions for the mini-games are in audio and video. Illiterate children can watch the instruction videos as many times as they like.
					<br /><br />
					These videos are also presented by children, who explain new numbers and mathematical concepts.
				</p>
				<Thumbnails thumbnails={thumbnails} positions={[0,1,2]}/>
				<p>
					Players can relate to these presenters and sometimes even see them as role models. “She is like my big sister,” said one child in the first pilot, “if she can do it, I can as well.”
				</p>
				<BigImage googleId={"1w5HxnB7EylZFFjnujA-OGt4XN28zMZlV"} />
				<p>
					The educative exercises have been researched, tested and proven effective by TNO (Netherlands Organisation for Applied Scientific Research), the Netherland’s largest nonprofit research 
					company focusing on applied science.
					<br /><br />
					Below are some examples of the vast number of exercises we created with them:
				</p>
				<Thumbnails thumbnails={thumbnails} positions={[0,1,2]}/>
				<p>
					The huge potential of the project to transform the way that education in emergencies is delivered {RECOGNIZED} by UNICEF, which has chosen eLearning Sudan as one of only five {SHOWCASE} in their
					Innovations in Education programme – out of a 160 entries worldwide.
				</p>
				<BigImage googleId={"1w5HxnB7EylZFFjnujA-OGt4XN28zMZlV"} />
				<p>
					The project has also received attention in the media, varying from {HUFFINGTON} to several Dutch Newspapers. It was nominated Best Serious Game and Best Co-Production for the 2015 Dutch Game Awards.
				</p>
				<Thumbnails thumbnails={thumbnails} positions={[0,1,2]}/>
				<p>
					This project has scope to benefit huge numbers of children in the future. The open software can be shared.
					<br /><br />
					The results of the trial will lay out a foundation for e-Learning projects for out-of-school children in Sudan – and other countries.
				</p>
				<BigImage googleId={"1w5HxnB7EylZFFjnujA-OGt4XN28zMZlV"} />
			</div>
		</Fragment>
		)
	}

  export default Warchild;
