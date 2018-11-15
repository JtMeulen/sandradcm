import React, {Component} from 'react';

import styles from './Filter.module.css';

class Filter extends Component {

    clickHandler = (e) => {
        this.props.handleFilterClick(e.currentTarget.dataset.id);
    };

    active = (active) => {
        if(active === this.props.active) {
            return true;
        }
        return false;
    }

    render() {
        return (
            <div className={styles.filterBar}>
                <div onClick={this.clickHandler.bind(this)} className={this.active('all') ? styles.active : null} data-id='all'>All</div>
                <div onClick={this.clickHandler.bind(this)} className={this.active('casual') ? styles.active : null} data-id='casual'>Casual Games</div>
                <div onClick={this.clickHandler.bind(this)} className={this.active('serious') ? styles.active : null} data-id='serious'>Serious Games</div>
            </div>
        );
    }
}

export default Filter;