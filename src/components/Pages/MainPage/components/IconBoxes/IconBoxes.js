import React from 'react';
import Slider from '../../../../Slider';
import styles from "./IconBoxes.module.css";

const IconBoxes = ({ bottomOfWindowPixel }) => {
  return (
    <div className={styles.iconBoxes}>
      <Slider msDelay="0" bottomOfWindowPixel={bottomOfWindowPixel}>
        <div className={styles.iconBox}>
          <div className={styles.icon}></div>
          <h2>A Decade in Gaming</h2>
          <span className={styles.iconText}>
            After successfully completing a four year Game Design &amp;
            Development study, I have been active in the game industry as both a
            freelancer and with companies since 2011.
          </span>
        </div>
      </Slider>
      <Slider msDelay="1" bottomOfWindowPixel={bottomOfWindowPixel}>
        <div className={styles.iconBox}>
          <div className={styles.icon}></div>
          <h2>Like A Chameleon</h2>
          <span className={styles.iconText}>
            I specialize in creating and animating 2D characters, environments
            and assets - and I am particularly fond of doing so in different art
            styles. Variation and adaption is my jam!
          </span>
        </div>
      </Slider>
      <Slider msDelay="2" bottomOfWindowPixel={bottomOfWindowPixel}>
        <div className={styles.iconBox}>
          <div className={styles.icon}></div>
          <h2>Gamification</h2>
          <span className={styles.iconText}>
            Can’t have game art without game design! My background goes beyond
            mobile casual games, as I have years of experience working with the
            concepts of gamification and serious gaming.
          </span>
        </div>
      </Slider>
      <Slider msDelay="3" bottomOfWindowPixel={bottomOfWindowPixel}>
        <div className={styles.iconBox}>
          <div className={styles.icon}></div>
          <h2>I Also Talk A Lot</h2>
          <span className={styles.iconText}>
            I’m an avid public speaker, passionate about sharing knowledge,
            promoting women in gaming or simply chatting about the industry
            behind the scenes.
          </span>
        </div>
      </Slider>
    </div>
  );
};

export default IconBoxes;