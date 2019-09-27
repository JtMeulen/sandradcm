import React, { Component } from "react";
import Title from '../Title/Title';
import IconBoxes from '../IconBoxes/IconBoxes';
import Slider from '../../../../Slider';

import styles from "./Main.module.css";

class Main extends Component {
  render() {
    const { bottomOfWindowPixel } = this.props;

    return (
      <div className={styles.container}>
        <Title
          bottomOfWindowPixel={bottomOfWindowPixel}
          title={"What I Do"}
          text={"I am currently working at King as a game artist for Candy Crush Saga in Stockholm, Sweden."}
        />

        <IconBoxes bottomOfWindowPixel={bottomOfWindowPixel} />

        <Title
          bottomOfWindowPixel={bottomOfWindowPixel}
          title={"Let’s Get To The Games"}
          text={"These are the projects I’ve worked on in the past."}
        />
      </div>
    );
  }
}

export default Main;
