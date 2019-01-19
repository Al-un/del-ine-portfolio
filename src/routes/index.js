// React imports
import React from 'react';
import { Switch, Route } from 'react-router-dom';
// Pages
import AboutPage from '../pages/AboutPage';
import ContactPage from '../pages/ContactPage';
import HomePage from '../pages/HomePage';
import WorkPage from '../pages/WorkPage';

/**
 * https://reacttraining.com/react-router/core/api/
 */
export default class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/work/:id" component={WorkPage} />
        <Route exact path="/about" component={AboutPage} />
        <Route exact path="/contact" component={ContactPage} />
      </Switch>
    );
  }
}
