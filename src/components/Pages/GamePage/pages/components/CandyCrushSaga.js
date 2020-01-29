import React, { Fragment } from 'react';
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
  const links = [
    {text: "CityAM", url: ""},
    {text: "the Daily Mirror", url: "https://www.mirror.co.uk/tech/woman-who-creates-candy-crush-11517549"},
    {text: "Marie Claire UK", url: "https://www.marieclaire.co.uk/entertainment/technology/women-in-gaming-566922"},
    {text: "The Ladders", url: ""},
    {text: "Hipertextual", url: "https://hipertextual.com/2017/11/5-anos-candy-crush"},
    {text: "CNews", url: "https://www.cnews.fr/vie-numerique/2017-11-14/candy-crush-saga-fete-cinq-annees-de-sucreries-768981"},
    {text: "Stylist", url: "http://www.sandradcm.com/wp-content/uploads/2017/11/Stylist-22.11.17.pdf"},
    {text: "Breakit", url: "https://www.breakit.se/artikel/9639/sa-skapade-king-sitt-succespel-candy-crush-saga"},
    {text: "SQOOL.net", url: "https://sqool.net/report/archive/interview-candycrush-20180530.html"},
    {text: "the King blog", url: "https://community.king.com/en/candy-crush-saga/discussion/246667/the-art-of-candy-crush-saga"}
  ];

  const thumbnails = [
		{image: '17QYS84EvsMaozZ4xzA7hJFHxmzYUzZWo', text: ''},
		{image: '1u-Zt_RoZChz-OvGHFHzJbfAMH5Wgt1dO', text: ''},
		{image: '1bY4ba3_M2zUwwRXXljejB3VqDRC4lYMT', text: ''},
		{image: '1kN-9r1NqdmpCoz4cdf9qLROwNwO8UAGi', text: ''},
		{image: '1RqZVZeKhO0fP2JNJy4ubMhSILrR651v2', text: ''},
		{image: '1Y6_NM9Wd1sIjznW3S2y8qHMTRc4kKLPT', text: ''},
		{image: '1M0xvyH3lnIrYbNPmpBFplUNLkbRfzwVY', text: ''},
		{image: '17RlxeBzcGwFItzy3tkkXgE_WB72_XEMF', text: ''},
		{image: '11e-o-63gsk0lQiZ8UWwKrqtV3dPtB-1u', text: ''},
		{image: '1xRLIWe8CwkF5c9P2OzLd1rQ2bVLw6U7o', text: ''},
		{image: '12lQe0zXZ6gTDa-gCiH8yzwLPgS8nqCa2', text: ''},
		{image: '17qvOlOFDn0VtBncPrkdKLaqIlBTDkkhs', text: ''},
		{image: '1ZXIRDEdVKLI5UpJ73WffCWPC_1vwXDGb', text: ''},
		{image: '19OR-EYoXo_OtF4iWxww9buq_4kh7kg10', text: ''},
		{image: '1XW7E2xOSnTLV_cdNcn92HgJLRE9zKhfm', text: ''},
		{image: '1o7d70laeEp5wkh5Ds8NPm6Y69QWY_JM8', text: ''},
		{image: '19fZiFXHYAns6UdRGSMouiBqin15gB-Xz', text: ''},
		{image: '1VrCzxDssHGHqMN8DWKGvC2CJuz2ngvuB', text: ''},
		{image: '17lSLJR41RiZwgATLpQXTv7cM3XAvN_tI', text: ''},
		{image: '1I_vJBcx3f6DR_B0bjpX9-N38UtNvYExV', text: ''},
		{image: '1_H2IaOrsVHsa0tB9m6y0rMMO67XSB4Uk', text: ''},
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
			<Banner googleId={"1_aY98Lk6FHivqEKBSv92O42_9QT4LgGT"} />
			<div className={cn(styles.mainContent, { [styles.mobileContent]: isMobile })}>
				<TitleInfo title={"King: Candy Crush Saga"} />
				<p>
				In September 2015 I started working at King as a game artist on Candy Crush Saga. I have worked on
				different parts of the game, with a large focus on content production, live operations and innovating existing
				art and design.
				<br /><br />
				Candy Crush Saga is a free-to-play match-three puzzle game which was first released in 2012.
				Going strong for over seven years, the game and its sister titles have turned into one of the industry’s most
				recognizable franchises, with over a billion unique players around the world.
				</p>
				{/* TODO: VIDEO TO COME HERE */}
				<p>
				Having been part of one of the longest running live games to date for nearly five years, my contributions
				have varied greatly. I mainly create 2D characters, environments and assets for the game, the execution of which has varied
				from composing images to implementing and animating sprites in a 3D environment via King's in-house editor, which is
				comparable to Unity. I have also actively contributed to the game design of new features, designed UI elements like pop-ups
				and oftend supported the narrative and localization crafts with writing and organizing copy.
				I have a strong connection with King's marketing and social media team, bridging the gap between in-game art to promotional
				material and events. Some of my designs were also featured in the Candy Crush TV show.
				<p>
				I have functioned as a King spokesperson in general by doing interviews and other media features. This varied from in-depth
				discussions about the game and its art to topics like women in gaming, most of which which can be found below:
				</p>
				<LinkGroup links={links} />
				<BigImage googleId={"1w6zJtElrKhc1Bo9IYp6MmCRruYs9A3eT"} />
				I also interact regulary with the fans via special events and King's Community forums, with one of the highlights being a
				participation in the video thanking the fans for
				</p>
				{/* TODO: VIDEO TO COME HERE */}
				<p>
				Following are several of the episodes I made over the years. Episodes are bundles of 15 new
				levels, released every week, with custom art and narrative on the Saga map and behind the
				game board.
				</p>
				<Thumbnails thumbnails={thumbnails} positions={[0,1,2,3,4,5]} height={248} marginBottom={0} />
				<p>
				For each episode, the team would brainstorm narrative and titles themselves, no matter how the implementation evolded
				over the years. I was closely involved in revamping our saga map and our ways of working with episodes over the years,
				eventually having contributed to hundreds of episodes out of the current 500.
				</p>
				{/* TODO: VIDEO TO COME HERE */}
				<p>
				An example of a special episode was Bubblegum Bazaar, which contained level 2000. I depicted main characters Tiffi and
				Yeti in search what would happen after level 2000. The mischevious Bubblegum Troll was there to soothe their Y2K scare
				with a glimpse into the future.
				</p>
				<Thumbnails thumbnails={thumbnails} positions={[6,7,8,9,10,11]} height={248} marginBottom={0} />
				<p>
				These designs were featured on worldwide media (such as {BBC_URL}),
				in app stores and on social media. King celebrated level 2000 with a big campaign – check out the video below!
				</p>
				<Video videoId={"D4pCVx6ln3E"} />
				<Thumbnails thumbnails={thumbnails} positions={[12,13,14,15,16,17]} height={248} marginBottom={0} />
				{/* TODO: BIG IMAGE */}
				<p>
				When working with live operations, I contributed visually and with technical implementation, sometimes reskinning existing
				features, but also designing new features and mechanics from time to time. Didi and Rami the Candy Pets were particularly
				fun to draw and design for.
				CANDY PET (app store)
				BOOSTER GARDEN (app store)
				BEAN STALK
				pics from CHRISTMAS STOCKING RESKIN AND KEY QUEST
				</p>
				<Thumbnails thumbnails={thumbnails} positions={[18,19,20,21,22,23]} height={248} marginBottom={0} />
				<p>
				Candy Crush Saga has seen a lot of characters over the years. I have worked with existing cast members, strengthening
				their narrative, giving make-overs where necessary - and adding a few of my own! 
				My characters have featured mainly with live operations, like Didi and Rami. Others were the witch Caramella, who first 
				sent main character Tiffi out hunting for potion ingredients at Halloween 2015. After a player finished a
				special set of levels, Caramella would transform in happiness and hand out her treats. 
				I also created the snowmen Holly and Dale, who often are used for winter themed promotions.
				</p>
				<p>
				Candy’s first collaboration with an outside brand was on a live ops with the US based Marie
				Claire magazine. Then Creative Director Nina Garcia designed a Candy level for a spread they did
				on game design.
				</p>
				<Video videoId={"xVzDu_g8-vY"} />
				<p>
				I created the art for a design-themed live ops – and a Candified version of Garcia herself.
				</p>
				<p>
				Behind the scenes, I have supported the art function in general in different ways. I have done 
				in-house presentations, hosted workshops centered around learning and ways of working, but also organized offsites and
				other fun events to promote team bonding. 
				Other significant learning opportunities were, among others, attending in-house courses centered on management and leadership, 
				life drawing seminars from Samantha Youssef, sculpting by Andrea Blasich and VFX by Obledo. Over the years I also represented 
				King at distinguished art conferences such as THU and IAMAG.
				</p>
				{/* TODO: BIG IMAGE */}
				<p>
				Outside of working with the game teams and art craft, I have had many side projects supporting King as a company. I often create 
				graphics for internal use such as event invitations, office maps, portraits of players and colleagues and more. 
				</p>
				<Thumbnails thumbnails={thumbnails} positions={[24,25,26,27,28,29,30,31,32]} height={248} marginBottom={0} />
			</div>
		</Fragment>
		)
	}

  export default CandyCrushSaga;
