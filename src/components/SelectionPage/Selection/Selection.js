import React, {Component} from 'react';

import Filter from './Filter/Filter';
import Thumbnail from './Thumbnail/Thumbnail';
import { gamesMap, artMap } from './constants';
import styles from './Selection.module.css';

class Selection extends Component {
    state = {
        filter: 'all'
    };

    componentDidUpdate() {
        // Art doesn't use a filter, so we set it to all
        if(this.props.pageName === 'art' && this.state.filter !== 'all') {
            this.setState({filter: 'all'});
        }
    };

    handleFilterClick = (filter) => {
        this.setState({filter: filter});
    };

    render() {
        const Aux = (props) => {
            return props.children
        }
        // only render the filter selection for games
        const renderFilter = () => {
            return this.props.pageName === 'games';
        };


        const thumbNailMaps = {
            games: gamesMap,
            art: artMap
        }
        const thumbnails = thumbNailMaps[this.props.pageName].map(item => {
            if(this.state.filter === 'all'){
                return <Thumbnail key={item.name} category={item.category} name={item.name} />;
            } else if(this.state.filter === item.category) {
                return <Thumbnail key={item.name} category={item.category} name={item.name} />;
            }
        });

        return (
            <Aux>
                {renderFilter() && <Filter handleFilterClick={this.handleFilterClick} active={this.state.filter} />}
                <div className={styles.allthumbnails}>{thumbnails}</div>
            </Aux>
        );
    }
}

export default Selection;