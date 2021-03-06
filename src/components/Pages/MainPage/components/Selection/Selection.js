import React, {Component} from 'react';
import { isMobile } from 'react-device-detect';

import Filter from './Filter/Filter';
import Thumbnail from './Thumbnail/Thumbnail';
import Slider from '../../../../Slider';
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
        this.setState({filter: 'none'});
        setTimeout(() => this.setState({filter: filter}), 20);
    };

    render() {
        const { bottomOfWindowPixel, pageName } = this.props;

        // only render the filter selection for games
        const renderFilter = () => {
            return pageName === 'games' && !isMobile;
        };

        const thumbNailMaps = {
            games: gamesMap,
            art: artMap
        }

        const thumbnails = thumbNailMaps[pageName].map((item, idx) => {
            if(this.state.filter === 'all'){
                return <Thumbnail key={idx} {...item} {...this.props} index={idx} allthumbnails={thumbNailMaps[pageName]}/>;
            } else if(this.state.filter === item.category) {
                return <Thumbnail key={idx} {...item} {...this.props} />;
            }
            return null;
        });

        return (
            <div className={styles.selectionContainer} >
                {renderFilter() && (
                    <Slider bottomOfWindowPixel={bottomOfWindowPixel}>
                        <Filter handleFilterClick={this.handleFilterClick} active={this.state.filter} />
                    </Slider>
                )}
                <div className={styles.allthumbnails}>{thumbnails}</div>
            </div>
        );
    }
}

export default Selection;