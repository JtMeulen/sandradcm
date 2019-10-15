import React, { Fragment } from 'react';

import Banner from '../../components/Banner/Banner';
import TitleInfo from '../../components/TitleInfo/TitleInfo';
import LinkGroup from '../../components/LinkGroup/LinkGroup';
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

    const BBC_URL = <a href="https://www.bbc.com/news/technology-37484114" target="_blank" rel="noopener noreferrer">the BBC</a>;

    return (
        <Fragment>
            <Banner type={"image"} url={"/images/games/thumbnails/CandyCrushSaga.png"} />
            <div className={styles.mainContent}>
                <TitleInfo title={"King: Candy Crush Saga"} />
                <p>
                In September 2015 I started working at King as a game artist on Candy Crush Saga. I have since
                been active within different parts of the game’s production.
                <br /><br />
                Candy Crush Saga is a free-to-play match-three puzzle game which was first released in 2012.
                After five years, the game and its sister titles have turned into one of the industry’s most
                recognizable franchises, with over a billion unique players around the world.
                </p>
                {/* TODO: VIDEO TO COME HERE */}
                <p>
                I mainly create characters and assets for the game and work with composing 2D environments
                and UI elements like pop ups. I contribute to the experience and game design of new features,
                write narrative copy and work on improving the art(ist) function in general.
                I have done many in-house presentations, varying from showcasing ways of working to seminars
                on our style guide. I have also done interviews regarding the game production and my industry
                experience, some of which can be found here:
                </p>
                <LinkGroup links={links} />
                {/* TODO: BIG IMAGE */}
                <p>
                Other significant learning opportunities I had the fortune of receiving from King were, among
                others, attending a DISC course, life drawing seminars from Samantha Youssef and THU 2016.
                </p>
                {/* TODO: BIG IMAGE */}
                <p>
                Following are several of the episodes I made over the years. Episodes are bundles of 15 new
                levels, released every week, with custom art and narrative on the Saga map and behind the
                game board.
                </p>
                {/* TODO: CONTAINER WITH THUMBNAILS */}
                <p>
                For each episode, the team would brainstorm narrative and titles themselves. Episodes are also
                often compiled of pre-existing assets. In this way, I have contributed to over 50 episodes more.
                </p>
                {/* TODO: VIDEO TO COME HERE */}
                <p>
                A special episode was Bubblegum Bazaar, which contained level 2000. The team decided to
                depict main characters Tiffi and Yeti in search what would happen after level 2000. The
                Bubblegum Troll was there to soothe their Y2K scare with a glimpse into the future.
                </p>
                {/* TODO: CONTAINER WITH THUMBNAILS */}
                <p>
                My designs were featured on worldwide media (such as {BBC_URL}),
                in app stores and on social media. King celebrated this with a big campaign – check out the video below!
                </p>
                {/* TODO: VIDEO TO COME HERE https://www.youtube.com/watch?v=D4pCVx6ln3E&amp;feature=youtu.be&amp;_=3 */}
                <p>
                I have created several characters for the game. One is the witch Caramella, who first sent main
                character Tiffi out hunting for potion ingredients at Halloween 2015. After a player finished a
                special set of levels, Caramella would transform in happiness and hand out her treats.
                </p>
                {/* TODO: CONTAINER WITH THUMBNAILS */}
                <p>
                Other examples are the snowmen Holly and Dale, who often are used in holiday and winter
                themed episodes and live-ops.
                </p>
                {/* TODO: BIG IMAGE */}
                <p>
                In my time with the Live Ops team work has been more varied and high-paced. I contribute
                visually and with technical implementation, but also enjoying partaking in designing new
                features with the team.
                </p>
                {/* TODO: CONTAINER WITH THUMBNAILS */}
                <p>
                Candy’s first collaboration with an outside brand was on a live ops with the US based Marie
                Claire magazine. Then Creative Director Nina Garcia designed a Candy level for a spread they did
                on game design.
                </p>
                {/* TODO: VIDEO TO COME HERE https://www.youtube.com/watch?v=xVzDu_g8-vY&amp;_=4 */}
                <p>
                I created the art for a design-themed live ops – and a Candified version of Garcia herself.
                </p>
                <p>
                Next to producing in-game content for Candy Crush I also have had many side projects within
                King. I often create graphics for internal use: PR and social media, event invitations, office maps,
                portraits of players and colleagues and more. Some of my designs were also featured in the
                Candy Crush TV show.
                </p>
            </div>
        </Fragment>
    )
}

export default CandyCrushSaga;