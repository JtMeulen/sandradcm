import React from 'react';
import Icon1 from './images/Icon1.png';
import Icon2 from './images/Icon2.png';
import Icon3 from './images/Icon3.png';
import Icon4 from './images/Icon4.png';
import Slider from '../../../../Slider';
import styles from "./IconBoxes.module.css";

const IconBoxes = ({ bottomOfWindowPixel }) => {
  return (
    <div className={styles.iconBoxes}>
      <Slider msDelay="0" bottomOfWindowPixel={bottomOfWindowPixel}>
        <div className={styles.iconBox}>
          <img src={Icon1} alt="" />
          <h2>A Decade in Gaming</h2>
          <span className={styles.iconText}>
            After a four year Game Design &amp;
            Development study, I have been active in the game industry as both a
            freelancer and with companies since 2011.
          </span>
        </div>
      </Slider>
      <Slider msDelay="1" bottomOfWindowPixel={bottomOfWindowPixel}>
        <div className={styles.iconBox}>
          <img src={Icon2} alt="" />
          <h2>Variation & Adaptation</h2>
          <span className={styles.iconText}>
            I specialize in creating 2D characters, environments
            and assets - and I am particularly fond of doing so in different art
            styles.
          </span>
        </div>
      </Slider>
      <Slider msDelay="2" bottomOfWindowPixel={bottomOfWindowPixel}>
        <div className={styles.iconBox}>
          <img src={Icon3} alt="" />
          <h2>Gamification</h2>
          <span className={styles.iconText}>
            Can’t have game art without game design; next to
            mobile casual games, I have years of experience working with educative and serious gaming.
          </span>
        </div>
      </Slider>
      <Slider msDelay="3" bottomOfWindowPixel={bottomOfWindowPixel}>
        <div className={styles.iconBox}>
          <img src={Icon4} alt="" />
          <h2>I Also Talk A Lot</h2>
          <span className={styles.iconText}>
            I’m an avid public speaker, passionate about sharing knowledge,
           women in gaming or simply chatting about the industry
            behind the scenes.
          </span>
        </div>
      </Slider>
    </div>
  );
};

export default IconBoxes;