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
          <h2>A Decade in Gaming</h2>
          <span className={styles.iconText}>
            After successfully completing a four year Game Design &amp;
            Development study, I have been active in the game industry as both a
            freelancer and with companies since 2011.
          </span>
        </div>
      </Slider>
      <Slider msDelay="2" bottomOfWindowPixel={bottomOfWindowPixel}>
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
      <Slider msDelay="3" bottomOfWindowPixel={bottomOfWindowPixel}>
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
    </div>
  );
};

export default IconBoxes;