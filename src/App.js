import React, { Component, Fragment } from 'react';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import MainPage from './components/Pages/MainPage/MainPage';
import SelectionPage from './components/Pages/SelectionPage/SelectionPage';
import AboutPage from './components/Pages/AboutPage/AboutPage';
import GamePage from './components/Pages/GamePage/GamePage';

class App extends Component {
  render() {

    let routes = (
      <Switch>
        <Route path="/" exact render={(props) => <MainPage {...props} pageName='games' />} />
        <Route path="/games" exact render={(props) => <SelectionPage {...props} pageName='games' />} />
        <Route path="/my-art" exact render={(props) => <SelectionPage {...props} pageName='art' />} />
        <Route path="/about-me" exact render={(props) => <AboutPage {...props} pageName='about' />} />

        {/* ------------Game Pages --------------*/}
        <Route path="/games/candy-crush-saga" exact render={(props) => <GamePage {...props} />} />
        <Route path="/games/warchild" exact render={(props) => <GamePage {...props} />} />
        <Route path="/games/meldkamer-control" exact render={(props) => <GamePage {...props} />} />
        <Route path="/games/kenau" exact render={(props) => <GamePage {...props} />} />
        <Route path="/games/suez" exact render={(props) => <GamePage {...props} />} />
        <Route path="/games/superhelden" exact render={(props) => <GamePage {...props} />} />
        <Route path="/games/mediamasters" exact render={(props) => <GamePage {...props} />} />
        <Route path="/games/qubios" exact render={(props) => <GamePage {...props} />} />
        <Route path="/games/catch22" exact render={(props) => <GamePage {...props} />} />
        <Route path="/games/allnighter" exact render={(props) => <GamePage {...props} />} />
        <Route path="/games/lightwatch" exact render={(props) => <GamePage {...props} />} />
        <Route path="/games/blokblok" exact render={(props) => <GamePage {...props} />} />
        <Route path="/games/rise-of-gods" exact render={(props) => <GamePage {...props} />} />
        <Route path="/games/jellyreef" exact render={(props) => <GamePage {...props} />} />
        <Route path="/games/vogels" exact render={(props) => <GamePage {...props} />} />
        <Route path="/games/noisia" exact render={(props) => <GamePage {...props} />} />
        <Route path="/games/speed-runner" exact render={(props) => <GamePage {...props} />} />

        <Redirect to="/games" />
      </Switch>
    );

    return (
      <BrowserRouter>
        <Fragment>
          <Navbar />
          {routes}
          <Footer />
        </Fragment>
      </BrowserRouter>
    );
  }
}

export default App;