import React from 'react';
import cn from 'classnames';
import { isMobile } from 'react-device-detect';

import Slider from '../../../../Slider';
import styles from "./Title.module.css";

const Title = ({ bottomOfWindowPixel, title, text }) => {
  return (
    <div className={styles.title}>

      <Slider bottomOfWindowPixel={bottomOfWindowPixel}>
        <h1>{title}</h1>
      </Slider>

      <Slider bottomOfWindowPixel={bottomOfWindowPixel}>
        <div className={cn(styles.divider, { [styles.dividerMobile]: isMobile })} />
      </Slider>

      <Slider bottomOfWindowPixel={bottomOfWindowPixel}>
        <span className={styles.text}>{text}</span>
      </Slider>

    </div>
  );
};

export default Title;