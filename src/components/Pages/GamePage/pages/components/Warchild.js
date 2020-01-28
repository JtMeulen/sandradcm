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
		{image: '15SLD8PjthY60-W2pDX1sg3dJ-EiZ48b0', text: "An example of a child's drawing incorporated in the game"}, //3 eLS_Goats
		{image: '1sGA_hS4xur0POfSjthDgSW3UfsppA4cW', text: 'The cows'}, //4 eLS_Cows
		{image: '1MHAD6rOHCuKii80O8uXiegJAQ3MqfzH3', text: 'The first phase of a settlement'}, //5 eLS_ConstructionSite
		{image: '1C4ssXEogF3SwFjpt0iKzK5NsXJW-GOF5', text: "The final state of the goat herder's house"}, //6 eLS_GoatHerder
		{image: '1aiEuS7J10OYI5_bdbkTs9pOqEG2ajC1a', text: ''}, //7 eLS_Stage_1
		{image: '1ztxb2ngU-nyH-GIOq-DZ0DVaET7JlPDs', text: ''}, //8 eLS_Stage_2
		{image: '1ZEw6Y4p03ATKJ9c8hzb9sfssGvT5cKUk', text: ''}, //9 eLS_Stage_3
		{image: '1Hu1kgr_evMNyLhABksEaxqhDjmrt2hYN', text: ''}, //10 eLS_Stage_4
		{image: '1QE7WHt8z-YQm0rce2wntYrSwv0GtZ3kE', text: ''}, //11 eLS_Stage_5
		{image: '1lKUFiKCpcjNFD5pDnNM9AuKDa7Bec8-h', text: 'One of the farmers'}, //12 eLS_Agriculture1
		{image: '1epiqPs_4BqkeqYut2JU1XOTFxBARFADF', text: 'One of the farmers'}, //13 eLS_Agriculture2
		{image: '1yxaATwjii80PfBB7BVtETu9paY1LHDJq', text: 'The tractor owner'}, //14 eLS_TractorOwner
		{image: '1qrcdO_lTlVWTajVhfXESwdTA3dXPtWF4', text: 'The brick maker'}, //15 eLS_BrickMaker
		{image: '1X8NgI1_TvH5DqZWSJ4EgEf094t71Gr3o', text: ''}, //16 eLS_MarketFruit
		{image: '1K5KSfICaY02upnBNlSBrjkh-9CmkLgUK', text: 'The marketplace'}, //17 eLS_MarketGrains
		{image: '1Y5ZVOiyWeh1UOvLktQPEdfbDaQ-pGzwz', text: ''}, //18 eLS_MarketTailor
		{image: '17-cptpIqFiWBsLDW9NPPr9N8IGdNzINx', text: 'The cooking station'}, //19 eLS_CookingStation
		{image: '1rQ7iD0j744o1u6M9FKBQkLzNPHqxpIo4', text: 'The doctor and nurse'}, //20 eLS_DoctorAndNurse
		{image: '12MNdVwDkIY-v5fPYGXqn6QKW1PwEiHg6', text: 'The tea lady'}, //21 eLS_TeaLady
		{image: '174bhzsKdPYS1JJWHQUfZq2DMNwVdQGmE', text: 'The house builder'}, //22 eLS_HouseBuilder
		{image: '1I1r_N3sHCjzL-k1UnfGnhIl1MgkoVlHK', text: 'The lorry driver'}, //23 eLS_LorryDriver
		{image: '1tsV8N_udBboJF8LpCD2ueSndu-qfjKEV', text: 'The urban money man'}, //24 eLS_MoneyMan
		{image: '1eGSwyaNxNQkH-NaJlJOHvxH0yXRHBZRp', text: 'The cattle holder'}, //25 eLS_CattleHolder
		{image: '1mr1KuevZCtIiC3b6WIDWXFh3rzD3lNGn', text: 'The chicken holder'}, //26 eLS_ChickenHolder
		{image: '1yUl-8pLYsfFk_FJCWg64ikhduc8ey3S8', text: ''}, //27 eLS_Thumbnail_1
		{image: '1r8MO1ridVG8_9BNURTd1Ant_6zdpE2YV', text: ''}, //28 eLS_Thumbnail_2
		{image: '1RER1QjU_iIsIo_veT9m3qpMiPj9Z1feN', text: ''}, //29 eLS_Thumbnail_3
		{image: '12zYylyHsNd__RDth1vDbgXckHoyo0oX-', text: 'Place the number correctly on the line'}, //30 eLS_Game_9
		{image: '1kP_tzZCWAJvIsw-YDRwr5MsdAY86NkbD', text: 'Count the correct amount'}, //31 eLS_Game_2
		{image: '1O3Oj1mFEQqqYjvWkHSAMMOZa9Gh9v6D-', text: 'Put the T-shirts in the correct counting order'}, //32 eLS_Game_6
		{image: '1o1gi8d1XsTS95FSr8yJsElMRbVJkzNt5', text: 'Group an asked amount of coins and bills'}, //33 eLS_Game_4
		{image: '1Nut5y7qXid5PP6qdIsAF1pqdbg-r3gIg', text: 'Balance out the scales'}, //34 eLS_Game_5
		{image: '1BOOUxHxwj3xgaIo3hUk3HxbDSHYMhGGa', text: 'Count the fingers before time is up'}, //35 eLS_Game_3
		{image: '18FauXaLUHW4i2ohPyTFFj-6a19PyG_s6', text: 'Fill the boxes with the asked number of eggs'}, //36 eLS_Game_7
		{image: '1MZX2v5CgkAZ4otSHwbnSNGzL0JWrpBVd', text: 'Recognize patterns and count the correct amount'}, //37 eLS_Game_8
		{image: '1k6NKOcOG-0YuA2mtSn__z-Q2JO6B9bvU', text: ''}, //38 eLS_Media4
		{image: '12eryTceRKM-w00Q4f_ut0GBeC78HISby', text: ''}, //39 eLS_Media3
		{image: '1bow5bvAtaE-qIGdSRECSBv2OxwEuq8TY', text: ''}, //40 eLS_Media1
		{image: '18Mcx2plpRvJZ1VQqTfKDtsKlOwr80B0-', text: ''} //41 eLS_Media2
	];

	const FLAVOUR = <a href="https://www.flavour.nl/" target="_blank" rel="noopener noreferrer">Flavour</a>;
	const SHOWCASE = <a href="https://sowc2015.unicef.org/stories/learning-at-their-fingertips/" target="_blank" rel="noopener noreferrer">showcase project</a>;
	const HUFFINGTON = <a href="https://www.huffpost.com/entry/how-computer-games-are-he_b_6888460?guccounter=1" target="_blank" rel="noopener noreferrer">Huffington Post articles</a>;

  return (
		<Fragment>
			{/* <Banner googleId={"1_aY98Lk6FHivqEKBSv92O42_9QT4LgGT"} /> */}
			<div className={cn(styles.mainContent, { [styles.mobileContent]: isMobile })}>
				<TitleInfo title={"War Child Holland: e-Learning Sudan"} />
				<p>
					<strong>Awards:</strong><br />
					UNICEF:<em> Innovation in Education Showcase Programme 2014</em><br />
					Dutch Game Awards 2015:<em> Best Co-Production</em><br />
					<br /><br />
					<strong>Nominations:</strong><br />
					Dutch Game Awards 2015: <em>Best Serious Game</em> <br />
				</p>
				<Video videoId={"PowrWf7RnlE"} />
				<p>
					In my time with {FLAVOUR}, I was the sole artist for the collaborative project <em>e-Learning Sudan</em>.
					<br /><br />
					Flavour, TNO, War Child Holland, Ahfad University for Women and the Ministry of Education in Sudan were cooperating in the development of
					this fun and effective learning tool.<br /> 
					They were additionally supported by UNICEF International and the Dutch Ministry of Foreign Affairs.
				</p>
				<Thumbnails thumbnails={thumbnails} positions={[0,1,2]} height={200}/>
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
				<Thumbnails thumbnails={thumbnails} positions={[3,4]} height={230} marginBottom={50}/>
				<p>
					The balance between realism and colorful decoration was a hard one to find, but feedback from Sudan over the year mentioned improvement of the visual design had
					greatly motivated children to try even harder to complete their in-game village.
				</p>
				<Thumbnails thumbnails={thumbnails} positions={[5,6]} height={230} marginBottom={33}/>
				<p>
					In the game, the children build this village by playing educative mini-games.
					<br /><br />
					These parts of the curriculum (adding and subtracting numbers, recognizing and naming shapes, counting by abacus and so on) are accompanied by an in-game character with a certain profession.
				</p>
				<Thumbnails thumbnails={thumbnails} positions={[7,8,9]} height={115} marginBottom={0}/>
				<Thumbnails thumbnails={thumbnails} positions={[10,11]} height={166} marginBottom={0}/>
				<p>
					Every profession comes with a settlement, which is built in various stages children have to play through.
					<br /><br />
					Once all stages are completed, a finished building decorates the village and produces shop items when mini-games are repeated.
				</p>
				<Thumbnails thumbnails={thumbnails} positions={[12,13]} height={230} marginBottom={33}/>
				<Thumbnails thumbnails={thumbnails} positions={[14,15]} height={230} marginBottom={33} />
				<Thumbnails thumbnails={thumbnails} positions={[16,17,18]} height={156} marginBottom={33}/>
				<p>
					The professions are based on actual functions people hold in Sudanese rural villages, such as animal owners, farmers, teachers and tea ladies.
					<br /><br />
					I worked with pictures and videos provided by the research team to visualize all of this as realistically and fun as possible.
				</p>
				<Thumbnails thumbnails={thumbnails} positions={[19,20]} height={230} marginBottom={33} />
				<Thumbnails thumbnails={thumbnails} positions={[21,22]} height={230} marginBottom={33} />
				<Thumbnails thumbnails={thumbnails} positions={[23,24]} height={230} marginBottom={33} />
				<Thumbnails thumbnails={thumbnails} positions={[25,26]} height={230} marginBottom={33} />
				<p>
					The shop items these settlements eventually produce correlate with the profession; the brick maker  will give you bricks, the doctor gives bandages, the cooking station gives pancakes – and so on.
				</p>
				<BigImage googleId={"1OPTZj5ft3HUFU_wj4LkQ7fK10o2TNs9G"} text={"The final exterior from the upgradeable shop"} />
				<BigImage googleId={"1I6uePw0SOfP23WfwU354Rii_OmjoQHmQ"} text={"The shop interior, with customers coming in to request items (of which some are still locked)"}/>
				<BigImage googleId={"1Rt4eaE-Ct5ebVEfsdWGOoMOpfKgwYfG3"} text={"A close-up of some of the shop stock"} />
				<p>
					The trader brings exotic goods and luxuries for the shop whenever it arrives in town, such as toys and clothing accessories.
				</p>
				<BigImage googleId={"1RNhBDfQHAfehRfFhqE6MDU5XJbzF3yAX"} />
				<p>
					All instructions for the mini-games are in audio and video. Illiterate children can watch the instruction videos as many times as they like.
					<br /><br />
					These videos are also presented by children, who explain new numbers and mathematical concepts.
				</p>
				<Thumbnails thumbnails={thumbnails} positions={[27,28,29]} height={186} marginBottom={0}/>
				<p>
					Players can relate to these presenters and sometimes even see them as role models. “She is like my big sister,” said one child in the first pilot, “if she can do it, I can as well.”
				</p>
				<BigImage googleId={"18Ia7c-rO_lznSrufbwTdpmv938XOaXon"} />
				<p>
					The educative exercises have been researched, tested and proven effective by TNO (Netherlands Organisation for Applied Scientific Research), the Netherland’s largest nonprofit research 
					company focusing on applied science.
					<br /><br />
					Below are some examples of the vast number of exercises we created with them:
				</p>
				<Thumbnails thumbnails={thumbnails} positions={[30,31]} height={230} marginBottom={33} />
				<Thumbnails thumbnails={thumbnails} positions={[32,33]} height={230} marginBottom={33} />
				<Thumbnails thumbnails={thumbnails} positions={[34,35]} height={230} marginBottom={33} />
				<Thumbnails thumbnails={thumbnails} positions={[36,37]} height={230} marginBottom={33} />
				<p>
					The huge potential of the project to transform the way that education in emergencies is delivered has been recognized by UNICEF, which has chosen eLearning Sudan as a {SHOWCASE} in their
					Innovations in Education programme – out of a 160 entries worldwide at the time.
				</p>
				<BigImage googleId={"1ZrWRHfWF2p5DHHAdP6dTc37D78QAuU7-"} />
				<p>
					The project also received attention in the media, varying from {HUFFINGTON} to several Dutch Newspapers. It was nominated Best Serious Game and Best Co-Production for the 2015 Dutch Game Awards.
				</p>
				<Thumbnails thumbnails={thumbnails} positions={[38,39,40,41]} height={250} marginBottom={0}/>
				<p>
					This project has scope to benefit huge numbers of children. The open software can be shared.
					<br /><br />
					The results of the trial laid out a foundation for e-Learning projects for out-of-school children in Sudan – and other countries.
				</p>
				<BigImage googleId={"1UGGYmO6L3EA-YeStRLk9ssPPVdgt9GeG"} />
			</div>
		</Fragment>
		)
	}

  export default Warchild;
