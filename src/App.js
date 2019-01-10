import React, { Component } from 'react';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import SelectionPage from './components/SelectionPage/SelectionPage';
import AboutPage from './components/AboutPage/AboutPage';
import GamePage from './components/GamePage/GamePage';

class App extends Component {
  render() {

    let routes = (
      <Switch>
        <Route path="/" exact render={(props) => <SelectionPage {...props} pageName='games' />} />
        <Route path="/my-art" exact render={(props) => <SelectionPage {...props} pageName='art' />} />
        <Route path="/about-me" exact render={(props) => <AboutPage {...props} pageName='about' />} />

        {/* ------------Game Pages --------------*/}
        <Route path="/candy-crush-saga" exact render={(props) => <GamePage {...props} />} />
        <Route path="/warchild" exact render={(props) => <GamePage {...props} />} />
        <Route path="/meldkamer-control" exact render={(props) => <GamePage {...props} />} />
        <Route path="/kenau" exact render={(props) => <GamePage {...props} />} />
        <Route path="/suez" exact render={(props) => <GamePage {...props} />} />
        <Route path="/superhelden" exact render={(props) => <GamePage {...props} />} />
        <Route path="/mediamasters" exact render={(props) => <GamePage {...props} />} />
        <Route path="/qubios" exact render={(props) => <GamePage {...props} />} />
        <Route path="/catch22" exact render={(props) => <GamePage {...props} />} />
        <Route path="/allnighter" exact render={(props) => <GamePage {...props} />} />
        <Route path="/lightwatch" exact render={(props) => <GamePage {...props} />} />
        <Route path="/blokblok" exact render={(props) => <GamePage {...props} />} />
        <Route path="/rise-of-gods" exact render={(props) => <GamePage {...props} />} />
        <Route path="/jellyreef" exact render={(props) => <GamePage {...props} />} />
        <Route path="/vogels" exact render={(props) => <GamePage {...props} />} />
        <Route path="/noisia" exact render={(props) => <GamePage {...props} />} />
        <Route path="/speed-runner" exact render={(props) => <GamePage {...props} />} />

        <Redirect to="/" />
      </Switch>
    );

    const Aux = (props) => {
      return props.children
    }

    return (
      <BrowserRouter>
        <Aux>
          <Navbar />
          {routes}
          <Footer />
        </Aux>
      </BrowserRouter>
    );
  }
}

export default App;