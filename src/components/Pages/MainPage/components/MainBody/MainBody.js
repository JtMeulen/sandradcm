import React, { Component } from "react";
import { Element } from 'react-scroll'
import { isMobile } from 'react-device-detect';

import Title from '../Title/Title';
import IconBoxes from '../IconBoxes/IconBoxes';
import Selection from '../Selection/Selection';
import InstagramFeed from '../InstagramFeed/InstagramFeed';

// import styles from "./MainBody.module.css";

class MainBody extends Component {
  render() {
    const { bottomOfWindowPixel } = this.props;

    const containerStyles = {
      background: '#FFF',
      paddingBottom: "200px",
      paddingTop: "0px"
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
            title={"Hello!"}
            text={"My name is Sandra and I currently work with Scopely as a senior ingame artist."}
          />
          <IconBoxes bottomOfWindowPixel={bottomOfWindowPixel} />
        </Element>

        <Element id="games" name="games-section">
          <Title
            bottomOfWindowPixel={bottomOfWindowPixel}
            title={"Let’s Get To The Games"}
            text={"These are most of the projects I’ve worked on in the past."}
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
            text={"Thanks for visiting! If you want to contact me, send me a message on&nbsp;<a href='https://www.linkedin.com/in/sandradacruzmartins/' target='_blank' rel='noopener noreferrer'>LinkedIn</a>."}
            // subText={"And if you're searching for social media, you might bump into my other big passion: <br /> trying to see as much of the world as possible! <br /><br /> The latest pics of our trips on Instagram:"}
          />
          {/* <InstagramFeed bottomOfWindowPixel={bottomOfWindowPixel} /> */}
        </Element>

      </div>
    );
  }
}

export default MainBody;
