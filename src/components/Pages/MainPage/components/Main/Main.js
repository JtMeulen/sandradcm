import React, { Component } from "react";
import Title from '../Title/Title';
import IconBoxes from '../IconBoxes/IconBoxes';
import Selection from '../Selection/Selection';

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

        <Selection bottomOfWindowPixel={bottomOfWindowPixel} pageName={"games"} {...this.props} />

        <Title
          bottomOfWindowPixel={bottomOfWindowPixel}
          title={"Additional Art"}
          text={"Here are some examples of non-game related pieces I’ve made over the years."}
        />

        <Selection bottomOfWindowPixel={bottomOfWindowPixel} pageName={"art"} {...this.props} />

      </div>
    );
  }
}

export default Main;
