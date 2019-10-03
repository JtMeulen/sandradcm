import React from 'react';
import Slider from '../../../../Slider';
import styles from "./MediaLinks.module.css";

const MediaLinks = ({ bottomOfWindowPixel }) => {

  const links = [1,2,3,4,5,6,7,8];
  const allLinks = links.map((i) => {
    return (
      <Slider key={i} msDelay="0" bottomOfWindowPixel={bottomOfWindowPixel}>
        <a href="https://google.com" target="_blank" rel="noopener noreferrer">
          <div className={styles.link} />
        </a>
      </Slider>
    )
  });

  return (
    <div className={styles.mediaLinks}>
      <div className={styles.container}>
        {allLinks}
      </div>
    </div>
  );
};

export default MediaLinks;