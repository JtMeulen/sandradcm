import React, { Component } from "react";
import { Element } from 'react-scroll'
import { isMobile } from 'react-device-detect';
import cn from 'classnames';

import Title from '../Title/Title';
import IconBoxes from '../IconBoxes/IconBoxes';
import MediaLinks from '../MediaLinks/MediaLinks';
import Selection from '../Selection/Selection';
import InstagramFeed from '../InstagramFeed/InstagramFeed';

// import styles from "./MainBody.module.css";

class MainBody extends Component {
  render() {
    const { bottomOfWindowPixel } = this.props;

    const containerStyles = {
      background: '#FFF',
      paddingBottom: "200px"
    }
    if (isMobile) {
      containerStyles.padding = '0 20px'
    }

    return (
      // FOR SOME WEIRD REASON THE CLASSNAME IS NOT ATTACHED
        // <div className={cn(styles.mainContainer, { [styles.mobileContainer]: isMobile })}>
      <div style={containerStyles}>
        <Element id="about-me" name="about-me-section">
          <Title
            bottomOfWindowPixel={bottomOfWindowPixel}
            title={"What I Do"}
            text={"I am currently working at King as a game artist for Candy Crush Saga in Stockholm, Sweden."}
          />
          <IconBoxes bottomOfWindowPixel={bottomOfWindowPixel} />
        </Element>

        <Element id="games" name="games-section">
          <Title
            bottomOfWindowPixel={bottomOfWindowPixel}
            title={"Let’s Get To The Games"}
            text={"These are the projects I’ve worked on in the past."}
          />
          <Selection bottomOfWindowPixel={bottomOfWindowPixel} pageName={"games"} {...this.props} />
        </Element>

        <Element id="art" name="art-section">
          <Title
            bottomOfWindowPixel={bottomOfWindowPixel}
            title={"Additional Art"}
            text={"Here are more examples of styles I've explored over the years."}
          />
          <Selection bottomOfWindowPixel={bottomOfWindowPixel} pageName={"art"} {...this.props} />
        </Element>

        <Element id="contact" name="contact-section">
          <Title
            bottomOfWindowPixel={bottomOfWindowPixel}
            title={"Get In Touch"}
            text={"Thanks for visiting! If you want to contact me, please hit me up via &nbsp;<a href='https://www.linkedin.com/in/sandradacruzmartins/' target='_blank' rel='noopener noreferrer'>LinkedIn</a>."}
          />
          <p>
          And if you google me, you will inevitably bump into my other big passion: trying to see as much of the world as possible! 
          <br />
          Country flags
          </p>
          <InstagramFeed />
        </Element>

      </div>
    );
  }
}

export default MainBody;
