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
		{image: '15umXCjeAqxMNvb-9c5eQuhdblUf3bVYJ', text: ''}, //0
		{image: '1WVH_7N1jFcnzk2gUUuzn8CgqmGoPUdW-', text: ''}, //1
		{image: '1l8DTcNZfK4_pj_H-298_WZTgS4OPnuni', text: ''}, //2
		{image: '1cnz0nEGUQIZEGNj8FiKaHA28Nj2HmToe', text: ''}, //3
		{image: '1BnMhcDAh03aBYu3RVIGDVOhuIodhiLMN', text: ''}, //4
		{image: '14j3kwd9Keg7d6J6uxQEm7sa1w4sGlUIU', text: ''}, //5
		{image: '1-CW0XOuFIhXhSmFmrAml46htlGApDuUF', text: ''}, //6
		{image: '1rrcUJtPhomklDP0cCs1tv88v7CzIR4zh', text: ''}, //7
		{image: '1w-G52cun18JvaINjlOWzpZFVWD3SbaFU', text: ''}, //8
		{image: '1DN2mY56mo_Ftj5nATuUbCQpZW8lERjQW', text: ''}, //9
		{image: '11v9JOj4Zd0vqEffZ03V7C-jAHE8OZpA8', text: ''}, //10
		{image: '15zvuwBoyhSZCwzCtel03UayXnQ6Sfkvy', text: ''} //11
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
					<strong>UNICEF:</strong> Innovation in Education Showcase Programme 2014<br />
					<strong>Dutch Game Awards 2015:</strong> Best Co-Production<br />
					<br /><br />
					Nominations:<br />
					<strong>Dutch Game Awards 2015:</strong> Best Serious Game<br />
				</p>
				<BigImage googleId={"1w5HxnB7EylZFFjnujA-OGt4XN28zMZlV"} />
				<p>
					In my time by {FLAVOUR}, I was the sole artist for the collaborative project <em>e-Learning Sudan</em>.
					<br /><br />
					Flavour, TNO, War Child Holland, Ahfad University for Women and the Ministry of Education in Sudan are cooperating in the development of
					this fun and effective learning tool. They are additionally supported by UNICEF International and the Dutch Ministry of Foreign Affairs.
				</p>
				<Thumbnails thumbnails={thumbnails} positions={[0,1,2]}/>
				<p>
					600 Sudanese children in nineteen Sudanese villages, without access to schools or teachers, are now learning mathematics on sponsored tablets, powered by donated solar panels.
					<br /><br />
					Aged seven to nine years old, they are participating in the second phase of <em>e-Learning Sudan</em>.
				</p>
				<BigImage googleId={"1JQJ8pMg2g3vLmybBbu7PdH405TDjhK2X"} />
				<p>
					This tool offers easy and understandable educative games based on the Sudanese educative curriculum, with child-centered design.
				</p>
				<BigImage googleId={"1JQJ8pMg2g3vLmybBbu7PdH405TDjhK2X"} />
				<p>
					The first pilot took place in 2012 and 2013, which consisted of six weeks of testing on a small scale. 66 children (57% boys and 43% girls) in three remote villages
					participated, plus a control group of twenty children.
					<br /><br />
					The results were remarkable, showing great improvement in mathematical skills with all children.
				</p>
				<BigImage googleId={"1w5HxnB7EylZFFjnujA-OGt4XN28zMZlV"} />
				<p>
					I visually designed the larger scaled trial, which ran from October 2014 to March 2015.
					<br /><br />
					The trial, large enough to cover three years of curriculum, aimed to repeat the learning results with the aforementioned larger group of children in more states and communities.
				</p>
				<BigImage googleId={"1w5HxnB7EylZFFjnujA-OGt4XN28zMZlV"} />
				<p>
					I designed the tool to be familiar to children; the environment, characters and assets of the game are created with – and often based on – actual drawings made by Sudanese children.
					<br /><br />
					Their vision and wishes greatly aided me in developing a style suitable to not only entertain them, but boost the learning process as well.
				</p>
				<BigImage googleId={"1w5HxnB7EylZFFjnujA-OGt4XN28zMZlV"} />
				<BigImage googleId={"1w5HxnB7EylZFFjnujA-OGt4XN28zMZlV"} />
				<p>
					The balance between realism and colorful decoration was a hard one to find, but feedback from Sudan over the year mentioned improvement of the visual design has
					greatly motivated children to try even harder to complete their in-game village.
				</p>
				<BigImage googleId={"1w5HxnB7EylZFFjnujA-OGt4XN28zMZlV"} />
				<BigImage googleId={"1w5HxnB7EylZFFjnujA-OGt4XN28zMZlV"} />
				<p>
					In the game, the children build this village by playing educative mini-games.
					<br /><br />
					These parts of the curriculum (adding and subtracting numbers, recognizing and naming shapes, counting by abacus and so on) are accompanied by an in-game character with a certain profession.
				</p>
				<Thumbnails thumbnails={thumbnails} positions={[0,1,2]}/>
				<p>
					Every profession comes with a settlement, which is built in various stages children have to play through.
					<br /><br />
					Once all stages are completed, a finished building decorates the village and produces shop items when mini-games are repeated.
				</p>
				<Thumbnails thumbnails={thumbnails} positions={[0,1,2]}/>
				<p>
					The professions are based on actual functions people hold in Sudanese rural villages, such as animal owners, farmers, teachers and tea ladies.
					<br /><br />
					I worked with pictures and videos provided by the research team to visualize all of this as realistically and fun as possible.
				</p>
				<Thumbnails thumbnails={thumbnails} positions={[0,1,2]}/>
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
