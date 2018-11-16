import React, {Component} from 'react';

import Title from '../Title/Title';
import Selection from './Selection/Selection';
import styles from './SelectionPage.module.css';

class SelectionPage extends Component {
    render() {
        const subtitle = {
            games: 'A selection of projects I have worked on',
            art: 'A selection of illustrations and characters I made. Check out the sketch pad for more!'
        }

        return(
            <div className={styles.selectionPage}>
                <Title title={this.props.pageName}>
                    {subtitle[this.props.pageName]}
                </Title>
                <Selection {...this.props} />
            </div>
        );
    }
}

export default SelectionPage;