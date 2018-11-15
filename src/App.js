import React, { Component } from 'react';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import SelectionPage from './components/SelectionPage/SelectionPage';
import AboutPage from './components/AboutPage/AboutPage';

class App extends Component {
  render() {

    let routes = (
      <Switch>
        <Route path="/" exact render={(props) => <SelectionPage {...props} pageName='games' />} />
        <Route path="/my-art" exact render={(props) => <SelectionPage {...props} pageName='art' />} />
        <Route path="/about-me" exact render={(props) => <AboutPage {...props} pageName='about' />} />
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
        </Aux>
      </BrowserRouter>
    );
  }
}

export default App;