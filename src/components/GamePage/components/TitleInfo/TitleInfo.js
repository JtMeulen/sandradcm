import React, {Component} from 'react';

import styles from './TitleInfo.module.css';

class TitleInfo extends Component {
    render(){
        return(
            <div style={styles.TitleInfo}>
                <h2>{this.props.title}</h2>
                <hr />
                <p>{this.props.date}</p>
                <p>{this.props.subtext}</p>
            </div>
        )
    }
}

export default TitleInfo;