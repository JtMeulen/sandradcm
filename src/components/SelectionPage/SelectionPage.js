import React, {Component} from 'react';

import Title from './Title/Title';
import Selection from './Selection/Selection';
import styles from './SelectionPage.module.css';

class SelectionPage extends Component {

    render() {
        return(
            <div className={styles.selectionPage}>
                <Title title={this.props.pageName} />
                <Selection pageName={this.props.pageName} />
            </div>
        );
    }
}

export default SelectionPage;