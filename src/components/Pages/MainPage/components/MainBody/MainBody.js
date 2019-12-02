import React, { Component } from "react";
import { Element } from 'react-scroll'
import { isMobile } from 'react-device-detect';
import cn from 'classnames';

import Title from '../Title/Title';
import IconBoxes from '../IconBoxes/IconBoxes';
import MediaLinks from '../MediaLinks/MediaLinks';
import Selection from '../Selection/Selection';

// import styles from "./MainBody.module.css";

class MainBody extends Component {
  render() {
    const { bottomOfWindowPixel } = this.props;

    const containerStyles = {
      background: '#FFF'
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
          <MediaLinks bottomOfWindowPixel={bottomOfWindowPixel} />
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
            text={"Here are some examples of non-game related pieces I’ve made over the years."}
          />
          <Selection bottomOfWindowPixel={bottomOfWindowPixel} pageName={"art"} {...this.props} />
        </Element>

      </div>
    );
  }
}

export default MainBody;
