import React, { Fragment, useEffect } from 'react';
import cn from 'classnames';
import { isMobile } from 'react-device-detect';

import Banner from '../../components/Banner/Banner';
import TitleInfo from '../../components/TitleInfo/TitleInfo';
import LinkGroup from '../../components/LinkGroup/LinkGroup';
import Video from '../../components/Video/Video';
import BigImage from '../../components/BigImage/BigImage';
import Thumbnails from '../../components/Thumbnails/Thumbnails';
import styles from './styles.module.css';

const CandyCrushSaga = (props) => {
	useEffect(() => {
		const script = document.createElement('script');
	
		script.src = "//delivery.vidible.tv/jsonp/pid=5688f66de4b040e17d991226/vid=5d2663997a51ca347a260b3c/5688f5c1e4b0f2c97f395156.js";
		script.async = true;
	
		document.body.appendChild(script);
	
		return () => {
		  document.body.removeChild(script);
		}
	  }, []);
	
	const links = [
	{text: "Forbes", url: "https://www.forbes.com/sites/isisbriones/2019/07/02/candy-crush-level-5000-launch/?fbclid=IwAR00Q0ttWxAqZja3PS-S_shZJSWft3b4eBxGywZ-QZdiRObVvje491j3KOo#c66ab4f24ac3"},
	{text: "the Daily Mirror", url: "https://www.mirror.co.uk/tech/woman-who-creates-candy-crush-11517549"},
	{text: "Marie Claire UK", url: "https://www.marieclaire.co.uk/entertainment/technology/women-in-gaming-566922"},
	{text: "Shacknews", url: "https://www.shacknews.com/article/112780/interview-how-candy-crush-sagas-art-has-evolved?fbclid=IwAR3__Q23EGG4ol0LLZU_7fMkgBDvyHKdVK-O2qOXRhwGzx113VSg49ERs0g"}, 
	{text: "The Knockturnal", url: "https://theknockturnal.com/a-sit-down-with-candy-crush-game-artist-sandra-da-cruz-martins/?fbclid=IwAR0CM6w2kjS7dxyDJ_CKtwOBsVi9mfoeyxS4KgD10S5uSmpBuY_VHwx_tTg"}
  ];

  const links2 = [
	{text: "ONE37pm", url:  "https://www.one37pm.com/culture/gaming/candy-crush-king-interviews-future-new-levels-popularity-stats?fbclid=IwAR1EDnQur8zofNVXPvym-aVMdzCkJANezUdZd9cuLXKDHp5zn0MUt1S8tSU"},
	{text: "CityAM", url: "https://germanylatest.com/2017/11/14/candy-crushing-it-kings-jewel-in-the-crown-turns-five/"},
    {text: "The Ladders", url: "https://www.theladders.com/career-advice/4-ways-formulaic-good-way"},
	{text: "Stylist", url: "https://drive.google.com/open?id=1r2z9UdBSubSxOrGHYug4EkPOWtX2E0_c"},
	{text: "the King Community", url: "https://community.king.com/en/candy-crush-saga/discussion/246667/the-art-of-candy-crush-saga"}
  ];

  const links3 = [
	{text: "SQOOL.net (Japanese)", url: "https://sqool.net/report/archive/interview-candycrush-20180530.html"},
	{text: "Hipertextual (Spanish)", url: "https://hipertextual.com/2017/11/5-anos-candy-crush"},
	{text: "CNews (French)", url: "https://www.cnews.fr/vie-numerique/2017-11-14/candy-crush-saga-fete-cinq-annees-de-sucreries-768981"},
	{text: "Breakit (Swedish)", url: "https://www.breakit.se/artikel/9639/sa-skapade-king-sitt-succespel-candy-crush-saga"}
  ];

  const thumbnails = [
		{image: '10swdUyY35PzkbHV_FxBSIJXwcVweOxrN', text: ''}, //0 CCS_Media1
		{image: '1Jwb-Xh0Z0tKd6ZiIdB0gQ7fvM-nqSZ-R', text: ''}, //1 CCS_Media2
		{image: '10RhoC8cU-VnvMIaXPCc8V1hLeyvt3e28', text: ''}, //2 CCS_Media3
		{image: '1QGcxyEEq96QnfWF10mZeOaqQU-WGCwML', text: ''}, //3 CCS_SnappysGarden1
		{image: '1r1YgRktTWdAIlbHSa3zB9DtbHK7V1Mrw', text: "Design for Mr. Snappy's Garden"}, //4 CCS_SnappysGarden2
		{image: '1Ua6wFDyi1Q5XalOyBR5Z_tyPcKcks6rt', text: ''}, //5 CCS_SnappysGarden3
		{image: '1SXbIVOORTr0cEe7fBdG33wO9Ay_L2MGH', text: 'Didi'}, //6 Didi
		{image: '1if5oAbdo8FmLMa_LxTKMsoSDe2nPOb-2', text: 'Rami'}, //7 Rami
		{image: '1yZKbBVAxfDMvY5YHh-LQmUL8vgC2Ejzm', text: ''}, //8 Placeholder
		{image: '1J8LYXYOAMy7PpRQBTsaAFnYRFBvI17ah', text: ''}, //9 BubblegumBazaar1
		{image: '1GSAWRTS4c3u9z7Ti1X3OmEmCUAerct_-', text: ''}, //10 BubblegumBazaar1
		{image: '1_lDnWgHihN7nIUxyeoIrF_I-HF_Bt2Ge', text: ''}, //11 BubblegumBazaar1
		{image: '1aoX-_eAYLRZY9hB9QPsySBf55Sl03KTO', text: 'Crispy Clearing'}, //12 EP1
		{image: '1RAeVOhoDtv3OTJ_ns4mV__QILSdyPKbc', text: 'Treacle Retreat'}, //13 EP2
		{image: '1RhkKcagVgcqH-Tjtg1fguLihN8KYdh5r', text: 'Cobweb Canopy'}, //14 EP3
		{image: '1SJaAGDk967J1AY9oqnIGnq56HkOqgd2K', text: 'Swirly Steppes'}, //15 EP4
		{image: '1X9Q5Cf1TBIYoICo_VXoamLV7sIPfnDah', text: 'Smiley Seas'}, //16 EP5
		{image: '1TpB-z5nkl20HcMjfnVuuY2N69whXGxeQ', text: 'Popsicle Plateau'}, //17 EP6
		{image: '15FpN-a4-A2AcqzEiJWiUCBk12r2wfOta', text: 'Icing Islands'}, //18 EP7
		{image: '1ayWJJbARzuASCtqWfr4NHJUTjkML1x4Z', text: 'Pastry Peaks'}, //19 EP8
		{image: '1KtrOuKqV77e58Ax4BDC8NH_5OullTnoq', text: 'Delicate Dale'}, //20 EP9
		{image: '1pLYFj-dqDaM6gXxrAwh_v4YSaR1ecHUG', text: ''}, 
		{image: '1IKzRVLK4_0aq-43fYP9-MXZQ1vI6kKaV', text: ''},
		{image: '1YqL8ApmMLISAfmU-nq6Fw_ZiIpCJ3azm', text: ''},
		{image: '1PN1e4m8nN6kbhyND--WfieEZqKfh8h2P', text: ''},
		{image: '1VBazvL2P7ChoAekHmPpEoREoJUWXmSvX', text: ''},
		{image: '1M4Mbyxu475whkVxYqmJaIf_01KYI3NWL', text: ''},
		{image: '1kTY3LnhRkwQIadxcwyv16kkm-HCK4P7m', text: ''},
		{image: '1Nfy0gwZEbvdNWbU8jc7yQ4E8o1O-ZIf-', text: ''},
		{image: '11iXMSTpEImCC-MDSAXyGfbjQY8DGCMZG', text: ''},
		{image: '14GFsTIy-0JhJZpdNCpTA8QOKfwC-M5tQ', text: ''},
		{image: '1PLq_nIxmR-r7iUtK5nL8-Gaf2RivSMbV', text: ''},
		{image: '1Y_DbflSYsM0Nk7OD-Fi8PlNS3iV318n9', text: ''}
	];

  const BBC_URL = <a href="https://www.bbc.com/news/technology-37484114" target="_blank" rel="noopener noreferrer">the BBC</a>;

  return (
		<Fragment>
			{/*<Banner googleId={"1_aY98Lk6FHivqEKBSv92O42_9QT4LgGT"} /> */}
			<div className={cn(styles.mainContent, { [styles.mobileContent]: isMobile })}>
				<TitleInfo title={"King: Candy Crush Saga (2015-now)"} />
				<BigImage googleId={"11tRpftYm0UfrJvjvb6cme4KPW--9mEd3"} />
				<p>
				In September 2015, I joined King to work as a game artist on <em>Candy Crush Saga</em>. During this time I have largely focused 
				on content production, live operations and innovating existing art and designs.
				<br /><br />
				For more information on the game and my time working with it, please check out these awesome opportunities I've had so far of 
				representing King as a spokesperson!
				</p>
				<LinkGroup links={links} />
				<LinkGroup links={links2} />
				<LinkGroup links={links3} /><br /><br />
				<Thumbnails thumbnails={thumbnails} positions={[0,1,2]} height={248} marginBottom={0} />
				<p>
				<em>Candy Crush Saga</em> is a free-to-play match-three puzzle game which was first released in 2012.
				<br /><br />
				Going strong for over seven years, the game and its sister titles have turned into one of the industry’s most
				recognizable franchises, with over a billion unique players around the world able to play thousands of levels.
				</p>
				<BigImage googleId={"1xxbnPOLAPc9bIhN9_CFAc7nSzh1Br1K7"} />
				<p>
				Having been part of one of the longest running live games to date for nearly five years, my contributions
				have varied greatly.<br /><br /> 
				I mainly create 2D characters, environments and assets for the game, the execution of which has varied
				from composing images to implementing and animating sprites in a 3D environment via King's in-house editor, which is
				comparable to Unity. 
				</p>
				<Thumbnails thumbnails={thumbnails} positions={[8,8,8]} height={248} marginBottom={0} />
				<p>
				I have contributed actively to the game design of new features, designed UI elements like pop-ups
				and oftend supported the narrative and localization crafts with writing and organizing copy.
				</p>
				<Thumbnails thumbnails={thumbnails} positions={[3,4,5]} height={248} marginBottom={0} />
				<p>
				<em>Candy Crush Saga</em> has seen a lot of characters over the years. I have had a lot fun working with existing cast members, strengthening
				their narrative, giving make-overs and fresh outfits where necessary - and adding a few of my own to boot!<br /><br /> 
				My characters have featured mainly with live operations, with the most well known probably being Didi and Rami the Candy Pets. 
				</p>
				<Thumbnails thumbnails={thumbnails} positions={[6,7]} height={248} marginBottom={0} />
				<p>
				When the Candy Pet feature is active, playing levels provides candy to bake into snacks for your little hungry friend.<br />
				I got to work on both the game design and art for Candy Pet, trying to design baby versions of existing <em>Candy</em> characters - it was a blast!
				</p>
				<Thumbnails thumbnails={thumbnails} positions={[8,8,8]} height={248} marginBottom={0} />
				<p>
				Another character I created was the witch Caramella, who first sent main character Tiffi out hunting for potion ingredients at Halloween 2015. After a player finished a
				special set of levels, Caramella would transform in happiness and hand out her treats. 
				</p>
				<Thumbnails thumbnails={thumbnails} positions={[8,8,8]} height={248} marginBottom={0} />
				<p>
				I further made the snowmen Holly and Dale, who are sometimes used for winter themed promotions. Coincidentally enough, I also created the holiday themed stockings for the
				live event 'Season's Stockings'! 
				</p>
				<Thumbnails thumbnails={thumbnails} positions={[8,8,8]} height={248} marginBottom={0} />
				<p>
				Other live events I participated in producing were the aforementioned Booster Garden, the Beanstalk Challenge, Yeti's Lost Keys and a challenge for New Year's Eve 2015.
				<br /><br />
				When working with these features, I contributed visually, with game design suggestions and with technical implementation. Sometimes I simply reskinned existing
				features as well.
				</p>
				<Thumbnails thumbnails={thumbnails} positions={[8,8,8]} height={248} marginBottom={0} />
				<p>
				One of my biggest occupations within <em>Candy</em>, however, has been involvement with the Saga map format and its episodes. <br /><br />
				Episodes are bundles of 15 new levels, released every week, with custom art and narrative on the Saga map and behind the game board. 
				Here are some examples of mine!
				</p>
				<Thumbnails thumbnails={thumbnails} positions={[12,13,14]} height={248} marginBottom={0} />
				<Thumbnails thumbnails={thumbnails} positions={[15,16,17]} height={248} marginBottom={0} />
				<Thumbnails thumbnails={thumbnails} positions={[18,19,20]} height={248} marginBottom={0} />
				<p>
				At one point in time, <em>Candy</em> made the switch from a 2D to a 3D map. Now, episode art was shown more elaborately near the player's progress, 
				rather than flat images behind the game board. 
				<br /><br />
				It was an exciting challenge to both rework our old episodes into this new format and then see
				where the opportunities for new ways of showing stories could take us.
				</p>
				<Thumbnails thumbnails={thumbnails} positions={[8,8,8]} height={248} marginBottom={0} />
				<p>
				For each episode, the team would brainstorm narrative and titles themselves, no matter how the look and feel evolded
				over the years. 
				<br /><br />
				I was actively engaged in our efforts to maintain a fresh, relevant look. Internally, this meant improving
				our ways of working continuously as well, tackling unique challenges like maintaining a decent app size for a game that's filling up 
				with years worth of content!
				</p>
				<Thumbnails thumbnails={thumbnails} positions={[8,8,8]} height={248} marginBottom={0} />
				<p>
				I have eventually created over 50 episodes and helped out with dozens more.<br /><br />
				Needless to say, it has been really special being a part of a live game for so long. 
				We celebrated many milestones in mobile gaming together, with an example shown below!
				</p>
				<Video videoId={"vU9W3EWRrHQ"} />
				<p>
				One great milestone was reaching level 2000 at the time, around which King also launched a great campaign. I got to work on the episode Bubblegum Bazaar, 
				featuring this special level.<br /><br /> 
				I depicted main characters Tiffi and Yeti in search what would happen after level 2000. The mischevious Bubblegum Troll was there to soothe their Y2K scare
				with a glimpse into the future.
				</p>
				<Thumbnails thumbnails={thumbnails} positions={[9,10,11]} height={248} marginBottom={0} />
				<p>
				These designs were featured on worldwide media (such as {BBC_URL}), in app stores and on social media. 
				</p>
				<Video videoId={"D4pCVx6ln3E"} />
				<p>
				Another great memory was Candy’s first collaboration with an outside brand.<br /><br />
				Creative Director Nina Garcia of the US based magazine Marie Claire worked with King to design a <em>Candy</em> level herself. 
				<br /><br />
				The magazine did a big spread on game design and <em>Candy</em> couldn't stay behind - in the game, we launched an event where you work your way through an editor's room.
				</p>
				<Thumbnails thumbnails={thumbnails} positions={[8,8,8]} height={248} marginBottom={0} />
				<p>
				I was part of the team working on this temporary feature by designing both the office setting and of course a Candified version of Nina Garcia!
				</p>
				<Video videoId={"xVzDu_g8-vY"} />
				<p>
				Behind the scenes, I have done my best to support the art function in different ways. I've done quite some in-house presentations, 
				hosted workshops centered around learning and ways of working and had a lot of fun organizing offsites and other events to promote team bonding.
				</p>
				<Thumbnails thumbnails={thumbnails} positions={[8,8,8]} height={248} marginBottom={0} />
				<p>
				Additional significant learning opportunities were, among others, attending in-house courses centered on management and leadership, 
				life drawing seminars from Samantha Youssef, sculpting by Andrea Blasich and VFX by Francisco García-Obledo. <br /><br />
				Over the years I also represented 
				King at distinguished art conferences like THU and the IAMAG Master Classes.
				</p>
				<Thumbnails thumbnails={thumbnails} positions={[8,8,8]} height={248} marginBottom={0} />
				<p>
				Outside of working with the game team and art craft, I have had many side projects supporting King as a company. I have created 
				graphics for internal use such as event invitations, office maps, portraits of players and colleagues and more. 
				</p>
				<Thumbnails thumbnails={thumbnails} positions={[8,8,8]} height={248} marginBottom={0} />
				<p>
				I sometimes work closely with King's marketing and social media team, bridging the gap between in-game art to promotional
				material and events. Some of my designs were also featured in the Candy Crush TV show.<br /><br />
				As mentioned before, I also function as a King spokesperson at times by doing interviews and other media features. This has varied from in-depth
				discussions about the game and its art to topics like women in gaming - most of which feature at the top of this page.
				</p>
				<p>
				<div
					style={{width: '100%', display: 'flex', justifyContent: 'center'}}
					class="vdb_player vdb_5688f66de4b040e17d9912265688f5c1e4b0f2c97f395156"
					vdb_params="m.refbcid=5643911267b62318603bce5a&m.refpid=57ed326aa01b4d0ffe98b731"
				/>
				</p>
				<p>
				Last but not least, I love to interact with the fans via special events and King's Community forums, with one of the highlights being a
				participation in the video thanking the fans for playing all the way to 5000 levels.<br /><br />
				That being said - new levels are still coming every week!
				</p>
				<Video videoId={"LXJmCvBNxUE"} />
			</div>
		</Fragment>
		)
	}

  export default CandyCrushSaga;
