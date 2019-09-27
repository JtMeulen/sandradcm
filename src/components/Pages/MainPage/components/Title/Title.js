import React from 'react';
import Slider from '../../../../Slider';
import styles from "./Title.module.css";

const Title = ({ bottomOfWindowPixel, title, text }) => {
  return (
    <div className={styles.title}>

      <Slider bottomOfWindowPixel={bottomOfWindowPixel}>
        <h1>{title}</h1>
      </Slider>

      <Slider bottomOfWindowPixel={bottomOfWindowPixel}>
        <div className={styles.divider} />
      </Slider>

      <Slider bottomOfWindowPixel={bottomOfWindowPixel}>
        <span className={styles.text}>{text}</span>
      </Slider>

    </div>
  );
};

export default Title;