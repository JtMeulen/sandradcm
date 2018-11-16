import React, {Component} from 'react';

import Title from '../Title/Title';
import styles from './AboutPage.module.css';

class AboutPage extends Component {

    render() {

        return (
            
            <div className={styles.container}>
                <Title title={this.props.pageName} />
                <div className={styles.info}>
                    <div className={styles.textArea}>
                        Hello! I am Sandra da Cruz Martins, a 28-year-old 2D game artist from Amsterdam, the Netherlands.
                        <br /><br />
                        In 2011 I graduated the study Game Design &amp; Development at HKU University of the Arts Utrecht, which
                        earned me a Bachelor degree and a Master of Arts - Design for Digital Cultures. I have since been active
                        in the game industry as both a freelancer and with companies.
                        I currently live in Stockholm, Sweden, where I work at King as a game artist for Candy Crush Saga.
                        <br /><br />
                        I specialize in 2D characters and environments, in-game animation and assets, adapting styles,
                        3D texturing, concept sketching and illustration.
                    </div>
                    <img src='http://www.sandradcm.com/wp-content/uploads/2017/11/AboutMe.png' alt=''/>
                </div>
            </div>
        );
    }
}

export default AboutPage;