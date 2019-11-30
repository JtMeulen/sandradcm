import React, {Component} from 'react';

import styles from './GamePage.module.css';

import {
    CandyCrushSaga,
    Warchild,
    MeldkamerControl,
    Kenau,
    Suez,
    Superhelden,
    Mediamasters,
    Qubios,
    Catch22,
    Allnighter,
    Lightwatch,
    Blokblok,
    RiseOfGods,
    JellyReef,
    Vogels,
    Noisia,
    SpeedRunner
 } from './pages';

class GamePage extends Component {
    componentRenderMap = {
        "candy-crush-saga": <CandyCrushSaga {...this.props} />,
        "warchild": <Warchild {...this.props} />,
        "meldkamer-control": <MeldkamerControl {...this.props} />,
        "kenau": <Kenau {...this.props} />,
        "suez": <Suez {...this.props} />,
        "superhelden": <Superhelden {...this.props} />,
        "mediamasters": <Mediamasters {...this.props} />,
        "qubios": <Qubios {...this.props} />,
        "catch22": <Catch22 {...this.props} />,
        "allnighter": <Allnighter {...this.props} />,
        "lightwatch": <Lightwatch {...this.props} />,
        "blokblok": <Blokblok {...this.props} />,
        "rise-of-gods": <RiseOfGods {...this.props} />,
        "jellyreef": <JellyReef {...this.props} />,
        "vogels": <Vogels {...this.props} />,
        "noisia": <Noisia {...this.props} />,
        "speed-runner": <SpeedRunner {...this.props} />
    }

    componentDidMount() {
        window.scrollTo(0, 0)
    }

    render(){
        const route = this.props.match.path.replace('/games/', '');
        return (
            <div className={styles.GamePage} >
                {this.componentRenderMap[route]}
            </div>
        )
    }
}

export default GamePage;